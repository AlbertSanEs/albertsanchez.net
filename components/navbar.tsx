"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const NAV_ITEMS = [
  { id: "about", label: "~/about" },
  { id: "experis", label: "~/experis" },
  { id: "skills", label: "~/skills" },
  { id: "education", label: "~/education" },
  { id: "contact", label: "~/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="text-terminal-green font-sans text-sm tracking-wider hover:text-primary transition-colors"
        >
          albert@infra:~$
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-muted-foreground hover:text-terminal-green text-xs tracking-wide transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-terminal-green transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu de navegacion"
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-2 text-muted-foreground hover:text-terminal-green text-xs tracking-wide transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
