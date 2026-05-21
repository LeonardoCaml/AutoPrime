"use client"

import { motion } from "framer-motion"
import content from "@/content.json"

export function ContentHubSection() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Conteúdo</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.contentHub.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/70">{content.contentHub.text}</p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(140deg,#100909_0%,#7d1111_100%)] p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Temas editoriais</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.contentHub.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/82"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
