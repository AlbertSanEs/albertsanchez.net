import { Linkedin, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-terminal-green text-xs">$</span>
          <h2 className="font-serif text-2xl font-semibold text-foreground tracking-tight text-balance">
            ping albert --contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Terminal contact card */}
          <div className="rounded-lg border border-border bg-terminal-bg/80 p-5">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-chart-4/70" />
              <span className="w-3 h-3 rounded-full bg-terminal-green/70" />
              <span className="ml-3 text-xs text-muted-foreground">contact.sh</span>
            </div>
            <div className="flex flex-col gap-3 font-sans text-xs">
              <div>
                <span className="text-terminal-dim"># Ubicacion</span>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-terminal-cyan" />
                  <span className="text-foreground">Barcelona, Catalonia, Spain</span>
                </div>
              </div>
              <div>
                <span className="text-terminal-dim"># LinkedIn</span>
                <div className="flex items-center gap-2 mt-1">
                  <Linkedin className="w-3.5 h-3.5 text-terminal-cyan" />
                  <a
                    href="https://es.linkedin.com/in/albertsanchezescobar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:underline"
                  >
                    /in/albertsanchezescobar
                  </a>
                </div>
              </div>
              <div>
                <span className="text-terminal-dim"># Email</span>
                <div className="flex items-center gap-2 mt-1">
                  <Mail className="w-3.5 h-3.5 text-terminal-cyan" />
                  <span className="text-foreground">Disponible via LinkedIn</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <span className="text-terminal-green">$</span>
                <span className="text-muted-foreground ml-2">echo $AVAILABILITY</span>
                <p className="text-foreground mt-1">Abierto a oportunidades en infraestructura IT y ciberseguridad</p>
              </div>
            </div>
          </div>

          {/* Value proposition */}
          <div className="rounded-lg border border-terminal-green/20 bg-terminal-green/[0.02] p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
                Por que Albert?
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  {
                    title: "Trayectoria demostrada",
                    desc: "+5 anos de crecimiento continuo en Experis, desde SysOps hasta Analista SOC.",
                  },
                  {
                    title: "Versatilidad operativa",
                    desc: "Experiencia real en sistemas, redes, coordinacion de equipos y ciberseguridad.",
                  },
                  {
                    title: "Entornos criticos",
                    desc: "Habituado a trabajar bajo presion en infraestructuras 24/7 del sector bancario.",
                  },
                  {
                    title: "En constante formacion",
                    desc: "Cursando Ingenieria de Telecomunicaciones en la UOC. Nunca deja de aprender.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="text-terminal-green mt-0.5 flex-shrink-0">{">"}</span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://es.linkedin.com/in/albertsanchezescobar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-terminal-green/10 text-terminal-green border border-terminal-green/30 rounded-md text-xs tracking-wide hover:bg-terminal-green/20 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
