import { GraduationCap } from "lucide-react"

const EDUCATION = [
  {
    institution: "Universitat Oberta de Catalunya",
    degree: "Ingenieria de Tecnologias y Servicios de Telecomunicacion",
    period: "Feb 2025 - Actualidad",
    status: "En curso",
    current: true,
  },
  {
    institution: "INS Joaquim Mir",
    degree: "Administracion de Sistemas y Redes",
    period: "2016 - 2017",
    skills: ["Cortafuegos", "Enrutadores", "Redes", "Seguridad", "Servidores"],
  },
  {
    institution: "INS Cami de Mar",
    degree: "Desarrollo de Aplicaciones Web (DAW)",
    period: "2014 - 2016",
  },
  {
    institution: "INS Cami de Mar",
    degree: "Sistemas Microinformaticos y Redes (SMR)",
    period: "2012 - 2014",
    skills: ["Cortafuegos", "Enrutadores", "Redes", "Hardware", "SO"],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-terminal-green text-xs">$</span>
          <h2 className="font-serif text-2xl font-semibold text-foreground tracking-tight text-balance">
            cat ~/education/degrees.log
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className={`rounded-lg border bg-card p-5 ${
                edu.current
                  ? "border-terminal-green/30 bg-terminal-green/[0.02]"
                  : "border-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center ${
                  edu.current ? "bg-terminal-green/10" : "bg-secondary"
                }`}>
                  <GraduationCap className={`w-4.5 h-4.5 ${edu.current ? "text-terminal-green" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-xs font-semibold text-foreground">{edu.institution}</h3>
                    {edu.current && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-terminal-green/10 text-terminal-green border border-terminal-green/20">
                        EN CURSO
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{edu.degree}</p>
                  <p className="text-[10px] text-terminal-dim">{edu.period}</p>
                  {edu.skills && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 text-[9px] rounded bg-secondary text-secondary-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
