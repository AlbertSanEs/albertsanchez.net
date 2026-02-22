export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-sans text-[10px] text-terminal-dim">
          <span className="text-terminal-green">albert@infra</span>
          <span className="text-terminal-dim">:</span>
          <span className="text-terminal-cyan">~</span>
          <span className="text-terminal-dim">$ uptime</span>
          <span className="text-muted-foreground ml-2">
            {year} | Built with Next.js
          </span>
        </div>
        <div className="text-[10px] text-terminal-dim">
          {'/* Disponible para nuevos retos en infraestructura IT */'}
        </div>
      </div>
    </footer>
  )
}
