"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AgentChat, createAgentChat } from "@21st-sdk/nextjs"
import { useChat, type Chat } from "@ai-sdk/react"
import type { UIMessage } from "ai"
import { X, Sparkles } from "lucide-react"
import theme from "@/app/theme.json"
import "@21st-sdk/react/styles.css"

const chat = createAgentChat({
  agent: "my-agent",
  tokenUrl: "/api/an-token",
})

export default function AgentWidget() {
  const [open, setOpen] = useState(false)
  const [booted, setBooted] = useState(false)

  const { messages, status, stop, error, sendMessage } = useChat({
    chat: chat as Chat<UIMessage>,
  })

  // small entrance delay so the launcher doesn't flicker during hydration
  useEffect(() => {
    const id = setTimeout(() => setBooted(true), 400)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      {/* Floating launcher */}
      <AnimatePresence>
        {booted && !open && (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpen(true)}
            className="group fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 rounded-full bg-ink text-white pl-4 pr-5 py-3.5 text-sm font-medium shadow-[0_20px_60px_-15px_rgba(108,93,252,0.55)] hover:bg-brand transition-colors"
            aria-label="Open WORO assistant"
          >
            <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-brand/20 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand animate-pulse" />
            </span>
            Ask WORO
            <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] opacity-60">
              AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[59] bg-ink/20 backdrop-blur-[2px] lg:hidden"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-[60] inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[420px] sm:max-w-[calc(100vw-3rem)] h-[min(620px,calc(100vh-2rem))] bg-white rounded-[28px] border border-line shadow-[0_40px_100px_-20px_rgba(10,10,10,0.35)] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="relative px-5 py-4 flex items-center justify-between border-b border-line bg-white">
                <div className="absolute inset-0 mesh opacity-40 pointer-events-none" />
                <div className="relative flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-blue flex items-center justify-center shadow-[0_0_20px_rgba(108,93,252,0.4)]">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-medium text-[15px] tracking-tight text-ink leading-none">
                      WORO Assistant
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      online · ~instant reply
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="relative w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink hover:bg-soft transition"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat body */}
              <div className="flex-1 min-h-0">
                <AgentChat
                  messages={messages}
                  onSend={(msg) => sendMessage({ text: msg.content })}
                  status={status}
                  onStop={stop}
                  error={error ?? undefined}
                  theme={theme}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
