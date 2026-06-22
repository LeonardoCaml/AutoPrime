"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import content from "@/content.json";
import { createWhatsAppHref } from "@/lib/constants";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: content.contact.whatsapp.numberDisplay,
  },
  { icon: Mail, label: "E-mail", value: content.contact.email },
  { icon: MapPin, label: "Localização", value: content.contact.location },
  {
    icon: Clock3,
    label: "Horário",
    value: `${content.contact.hours.weekdays}`,
  },
];

export function MapSection() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(content.contact.mapQuery)}&z=13&output=embed`;

  return (
    <section id="contato" className="bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
            Contato
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Atendimento direto para quem quer resolver rápido
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Fale com a equipe da {content.site.name}, tire dúvidas e solicite
            sua avaliação com mais praticidade.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-white/10 bg-black/25 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-white/55">
                        {item.label}
                      </p>
                      <p className="mt-2 text-base font-medium text-white/88">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-green-500 px-6 text-white shadow-[0_18px_40px_-24px_rgba(34,197,94,0.85)] hover:bg-green-600"
              >
                <a
                  href={createWhatsAppHref(
                    content.contact.whatsapp.generalMessage,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href={content.contact.mapLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="w-5 h-5" />
                  Ver no Google Maps
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[2rem] border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="relative min-h-[28rem]">
              <iframe
                src={mapEmbedSrc}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localização da ${content.site.name}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
