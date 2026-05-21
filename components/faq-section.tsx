"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import content from "@/content.json"

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.faq.title}</h2>
        </motion.div>

        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {content.faq.items.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-white">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-white/68">{faq.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
