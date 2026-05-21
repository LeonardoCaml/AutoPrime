import Image from "next/image"
import { ArrowRight } from "lucide-react"
import content from "@/content.json"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { createWhatsAppHref } from "@/lib/constants"

type ServicesProps = {
  whatsappServicesHref: string
  whatsappGeneralHref: string
}

const serviceImages: Record<string, string> = {
  "Instalação residencial": "/images/sun-amper-banner.png",
  "Empresas e indústrias": "/images/sun-amper-inversor-deye.png",
  "Manutenção e limpeza": "/images/sun-amper-manutencao.png",
  "Laudo de certificação": "/images/sun-amper-parceiros.png",
  "Quadro de segurança": "/images/sun-amper-string-box.png",
  "Padrão bifásico e trifásico": "/images/sun-amper-inversor-growatt.png",
}

export function Services({ whatsappServicesHref, whatsappGeneralHref }: ServicesProps) {
  const services = content.services.categories

  return (
    <section id="servicos" className="border-b border-black/10 bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">Serviços</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{content.services.title}</h2>
          <p className="mt-4 text-base text-black/68">{content.services.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const isLast = index === services.length - 1
            const isOddOnTablet = services.length % 2 === 1
            const isOddOnDesktop = services.length % 3 === 1
            const image = serviceImages[service.title] || "/images/sun-amper-banner.png"

            return (
              <article
                key={service.title}
                className={cn(
                  "relative min-h-[260px] overflow-hidden rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#08140f_0%,#152412_100%)]",
                  isLast && isOddOnTablet && "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc((100%_-_1.25rem)/2)]",
                  isLast && isOddOnDesktop && "xl:col-span-1 xl:col-start-2 xl:max-w-none",
                )}
              >
                <Image src={image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.72)_55%,rgba(0,0,0,0.9)_100%),radial-gradient(circle_at_top_right,rgba(246,194,31,0.28),transparent_34%)]" />

                <div className="relative flex h-full flex-col justify-between p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                      Serviço
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-5 text-sm leading-relaxed text-white/74">{service.description}</p>
                  </div>

                  <Button
                    asChild
                    className="mt-6 w-fit rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_34px_-22px_rgba(246,194,31,0.85)] hover:bg-secondary"
                  >
                    <a href={service.ctaMessage ? createWhatsAppHref(service.ctaMessage) : whatsappServicesHref} target="_blank" rel="noreferrer">
                      {service.ctaLabel || "Consultar serviço"}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappGeneralHref}
            target="_blank"
            rel="noreferrer"
            className="pulse inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-secondary hover:text-white"
          >
            Pedir orçamento pelo WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
