import content from "@/content.json"

export const WHATSAPP_CONFIG = {
  number: content.contact.whatsapp.number,
  baseUrl: "https://wa.me/",
}

export const createWhatsAppHref = (message: string) =>
  `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`
