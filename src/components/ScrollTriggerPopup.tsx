"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { X, ShieldCheck, Sparkles, ArrowUpRight, Check } from "lucide-react";

const SCROLL_TRIGGER_PX = 100;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^[0-9+\-()\s]{7,20}$/;

type Status = "idle" | "sending" | "sent" | "error";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export default function ScrollTriggerPopup() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);

  const [form, setForm] = useState({
    name: "",
    companyEmail: "",
    dialCode: "+91",
    contactNumber: "",
    workEmail: "",
    projectDescription: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 22 });
  const sy = useSpring(my, { stiffness: 60, damping: 22 });
  const orbA_x = useTransform(sx, (v) => v * 36);
  const orbA_y = useTransform(sy, (v) => v * 36);
  const orbB_x = useTransform(sx, (v) => v * -54);
  const orbB_y = useTransform(sy, (v) => v * -54);
  const orbC_x = useTransform(sx, (v) => v * 22);
  const orbC_y = useTransform(sy, (v) => v * -22);

  // Magnetic button
  const btnRef = useRef<HTMLButtonElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const sbtnX = useSpring(btnX, { stiffness: 260, damping: 20 });
  const sbtnY = useSpring(btnY, { stiffness: 260, damping: 20 });

  // Fire every page load when user scrolls past threshold
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      if (shownRef.current) return;
      if (window.scrollY > SCROLL_TRIGGER_PX) {
        shownRef.current = true;
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function handleScene(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function handleBtnMove(e: React.MouseEvent<HTMLButtonElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    btnX.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    btnY.set(((e.clientY - r.top) / r.height - 0.5) * 10);
  }
  function handleBtnLeave() {
    btnX.set(0);
    btnY.set(0);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    setErrorMsg(null);

    if (!form.name.trim()) return setFail("Please tell us your name");
    if (!EMAIL_RE.test(form.companyEmail.trim()))
      return setFail("Enter a valid company email");
    if (!PHONE_RE.test(form.contactNumber.trim()))
      return setFail("Enter a valid contact number");
    if (form.workEmail && !EMAIL_RE.test(form.workEmail.trim()))
      return setFail("Work email looks invalid");

    setStatus("sending");
    try {
      const res = await fetch("/api/popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.issues?.[0]?.message ?? data?.error ?? "Could not send. Please try again."
        );
      }
      setStatus("sent");
      setTimeout(() => setOpen(false), 2200);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }
  function setFail(msg: string) {
    setStatus("error");
    setErrorMsg(msg);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="popup-root"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 isolate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          {/* Backdrop — ink-tinted, heavy blur for depth */}
          <motion.button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-[rgba(10,10,10,0.78)] backdrop-blur-xl cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Close button — always on top */}
          <motion.button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            data-cursor-label="Close"
            initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: -45 }}
            transition={{ delay: 0.35, duration: 0.45, ease: EASE_OUT }}
            whileHover={{ scale: 1.08, rotate: 90 }}
            whileTap={{ scale: 0.92 }}
            className="fixed top-5 right-5 z-[120] w-11 h-11 rounded-full bg-white text-ink border border-white/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center pointer-events-auto"
          >
            <X className="w-5 h-5" strokeWidth={2.2} />
          </motion.button>

          {/* Modal shell — conic gradient aurora border */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            className="relative z-[110] w-full max-w-5xl"
          >
            {/* Aurora border — only the gradient angle animates; the rectangle itself stays still */}
            <div
              aria-hidden
              className="aurora-ring absolute -inset-[1.5px] rounded-[30px] opacity-90"
            />

            {/* Inner card */}
            <div className="relative bg-[#0A0A0A] rounded-[28px] overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]">
              <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">
                {/* LEFT — Cinematic dark pane */}
                <motion.div
                  className="relative min-h-[380px] md:min-h-[640px] overflow-hidden"
                  onMouseMove={handleScene}
                  onMouseLeave={() => {
                    mx.set(0);
                    my.set(0);
                  }}
                >
                  {/* Grid pattern — matches site hero */}
                  <div className="absolute inset-0 grid-bg-dark opacity-80" />

                  {/* Brand mesh gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 12% 12%, rgba(108,93,252,0.55) 0%, transparent 58%)," +
                        "radial-gradient(120% 120% at 92% 28%, rgba(79,70,229,0.40) 0%, transparent 60%)," +
                        "radial-gradient(120% 120% at 50% 108%, rgba(37,99,235,0.38) 0%, transparent 65%)",
                    }}
                  />

                  {/* Parallax blurred orbs — brand palette */}
                  <motion.div
                    className="absolute -top-24 -left-10 w-[380px] h-[380px] rounded-full"
                    style={{
                      x: orbA_x,
                      y: orbA_y,
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(167,139,250,0.9) 0%, rgba(108,93,252,0.8) 40%, transparent 70%)",
                      filter: "blur(48px)",
                    }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute top-1/3 -right-20 w-[340px] h-[340px] rounded-full"
                    style={{
                      x: orbB_x,
                      y: orbB_y,
                      background:
                        "radial-gradient(circle at 60% 40%, rgba(129,140,248,0.9) 0%, rgba(79,70,229,0.8) 40%, transparent 70%)",
                      filter: "blur(44px)",
                    }}
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-[30%] w-[300px] h-[300px] rounded-full"
                    style={{
                      x: orbC_x,
                      y: orbC_y,
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(96,165,250,0.9) 0%, rgba(37,99,235,0.7) 40%, transparent 70%)",
                      filter: "blur(42px)",
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
                  />

                  {/* Filmic noise */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.09] mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>")',
                    }}
                  />

                  {/* Counter-rotating thin rings for 3D depth */}
                  <motion.div
                    aria-hidden
                    className="absolute top-1/2 left-1/2 w-[460px] h-[460px] rounded-full border border-white/[0.06]"
                    style={{ x: "-50%", y: "-50%" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    aria-hidden
                    className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04]"
                    style={{ x: "-50%", y: "-50%" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Floating brand chips */}
                  <motion.div
                    className="absolute top-[18%] right-[10%] z-[2]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BrandChip
                      label="WhatsApp CRM"
                      sub="WORO Chat"
                      glyph="W"
                      from="#6C5DFC"
                      to="#2563EB"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute top-[52%] right-[28%] z-[2]"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  >
                    <BrandChip
                      label="AI voice agent"
                      sub="WORO Voice"
                      glyph="V"
                      from="#A78BFA"
                      to="#4F46E5"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-[20%] left-[10%] z-[2]"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                  >
                    <BrandChip
                      label="Creator studio"
                      sub="WORO UGC"
                      glyph="U"
                      from="#60A5FA"
                      to="#6C5DFC"
                    />
                  </motion.div>

                  {/* Content overlay */}
                  <div className="relative z-[3] h-full flex flex-col justify-between p-8 sm:p-10 md:p-12">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.6, ease: EASE_OUT }}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm"
                      >
                        <span className="relative flex w-1.5 h-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A78BFA] opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A78BFA]" />
                        </span>
                        We&apos;d love to hear from you
                      </motion.div>

                      {/* Masked reveal heading */}
                      <h2
                        id="popup-title"
                        className="mt-6 font-display font-medium text-white text-[clamp(2.4rem,4.8vw,3.8rem)] leading-[0.95] tracking-tight"
                      >
                        <MaskReveal delay={0.35}>Great ideas</MaskReveal>
                        <MaskReveal delay={0.5}>
                          <span
                            className="font-serif-italic"
                            style={{
                              background:
                                "linear-gradient(115deg, #A78BFA 0%, #818cf8 50%, #60a5fa 100%)",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              color: "transparent",
                            }}
                          >
                            start here.
                          </span>
                        </MaskReveal>
                      </h2>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.55, ease: EASE_OUT }}
                        className="mt-5 max-w-sm text-white/70 text-sm sm:text-base leading-relaxed"
                      >
                        Share what you&apos;re building and get a free architecture call with a senior engineer &mdash; no sales pitch, no slides, real answers within a working day.
                      </motion.p>
                    </div>

                    {/* Animated counters */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6, ease: EASE_OUT }}
                      className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6"
                    >
                      <Stat value={120} suffix="+" label="Products shipped" />
                      <Stat value={1} suffix="M+" label="End users reached" decimals={0} />
                      <Stat value={4.9} suffix="" label="Avg. client rating" decimals={1} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* RIGHT — Clean form pane */}
                <div className="relative bg-white p-7 sm:p-10 md:p-12">
                  {/* faint grid */}
                  <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="text-[11px] uppercase tracking-[0.22em] text-muted mb-3"
                    >
                      Tell us about your project
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.55 }}
                      className="font-display font-medium text-[28px] sm:text-[32px] tracking-tight text-ink leading-[1.05]"
                    >
                      Let&apos;s turn your idea<br />
                      <span className="font-serif-italic gradient-text">into a shipped product.</span>
                    </motion.h3>

                    {status === "sent" ? (
                      <SuccessState onClose={() => setOpen(false)} />
                    ) : (
                      <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
                        <Row delay={0.55}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Underlined label="Name" required>
                              <input
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                placeholder="Jane Doe"
                                className="uln"
                              />
                            </Underlined>
                            <Underlined label="Company Email" required>
                              <input
                                value={form.companyEmail}
                                onChange={(e) => setForm({ ...form, companyEmail: e.target.value })}
                                type="email"
                                required
                                placeholder="jane@company.com"
                                className="uln"
                              />
                            </Underlined>
                          </div>
                        </Row>

                        <Row delay={0.65}>
                          <div className="grid grid-cols-[82px_1fr] gap-4">
                            <Underlined label="Code">
                              <select
                                value={form.dialCode}
                                onChange={(e) => setForm({ ...form, dialCode: e.target.value })}
                                className="uln"
                              >
                                {["+91", "+1", "+44", "+61", "+971", "+65"].map((c) => (
                                  <option key={c} value={c}>{c}</option>
                                ))}
                              </select>
                            </Underlined>
                            <Underlined label="Contact Number" required>
                              <input
                                value={form.contactNumber}
                                onChange={(e) => setForm({ ...form, contactNumber: e.target.value })}
                                inputMode="tel"
                                required
                                placeholder="99966 11185"
                                className="uln"
                              />
                            </Underlined>
                          </div>
                        </Row>

                        <Row delay={0.75}>
                          <Underlined label="Work Email (optional)">
                            <input
                              value={form.workEmail}
                              onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                              type="email"
                              placeholder="work@company.com"
                              className="uln"
                            />
                          </Underlined>
                        </Row>

                        <Row delay={0.85}>
                          <Underlined label="Describe your project">
                            <textarea
                              value={form.projectDescription}
                              onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
                              rows={3}
                              placeholder="Problem, scope, timeline&hellip;"
                              className="uln resize-none"
                            />
                          </Underlined>
                        </Row>

                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.95, duration: 0.5 }}
                          className="pt-2"
                        >
                          <motion.button
                            ref={btnRef}
                            type="submit"
                            disabled={status === "sending"}
                            onMouseMove={handleBtnMove}
                            onMouseLeave={handleBtnLeave}
                            style={{ x: sbtnX, y: sbtnY }}
                            className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {status === "sending" ? (
                              <>
                                <span className="inline-block w-3.5 h-3.5 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
                                Sending&hellip;
                              </>
                            ) : (
                              <>
                                Book my free consult
                                <ArrowUpRight className="w-4 h-4 arrow-fly" />
                              </>
                            )}
                          </motion.button>
                          {status === "error" && errorMsg && (
                            <motion.p
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 text-sm text-red-600"
                              role="alert"
                            >
                              {errorMsg}
                            </motion.p>
                          )}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.05, duration: 0.5 }}
                          className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-[11px] text-muted"
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand" /> NDA-protected
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-brand" /> Free strategy call
                          </span>
                          <span>Reach us at <span className="text-ink font-medium">hello@woroglobal.com</span></span>
                        </motion.div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            .uln {
              width: 100%;
              background: transparent;
              border: 0;
              border-bottom: 1px solid var(--color-line, #eaeaec);
              outline: none;
              padding: 10px 0;
              color: var(--color-ink, #0a0a0a);
              font-size: 14px;
              transition: border-color 0.3s, padding 0.3s;
            }
            .uln::placeholder { color: rgba(107, 107, 123, 0.55); }
            .uln:focus {
              border-color: transparent;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ───────────────────── subcomponents ───────────────────── */

function MaskReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Row({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Underlined({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactElement;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <label
      className="block relative"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-2">
        {label}
        {required ? <span className="text-brand ml-1">*</span> : null}
      </span>
      <div className="relative">
        {children}
        {/* animated focus underline */}
        <span
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-[2px] origin-left transition-transform duration-500"
          style={{
            transform: focused ? "scaleX(1)" : "scaleX(0)",
            background:
              "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 50%, #2563EB 100%)",
          }}
        />
      </div>
    </label>
  );
}

function BrandChip({
  label,
  sub,
  glyph,
  from,
  to,
}: {
  label: string;
  sub: string;
  glyph: string;
  from: string;
  to: string;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/10 px-4 py-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-xl grid place-items-center shadow-[0_8px_22px_-8px_rgba(108,93,252,0.6)]"
        style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      >
        <span className="font-display font-medium text-white text-sm">{glyph}</span>
      </div>
      <div className="text-white">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">{sub}</div>
        <div className="text-sm font-medium">{label}</div>
      </div>
    </div>
  );
}

function Stat({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 1,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value]);
  const d = decimals ?? (value >= 10 ? 0 : 1);
  const formatted = display.toFixed(d);
  return (
    <div>
      <div className="font-display font-medium text-white text-3xl sm:text-[2.1rem] tracking-tight leading-none">
        {formatted}
        <span className="gradient-text-light">{suffix}</span>
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-white/55">
        {label}
      </div>
    </div>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-7 rounded-3xl border border-line p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.1 }}
        className="w-14 h-14 mx-auto rounded-full grid place-items-center"
        style={{
          background: "linear-gradient(115deg, #6C5DFC 0%, #4F46E5 100%)",
          boxShadow: "0 20px 50px -15px rgba(108,93,252,0.55)",
        }}
      >
        <motion.span
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
        >
          <Check className="w-6 h-6 text-white" strokeWidth={3} />
        </motion.span>
      </motion.div>
      <h4 className="mt-5 font-display font-medium text-xl tracking-tight text-ink">
        Thank you &mdash; we&apos;ll be in touch.
      </h4>
      <p className="mt-2 text-sm text-muted">
        A human from the team will reply within a working day.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-5 btn-ghost text-sm"
      >
        Keep exploring
      </button>
    </motion.div>
  );
}
