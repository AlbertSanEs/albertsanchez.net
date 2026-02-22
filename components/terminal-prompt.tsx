"use client"

import { useEffect, useState } from "react"

interface TerminalPromptProps {
  command: string
  output?: string
  delay?: number
  showCursor?: boolean
}

export function TerminalPrompt({ command, output, delay = 0, showCursor = false }: TerminalPromptProps) {
  const [displayedCommand, setDisplayedCommand] = useState("")
  const [showOutput, setShowOutput] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      if (i <= command.length) {
        setDisplayedCommand(command.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        if (output) {
          setTimeout(() => setShowOutput(true), 300)
        }
      }
    }, 45)
    return () => clearInterval(interval)
  }, [started, command, output])

  return (
    <div className="font-sans text-sm leading-relaxed">
      <div className="flex items-center gap-2">
        <span className="text-terminal-green">albert@infra</span>
        <span className="text-terminal-dim">:</span>
        <span className="text-terminal-cyan">~</span>
        <span className="text-terminal-dim">$</span>
        <span className="text-foreground">
          {displayedCommand}
          {showCursor && !showOutput && (
            <span className="inline-block w-2 h-4 bg-terminal-green ml-0.5 animate-pulse align-middle" />
          )}
        </span>
      </div>
      {showOutput && (
        <div className="mt-1 text-muted-foreground animate-in fade-in duration-500">
          {output}
        </div>
      )}
    </div>
  )
}
