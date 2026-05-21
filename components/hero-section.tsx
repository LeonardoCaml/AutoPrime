"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import content from "@/content.json"
import { createWhatsAppHref } from "@/lib/constants"
import { Clock3, Gauge, MessageCircleMore, ShieldCheck } from "lucide-react"

const highlightIcons = [Clock3, MessageCircleMore, ShieldCheck, Gauge]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/10 bg-black text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/globo-hero-oficina.png')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(228,59,47,0.24),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(120deg,rgba(0,0,0,0.96),rgba(0,0,0,0.82),rgba(80,16,12,0.74))]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <div className="max-w-3xl">
            <motion.p
              className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Oficina automotiva em {content.site.city}, {content.site.state}
            </motion.p>

            <motion.h1
              className="max-w-4xl text-4xl font-semibold leading-tight text-balance md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              {content.hero.title}
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              {content.hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-green-500 px-8 text-white shadow-[0_18px_42px_-24px_rgba(34,197,94,0.88)] hover:bg-green-600"
              >
                <a href={createWhatsAppHref(content.hero.ctaPrimary.message)} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="w-5 h-5" />
                  {content.hero.ctaPrimary.label}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={createWhatsAppHref(content.hero.ctaSecondary.message)} target="_blank" rel="noreferrer">
                  {content.hero.ctaSecondary.label}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Atendimento</p>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-white/60">WhatsApp</p>
                <p className="mt-1 text-xl font-semibold">{content.contact.whatsapp.numberDisplay}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-white/60">Horário</p>
                <p className="mt-1 text-base font-medium">{content.contact.hours.weekdays}</p>
                <p className="text-base font-medium">{content.contact.hours.saturday}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-white/60">Localização</p>
                <p className="mt-1 text-base font-medium">{content.contact.location}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.hero.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index] ?? ShieldCheck

            return (
              <motion.div
                key={highlight}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/18 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-base font-medium text-white/88">{highlight}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
