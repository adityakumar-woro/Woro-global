"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Sparkles,
  Line,
  RoundedBox,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* -------------------------------------------------------- */
/* Wireframe globe — the centerpiece                        */
function WireGlobe() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
    if (inner.current) {
      // gentle breathing
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.015;
      inner.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={group}>
      {/* solid translucent core */}
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.45, 6]} />
        <meshStandardMaterial
          color="#6C5DFC"
          emissive="#4F46E5"
          emissiveIntensity={0.4}
          transparent
          opacity={0.18}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* wireframe outer shell */}
      <mesh>
        <icosahedronGeometry args={[1.5, 3]} />
        <meshBasicMaterial color="#A78BFA" wireframe transparent opacity={0.55} />
      </mesh>

      {/* outermost faint ring shell */}
      <mesh>
        <icosahedronGeometry args={[1.62, 2]} />
        <meshBasicMaterial color="#6C5DFC" wireframe transparent opacity={0.18} />
      </mesh>

      <CityDots />
      <ConnectionArcs />
    </group>
  );
}

/* -------------------------------------------------------- */
/* Glowing city dots on the globe surface                   */
const CITIES: [number, number][] = [
  // [lat, lng] in degrees — major tech hubs
  [37.77, -122.41], // SF
  [40.71, -74.0],   // NYC
  [51.5, -0.12],    // London
  [48.85, 2.35],    // Paris
  [52.52, 13.4],    // Berlin
  [55.75, 37.61],   // Moscow
  [28.61, 77.2],    // Delhi
  [12.97, 77.59],   // Bengaluru
  [1.35, 103.81],   // Singapore
  [22.32, 114.16],  // Hong Kong
  [35.68, 139.69],  // Tokyo
  [-33.86, 151.2],  // Sydney
  [-23.55, -46.63], // São Paulo
  [25.27, 55.29],   // Dubai
  [-34.6, -58.38],  // Buenos Aires
  [19.43, -99.13],  // Mexico City
];

function latLngToVec3(lat: number, lng: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function CityDots() {
  const positions = useMemo(
    () => CITIES.map(([lat, lng]) => latLngToVec3(lat, lng, 1.5)),
    []
  );

  return (
    <group>
      {positions.map((p, i) => (
        <PulsingDot key={i} position={p} delay={i * 0.3} />
      ))}
    </group>
  );
}

function PulsingDot({ position, delay }: { position: THREE.Vector3; delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + delay;
    const s = 1 + Math.sin(t * 2) * 0.5;
    ref.current.scale.set(s, s, s);
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.025, 12, 12]} />
      <meshBasicMaterial color="#A78BFA" />
    </mesh>
  );
}

/* -------------------------------------------------------- */
/* Animated data arcs between random city pairs             */
function ConnectionArcs() {
  // Pick 6 stable city pairs
  const pairs = useMemo(() => {
    const idx: [number, number][] = [
      [0, 10], // SF -> Tokyo
      [1, 2],  // NYC -> London
      [2, 7],  // London -> Bengaluru
      [3, 13], // Paris -> Dubai
      [10, 11], // Tokyo -> Sydney
      [7, 8],   // Bengaluru -> Singapore
    ];
    return idx.map(([a, b]) => ({
      from: latLngToVec3(CITIES[a][0], CITIES[a][1], 1.5),
      to: latLngToVec3(CITIES[b][0], CITIES[b][1], 1.5),
    }));
  }, []);

  return (
    <group>
      {pairs.map((p, i) => (
        <Arc key={i} from={p.from} to={p.to} offset={i * 0.6} />
      ))}
    </group>
  );
}

