"use client"

import { motion } from "framer-motion"
import content from "@/content.json"

const showcaseImages = [
  "/images/sun-amper-banner.png",
  "/images/sun-amper-inversor-deye.png",
  "/images/sun-amper-manutencao.png",
]

export function BeforeAfterSection() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">Antes e depois</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.beforeAfter.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{content.beforeAfter.text}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.beforeAfter.items.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative overflow-hidden rounded-[1.9rem] border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${showcaseImages[index]})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.82))]" />
              <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-7">
                <p className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  {item.label}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/72">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
