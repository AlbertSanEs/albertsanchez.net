"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CVSection() {
  const [open, setOpen] = useState(false)


  return (
    <section
      id="cv"
      className="relative py-16 px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(120, 119, 198, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 119, 198, 0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-block mb-2">
            <span className="text-terminal-cyan text-xs tracking-wider">~/curriculum</span>
          </div>
          <h2 className="text-3xl font-semibold mb-2">
            <span className="text-terminal-green">$</span> cv
          </h2>
          <p className="text-muted-foreground text-sm">
            Abre mi currículum completo
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="group relative flex items-center gap-2 px-8 py-3 bg-terminal-green/10 text-terminal-green border border-terminal-green/30 rounded-md text-sm tracking-wide hover:bg-terminal-green/20 transition-all hover:border-terminal-green/50 hover:shadow-[0_0_20px_rgba(117,224,176,0.2)]">
                <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Ver CV</span>
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
              <DialogHeader className="px-6 pt-6 pb-2">
                <DialogTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-terminal-green" />
                  CV - Albert Sanchez Escobar
                </DialogTitle>
              </DialogHeader>

              <div className="flex-1 overflow-hidden bg-background">
                <iframe
                  src="/docs/CV_Resume.pdf#toolbar=1&navpanes=0"
                  className="w-full h-[calc(90vh-120px)] border-0"
                  title="CV Resume"
                />
              </div>
            </DialogContent>
          </Dialog>

          <a
            href="/docs/CV_Resume.pdf"
            download="Albert_Sanchez_CV.pdf"
            className="group relative flex items-center gap-2 px-8 py-3 bg-secondary/10 text-secondary-foreground border border-secondary rounded-md text-sm tracking-wide hover:bg-secondary/20 transition-all hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Descargar</span>
          </a>
        </div>
      </div>
    </section>
  )
}


