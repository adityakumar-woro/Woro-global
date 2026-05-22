"use client";

import React from "react";

/**
 * Class-based error boundary that catches render/runtime errors from the
 * GPU shader children (@paper-design/shaders-react). When WebGL isn't
 * available, the shader library throws synchronously — without a boundary
 * that error bubbles up and crashes the whole page with:
 *
 *   "Paper Shaders: WebGL is not supported in this browser"
 *
 * Wrapping shaders in <ShaderBoundary> makes the error silent: the boundary
 * renders `null` and the page keeps working. Static CSS fallbacks
 * underneath each shader layer become the visible background, so the design
 * degrades gracefully instead of blanking out.
 */
type Props = { children: React.ReactNode; fallback?: React.ReactNode };
type State = { hasError: boolean };

export default class ShaderBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // One-time diagnostic. Don't re-throw — we swallow the error on purpose
    // so the rest of the page keeps rendering.
    if (typeof console !== "undefined") {
      console.warn("[ShaderBoundary] shader disabled:", error);
    }
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

/**
 * Quick WebGL capability probe. Runs once on mount and reports back.
 * Useful for gating shader mounts proactively rather than relying solely
 * on the error boundary to catch the throw.
 */
export function useWebGLSupported(): boolean {
  const [ok, setOk] = React.useState(false);
  React.useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const gl =
        c.getContext("webgl2") ||
        c.getContext("webgl") ||
        c.getContext("experimental-webgl");
      setOk(!!gl);
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}