function Arc({
  from,
  to,
  offset,
}: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  offset: number;
}) {
  // build a curved path that arches outward from the sphere
  const { points, midpoint } = useMemo(() => {
    const mid = from.clone().add(to).multiplyScalar(0.5);
    const dist = from.distanceTo(to);
    mid.normalize().multiplyScalar(1.5 + dist * 0.45);
    const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
    return { points: curve.getPoints(48), midpoint: mid };
  }, [from, to]);

  // animated traveling pulse along the arc
  const pulseRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!pulseRef.current) return;
    const t = ((state.clock.elapsedTime + offset) % 3) / 3; // 0..1
    const idx = Math.min(points.length - 1, Math.floor(t * points.length));
    pulseRef.current.position.copy(points[idx]);
    const fade = Math.sin(t * Math.PI);
    pulseRef.current.scale.setScalar(0.6 + fade * 0.6);
  });

  return (
    <group>
      <Line
        points={points}
        color="#A78BFA"
        lineWidth={1.2}
        transparent
        opacity={0.55}
      />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* tiny glow at the apex */}
      <mesh position={midpoint}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshBasicMaterial color="#A78BFA" />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------- */
/* Orbiting product icons                                    */
function ChatBubble() {
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <group position={[2.45, 1.2, 0.3]} rotation={[0, -0.3, 0]}>
        <RoundedBox args={[0.85, 0.6, 0.18]} radius={0.14} smoothness={6}>
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.3}
            metalness={0.4}
            roughness={0.25}
          />
        </RoundedBox>
        {/* tail */}
        <mesh position={[-0.32, -0.32, 0]} rotation={[0, 0, Math.PI / 4]}>
          <coneGeometry args={[0.1, 0.18, 4]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.3}
            metalness={0.4}
            roughness={0.25}
          />
        </mesh>
        {/* dots inside */}
        {[-0.2, 0, 0.2].map((x) => (
          <mesh key={x} position={[x, 0, 0.11]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function VoiceWaveRing() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = state.clock.elapsedTime * 0.6;
    group.current.rotation.x = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={group} position={[-2.4, 1.1, 0.4]}>
        {/* outer ring */}
        <mesh>
          <torusGeometry args={[0.5, 0.04, 16, 80]} />
          <meshStandardMaterial
            color="#6C5DFC"
            emissive="#A78BFA"
            emissiveIntensity={0.6}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
        {/* mid ring */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.34, 0.025, 16, 64]} />
          <meshStandardMaterial
            color="#A78BFA"
            emissive="#A78BFA"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        {/* inner core */}
        <PulseCore />
      </group>
    </Float>
  );
}

function PulseCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.25;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.13, 24, 24]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

function AINode() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * 0.7;
  });
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[2.2, -1.4, -0.2]}>
        <mesh ref={ref}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#2563EB"
            emissiveIntensity={0.55}
            metalness={0.8}
            roughness={0.18}
            flatShading
          />
        </mesh>
        {/* edge wireframe overlay */}
        <mesh>
          <octahedronGeometry args={[0.46, 0]} />
          <meshBasicMaterial color="#A78BFA" wireframe transparent opacity={0.5} />
        </mesh>
        {/* node satellites */}
        {[
          [0.7, 0.3, 0],
          [-0.6, 0.4, 0.2],
          [0.2, -0.7, 0.1],
        ].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial color="#A78BFA" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/* -------------------------------------------------------- */
/* Orbit ring around the globe                              */
function OrbitRing({
  radius,
  tilt,
  color,
  opacity = 0.35,
}: {
  radius: number;
  tilt: [number, number, number];
  color: string;
  opacity?: number;
}) {
  return (
    <mesh rotation={tilt}>
      <torusGeometry args={[radius, 0.005, 8, 96]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

/* -------------------------------------------------------- */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-5, -3, -2]} intensity={0.7} color="#A78BFA" />
      <pointLight position={[0, 0, 4]} intensity={1.6} color="#6C5DFC" />

      <Suspense fallback={null}>
        <WireGlobe />

        <OrbitRing radius={2.1} tilt={[0.4, 0.2, 0]} color="#A78BFA" />
        <OrbitRing radius={2.5} tilt={[-0.3, 0.5, 0.2]} color="#6C5DFC" opacity={0.22} />

        <ChatBubble />
        <VoiceWaveRing />
        <AINode />

        <Sparkles count={70} scale={7} size={2} speed={0.35} opacity={0.6} color="#A78BFA" />

        <Environment preset="city" />
      </Suspense>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[600px]">
      <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-brand/25 via-blue/10 to-transparent blur-2xl pointer-events-none" />
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
