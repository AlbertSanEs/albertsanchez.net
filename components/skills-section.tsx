import { SKILL_CATEGORIES, ADDITIONAL_SKILLS } from "./data/skills-data"

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-terminal-green text-xs">$</span>
          <h2 className="font-serif text-2xl font-semibold text-foreground tracking-tight text-balance">
            cat /proc/skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="font-sans text-[10px] text-terminal-dim mb-3">
                <span className="text-terminal-green">$</span> {category.command}
              </div>
              <h3 className="text-xs font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-muted-foreground">{skill.name}</span>
                      <span className="text-[10px] text-terminal-dim">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-terminal-green/60 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills cloud */}
        <div className="mt-8 rounded-lg border border-border bg-card p-5">
          <div className="font-sans text-[10px] text-terminal-dim mb-3">
            <span className="text-terminal-green">$</span> cat /etc/more-skills.conf
          </div>
          <div className="flex flex-wrap gap-2">
            {ADDITIONAL_SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-[10px] rounded-md bg-secondary/50 text-muted-foreground border border-border hover:text-terminal-green hover:border-terminal-green/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
