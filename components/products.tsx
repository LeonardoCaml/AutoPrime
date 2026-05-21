import Image from "next/image"
import content from "@/content.json"
import { createWhatsAppHref } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export function Products() {
  return (
    <section id="pecas" className="border-b border-black/10 bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">Soluções</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{content.products.title}</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {content.products.items.map((product, index) => {
            const isLast = index === content.products.items.length - 1
            const isOddOnTablet = content.products.items.length % 2 === 1
            const isOddOnDesktop = content.products.items.length % 3 === 1

            return (
            <article
              key={product.title}
              className={cn(
                "relative min-h-[260px] overflow-hidden rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#12143a_0%,#191b4b_100%)]",
                isLast && isOddOnTablet && "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc((100%_-_1.25rem)/2)]",
                isLast && isOddOnDesktop && "xl:col-span-1 xl:col-start-2 xl:max-w-none",
              )}
            >
              {product.image ? <Image src={product.image} alt={product.title} fill className="object-cover" /> : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,45,0.44)_0%,rgba(10,12,45,0.74)_55%,rgba(10,12,45,0.92)_100%),radial-gradient(circle_at_top_right,rgba(63,127,215,0.34),transparent_34%)]" />

              <div className="relative flex h-full flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                    {product.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{product.title}</h3>

                  <p className="mt-5 text-sm leading-relaxed text-white/74">{product.description}</p>
                </div>

                <Button
                  asChild
                  className="mt-6 w-fit rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_-22px_rgba(63,127,215,0.9)] hover:bg-secondary hover:text-[#191b4b]"
                >
                  <a href={createWhatsAppHref(product.ctaMessage)} target="_blank" rel="noreferrer">
                    {product.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={createWhatsAppHref(content.products.primaryCta.message)}
            target="_blank"
            rel="noreferrer"
            className="pulse inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-secondary hover:text-white"
          >
            {content.products.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
