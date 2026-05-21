"use client"

import { motion } from "framer-motion"
import { BadgePercent, ChevronRight } from "lucide-react"
import content from "@/content.json"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { createWhatsAppHref } from "@/lib/constants"

export function PromotionsSection() {
  return (
    <section id="promocoes" className="bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">Promoções</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.promotions.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{content.promotions.text}</p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.promotions.offers.map((offer, index) => (
            <motion.div
              key={offer}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/16 text-primary">
                <BadgePercent className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xl font-semibold">{offer}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
                <ChevronRight className="h-4 w-4" />
                Consulte disponibilidade direto com a equipe.
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="max-w-2xl text-base text-white/72">{content.promotions.note}</p>
          <Button
            asChild
            className="rounded-full bg-green-500 px-8 text-white shadow-[0_16px_34px_-22px_rgba(34,197,94,0.85)] hover:bg-green-600"
          >
            <a href={createWhatsAppHref(content.contact.whatsapp.quoteMessage)} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-5 h-5" />
              Pedir orçamento
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
