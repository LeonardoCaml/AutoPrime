import Image from "next/image"
import content from "@/content.json"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { createWhatsAppHref } from "@/lib/constants"

export function Header() {
  const whatsappHref = createWhatsAppHref(content.contact.whatsapp.generalMessage)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="flex h-14 w-36 shrink-0 items-center justify-start overflow-hidden">
            <Image
              src="/images/logo-globo.png"
              alt={`Logo da ${content.site.name}`}
              width={180}
              height={180}
              className="h-14 w-14 origin-center translate-x-11 scale-[2.5] object-contain"
            />
          </a>

          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-white/80">
            {content.navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="rounded-full bg-green-500 px-5 text-white shadow-[0_14px_32px_-18px_rgba(34,197,94,0.9)] hover:bg-green-600"
          >
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-5 h-5" />
              <span className="hidden sm:inline">{content.contact.whatsapp.label}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>

      <div className="xl:hidden border-t border-white/10">
        <nav className="flex gap-5 overflow-x-auto px-6 py-3 text-sm font-medium text-white/75 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {content.navigation.map((item) => (
            <a key={item.label} href={item.href} className="whitespace-nowrap transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
