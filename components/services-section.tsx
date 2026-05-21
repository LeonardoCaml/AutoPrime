"use client"

import { motion } from "framer-motion"
import content from "@/content.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { createWhatsAppHref } from "@/lib/constants"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Serviços</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.services.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-black/68">{content.services.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {content.services.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-[2rem] border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#fff6f5_100%)] py-0 shadow-[0_24px_60px_-38px_rgba(0,0,0,0.25)]">
                <CardHeader className="rounded-t-[2rem] border-b border-black/6 bg-[linear-gradient(135deg,rgba(228,59,47,0.08),rgba(0,0,0,0))] px-7 py-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
                        Categoria {String(index + 1).padStart(2, "0")}
                      </p>
                      <CardTitle className="mt-3 text-2xl text-black">{category.title}</CardTitle>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-black/68">{category.description}</p>
                </CardHeader>

                <CardContent className="flex h-full flex-col px-7 py-7">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-black/76">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {category.ctaLabel && category.ctaMessage ? (
                    <div className="mt-8">
                      <Button
                        asChild
                        className="w-full rounded-full bg-primary py-6 text-white shadow-[0_18px_40px_-26px_rgba(228,59,47,0.85)] hover:bg-secondary"
                      >
                        <a href={createWhatsAppHref(category.ctaMessage)} target="_blank" rel="noreferrer">
                          <WhatsAppIcon className="w-5 h-5" />
                          {category.ctaLabel}
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
                      <ArrowRight className="h-4 w-4" />
                      Consulte a equipe para disponibilidade e detalhes do serviço.
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-[2rem] border border-black/10 bg-[#050505] p-8 text-white shadow-[0_34px_90px_-52px_rgba(0,0,0,0.85)] md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">Serviços em destaque</p>
          <h3 className="mt-4 text-2xl font-semibold md:text-4xl">{content.services.featured.title}</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {content.services.featured.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-medium text-white/86"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/72">
            {content.services.featured.description}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 overflow-hidden rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,#3a0806_0%,#080504_100%)] p-8 text-white md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">Atendimento</p>
              <h3 className="mt-4 text-2xl font-semibold md:text-4xl">{content.services.commercial.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-white/74">{content.services.commercial.text}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-8 text-white shadow-[0_18px_40px_-24px_rgba(228,59,47,0.85)] hover:bg-secondary"
              >
                <a
                  href={createWhatsAppHref(content.services.commercial.primaryButton.message)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {content.services.commercial.primaryButton.label}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href={createWhatsAppHref(content.services.commercial.secondaryButton.message)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.services.commercial.secondaryButton.label}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
