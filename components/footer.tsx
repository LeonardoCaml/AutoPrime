import content from "@/content.json"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary/80">Auto center</p>
            <h2 className="mt-3 text-3xl font-semibold">{content.site.name}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/66">{content.footer.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Links</h3>
            <ul className="mt-5 space-y-3">
              {content.footer.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-base text-white/82 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Contato</h3>
            <div className="mt-5 space-y-4 text-base text-white/82">
              <p>WhatsApp: {content.contact.whatsapp.numberDisplay}</p>
              <p>E-mail: {content.contact.email}</p>
              <p>Localização: {content.contact.location}</p>
              <p>{content.contact.hours.weekdays}</p>
              <p>{content.contact.hours.saturday}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
