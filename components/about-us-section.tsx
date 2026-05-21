"use client"

import { motion } from "framer-motion"
import content from "@/content.json"
import { MessageCircleMore, ShieldCheck, Wrench } from "lucide-react"

const trustPoints = [
  `${content.site.experienceYears} anos de mercado`,
  "Atendimento direto pelo WhatsApp",
  "Compromisso com clareza e responsabilidade",
]

const trustIcons = [Wrench, MessageCircleMore, ShieldCheck]

export default function AboutUs() {
  return (
    <section id="sobre" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{content.about.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              {content.about.title}
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-black/72">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(155deg,#050505_0%,#320404_55%,#5d1414_100%)] p-8 text-white shadow-[0_32px_90px_-46px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Mensagem da marca</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">{content.brandMessage.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-white/75">{content.brandMessage.text}</p>

            <div className="mt-8 space-y-4">
              {trustPoints.map((item, index) => {
                const Icon = trustIcons[index]

                return (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium text-white/88">{item}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
