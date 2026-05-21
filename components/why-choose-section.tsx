"use client"

import { motion } from "framer-motion"
import { BadgeDollarSign, CarFront, Clock3, Handshake, ShieldCheck, Wrench } from "lucide-react"
import content from "@/content.json"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { createWhatsAppHref } from "@/lib/constants"

const differentialIcons = [Clock3, ShieldCheck, BadgeDollarSign, Handshake, Wrench, CarFront]

export function WhyChooseSection() {
  return (
    <section id="diferenciais" className="bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">Diferenciais</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.differentials.title}</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.differentials.items.map((item, index) => {
            const Icon = differentialIcons[index] ?? ShieldCheck

            return (
              <motion.div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/16 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/72">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-green-500 px-8 text-white shadow-[0_18px_40px_-24px_rgba(34,197,94,0.8)] hover:bg-green-600"
          >
            <a href={createWhatsAppHref(content.contact.whatsapp.generalMessage)} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
