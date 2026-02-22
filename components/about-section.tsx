import { Shield, Server, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-terminal-green text-xs">$</span>
          <h2 className="font-serif text-2xl font-semibold text-foreground tracking-tight text-balance">
            cat ~/about/profile.md
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-lg border border-border bg-card p-6">
            <p className="font-serif text-sm leading-relaxed text-muted-foreground mb-4">
              Profesional de infraestructura IT con mas de 5 anos de experiencia en{" "}
              <span className="text-foreground">operaciones de sistemas</span>,{" "}
              <span className="text-foreground">ciberseguridad</span> y{" "}
              <span className="text-foreground">coordinacion de equipos</span> en entornos criticos 24/7.
            </p>
            <p className="font-serif text-sm leading-relaxed text-muted-foreground mb-4">
              Desde mis inicios como SysOps monitorizando infraestructuras bancarias, he evolucionado
              hasta liderar turnos operativos y especializarme en analisis SOC. Mi recorrido en{" "}
              <span className="text-terminal-green">Experis Espana</span> refleja una trayectoria de
              crecimiento constante, asumiendo cada vez mas responsabilidad y complejidad tecnica.
            </p>
            <p className="font-serif text-sm leading-relaxed text-muted-foreground">
              Actualmente cursando{" "}
              <span className="text-foreground">Ingenieria de Tecnologias y Servicios de Telecomunicacion</span>{" "}
              en la UOC, combinando experiencia operativa con una solida base academica en telecomunicaciones.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-card p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md bg-terminal-green/10 flex items-center justify-center">
                <Shield className="w-4.5 h-4.5 text-terminal-green" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">Ciberseguridad</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Analisis SOC L1, SIEM, respuesta ante incidentes</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md bg-terminal-cyan/10 flex items-center justify-center">
                <Server className="w-4.5 h-4.5 text-terminal-cyan" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">Infraestructura</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Windows, RHEL, Vmware, monitorizacion 24/7</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md bg-chart-4/10 flex items-center justify-center">
                <Users className="w-4.5 h-4.5 text-chart-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">Liderazgo</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Coordinacion de turnos, gestion de equipos operativos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
