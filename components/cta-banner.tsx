"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import content from "@/content.json"
import { createWhatsAppHref } from "@/lib/constants"

export function CtaBanner() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="overflow-hidden rounded-[2.2rem] border border-primary/15 bg-[linear-gradient(135deg,#100909_0%,#7b1212_55%,#040404_100%)] p-8 text-white md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">CTA final</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{content.finalCta.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/72">{content.finalCta.text}</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-green-500 px-8 text-white shadow-[0_18px_40px_-24px_rgba(34,197,94,0.86)] hover:bg-green-600"
            >
              <a href={createWhatsAppHref(content.finalCta.primaryButton.message)} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                {content.finalCta.primaryButton.label}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href={createWhatsAppHref(content.finalCta.secondaryButton.message)}
                target="_blank"
                rel="noreferrer"
              >
                {content.finalCta.secondaryButton.label}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
