"use client"

import { useState } from "react"
import { ChevronRight, Terminal, Shield, Users } from "lucide-react"

const TIMELINE = [
  {
    role: "SysOps",
    period: "Oct 2020 - Ago 2022",
    duration: "1 ano 11 meses",
    icon: Terminal,
    color: "terminal-green",
    command: "systemctl start career.service",
    description:
      "Integrante del Departamento de Operaciones de Sistemas Informaticos, enfocado en la supervision y gestion tecnica de infraestructuras criticas para entidades bancarias.",
    tasks: [
      "Monitorizacion continua de la infraestructura informatica para detectar anomalias y garantizar la disponibilidad de los servicios",
      "Analisis y revision de graficas, metricas y alertas para el control del rendimiento de sistemas",
      "Diagnostico tecnico de incidencias de primer y segundo nivel, aplicando procedimientos de resolucion o escalado",
      "Ejecucion de intervenciones programadas o de emergencia, asegurando la minima afectacion al entorno productivo",
      "Colaboracion con equipos tecnicos para asegurar la estabilidad operativa de los entornos productivos y de contingencia",
    ],
    skills: ["Windows", "RHEL", "VMware", "Nagios", "Grafana", "ServiceNow", "Active Directory", "DNS", "DHCP"],
  },
  {
    role: "Coordinador de Turno & SysOps",
    period: "Ago 2022 - May 2023",
    duration: "10 meses",
    icon: Users,
    color: "terminal-cyan",
    command: "sudo promote --role=coordinator",
    description:
      "Responsable de coordinar y supervisar las operaciones durante el turno, asegurando el cumplimiento de los estandares de calidad y facilitando la comunicacion entre equipos y departamentos.",
    tasks: [
      "Supervision y asignacion de tareas al personal para optimizar los procesos operativos durante el turno",
      "Deteccion, priorizacion y resolucion de incidencias, garantizando una respuesta eficiente y oportuna",
      "Mantenimiento de una comunicacion fluida con los diferentes departamentos y elaboracion de informes de actividad",
      "Supervision del correcto funcionamiento de los procedimientos operativos, identificando mejoras y colaborando en su implementacion",
      "Asistencia y acompanamiento al equipo durante el turno, fomentando un entorno colaborativo y orientado a resultados",
    ],
    skills: [
      "Windows", "RHEL", "Liderazgo", "Gestion de equipos", "ITIL", "Comunicacion",
      "Resolucion de incidencias", "Reporting", "Coordinacion",
    ],
  },
  {
    role: "Analista de Ciberseguridad SOC L1",
    period: "Mar 2023 - Presente",
    duration: "+3 anos",
    icon: Shield,
    color: "chart-4",
    command: "ssh soc@security-ops --level=analyst",
    description:
      "Analista SOC Nivel 1 con experiencia en monitorizacion de alertas, analisis de eventos de seguridad y respuesta inicial ante incidentes. Familiarizado con entornos SIEM, procedimientos de escalado y documentacion tecnica.",
    tasks: [
      "Monitorizacion continua de alertas de seguridad en entornos SIEM",
      "Analisis de eventos de seguridad y correlacion de indicadores de compromiso (IoC)",
      "Respuesta inicial ante incidentes de seguridad y escalado segun procedimiento",
      "Documentacion tecnica de incidentes y procedimientos operativos",
      "Mejora continua de playbooks y procedimientos de deteccion",
    ],
    skills: [
      "SIEM", "Threat Analysis", "Incident Response", "IoC", "MITRE ATT&CK",
      "Playbooks", "Log Analysis", "Documentacion tecnica",
    ],
  },
]

export function ExperisSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(2)

  return (
    <section id="experis" className="relative px-6 py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--terminal-green)_0%,transparent_60%)] opacity-[0.02] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-terminal-green text-xs">$</span>
          <h2 className="font-serif text-2xl font-semibold text-foreground tracking-tight text-balance">
            tree ~/experis/career-path
          </h2>
        </div>
        <p className="text-xs text-muted-foreground mb-12 ml-6">
          Experis Espana (ManpowerGroup) -- Full-time -- 5 anos 5 meses -- Barcelona, Hybrid
        </p>

        {/* ASCII-style tree connector */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-[23px]" />

          <div className="flex flex-col gap-6">
            {TIMELINE.map((item, index) => {
              const Icon = item.icon
              const isExpanded = expandedIndex === index
              const isCurrent = index === TIMELINE.length - 1

              return (
                <div key={index} className="relative pl-12 md:pl-14">
                  {/* Node dot */}
                  <div
                    className={`absolute left-2.5 top-5 w-4 h-4 rounded-full border-2 md:left-3.5 ${
                      isCurrent
                        ? `bg-${item.color}/20 border-${item.color}`
                        : "bg-secondary border-border"
                    }`}
                  >
                    {isCurrent && (
                      <span className={`absolute inset-0 rounded-full bg-${item.color}/40 animate-ping`} />
                    )}
                  </div>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                    className="w-full text-left rounded-lg border border-border bg-card hover:border-border/80 transition-all"
                  >
                    <div className="flex items-center gap-4 p-5">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-md bg-${item.color}/10 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${item.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-semibold text-foreground">{item.role}</h3>
                          {isCurrent && (
                            <span className="px-2 py-0.5 text-[10px] rounded-full bg-terminal-green/10 text-terminal-green border border-terminal-green/20">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.period} -- {item.duration}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="mt-px rounded-b-lg border border-t-0 border-border bg-card/50 p-5 animate-in slide-in-from-top-2 duration-300">
                      {/* Command */}
                      <div className="font-sans text-xs text-terminal-dim mb-4 flex items-center gap-2">
                        <span className="text-terminal-green">$</span>
                        <span className="text-muted-foreground">{item.command}</span>
                      </div>

                      <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-foreground mb-2">Funciones principales:</p>
                        <ul className="flex flex-col gap-1.5">
                          {item.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                              <span className="text-terminal-dim mt-0.5 flex-shrink-0">{">"}</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">Stack & Skills:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-[10px] rounded-md bg-secondary text-secondary-foreground border border-border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Summary banner */}
        <div className="mt-12 rounded-lg border border-terminal-green/20 bg-terminal-green/5 p-5">
          <div className="font-sans text-xs text-terminal-dim mb-2">
            <span className="text-terminal-green">$</span> git log --oneline --author=albert | wc -l
          </div>
          <p className="font-serif text-sm text-foreground leading-relaxed">
            De operador de sistemas a analista de ciberseguridad: una evolucion natural dentro del ecosistema IT.
            Cada rol en Experis ha construido sobre el anterior, sumando{" "}
            <span className="text-terminal-green">vision tecnica</span>,{" "}
            <span className="text-terminal-cyan">capacidad de liderazgo</span> y{" "}
            <span className="text-chart-4">especializacion en seguridad</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
