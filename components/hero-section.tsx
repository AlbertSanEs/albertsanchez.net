"use client"

import Image from "next/image"
import { TerminalPrompt } from "@/components/terminal-prompt"
import { MapPin, Briefcase } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,128,0.015) 2px, rgba(0,255,128,0.015) 4px)",
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-terminal-green/5 blur-3xl pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-5xl w-full flex flex-col items-center gap-10 text-center">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-terminal-green/20 blur-md" />
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-terminal-green/40">
            <Image
              src="/images/albert-avatar.jpg"
              alt="Albert Sanchez Escobar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Terminal intro */}
        <div className="w-full max-w-2xl rounded-lg border border-border bg-terminal-bg/80 p-5 text-left">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-chart-4/70" />
            <span className="w-3 h-3 rounded-full bg-terminal-green/70" />
            <span className="ml-3 text-xs text-muted-foreground">albert@infra-prod ~ </span>
          </div>
          <div className="flex flex-col gap-3">
            <TerminalPrompt
              command='whoami'
              output="Albert Sanchez Escobar"
              delay={500}
            />
            <TerminalPrompt
              command='cat /etc/role'
              output="IT Infrastructure & Cybersecurity Analyst"
              delay={2000}
            />
            <TerminalPrompt
              command='uptime --experience'
              output="+5 years operational | SOC L1 | SysOps | Shift Coordinator"
              delay={3800}
            />
            <TerminalPrompt
              command='echo $STATUS'
              output="Disponible para nuevos retos"
              delay={5400}
              showCursor
            />
          </div>
        </div>

        {/* Info badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-terminal-cyan" />
            Barcelona, Spain
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-terminal-cyan" />
            Experis / ManpowerGroup
          </span>
          <span className="text-border">|</span>
          <span className="text-terminal-green/80">Hybrid</span>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-terminal-green/10 text-terminal-green border border-terminal-green/30 rounded-md text-xs tracking-wide hover:bg-terminal-green/20 transition-all"
          >
            {"> contactar"}
          </a>
          <a
            href="#experis"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-md text-xs tracking-wide hover:bg-secondary/80 transition-all"
          >
            {"> ver trayectoria"}
          </a>
        </div>
      </div>
    </section>
  )
}
