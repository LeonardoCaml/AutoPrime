"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import content from "@/content.json"

export function TestimonialsSection() {
  return (
    <section className="bg-[#fff6f5] text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Prova social</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.socialProof.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-black/68">{content.socialProof.text}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.socialProof.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-[1.75rem] border-black/8 bg-white py-0 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.22)]">
                <CardContent className="flex h-full flex-col px-6 py-7">
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-black/72">“{testimonial.text}”</p>
                  <p className="mt-auto pt-8 text-sm font-semibold uppercase tracking-[0.2em] text-black/48">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
