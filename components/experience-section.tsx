"use client"

import { motion } from "framer-motion"
import { Check, MessageSquareText, Sparkles, TimerReset } from "lucide-react"
import content from "@/content.json"

const experiencePoints = [
  { icon: TimerReset, title: "Experiência prática", description: "Atendimento pensado para resolver sem burocracia e sem complicação." },
  { icon: MessageSquareText, title: "Comunicação clara", description: "Você recebe orientação direta, entende o serviço e sabe o que esperar." },
  { icon: Sparkles, title: "Mais conforto na rotina", description: "Buscamos soluções que tornem o atendimento mais leve do início ao fim." },
]

export function ExperienceSection() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Experiência</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.experience.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-black/70">{content.experience.text}</p>
            <div className="mt-8 rounded-[1.75rem] border border-black/10 bg-[#f4faf6] p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-base leading-relaxed text-black/68">{content.experience.optionalText}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {experiencePoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f8f1f1_100%)] p-6 shadow-[0_22px_60px_-44px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  <point.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{point.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-black/68">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
