import Image from "next/image"
import content from "@/content.json"
import { ArrowRight } from "lucide-react"

type HeroProps = {
  whatsappScheduleHref: string
}

export function Hero({ whatsappScheduleHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black">
      <Image
        src="/images/globo-hero-oficina.png"
        alt="Veículo em atendimento na oficina"
        fill
        priority
        className="object-cover object-center grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/74 to-black/48" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/42 to-black/18" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,59,47,0.32),transparent_68%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">
            Auto center em {content.site.city} - {content.site.state}
          </p>

          <h1 className="mt-5 max-w-full text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {content.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/78">
            {content.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappScheduleHref}
              target="_blank"
              rel="noreferrer"
              className="pulse inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary"
            >
              {content.hero.ctaSecondary.label}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#servicos"
              className="pulse inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
