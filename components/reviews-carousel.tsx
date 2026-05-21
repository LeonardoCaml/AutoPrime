"use client"

import { useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Star } from "lucide-react"

type Testimonial = {
  name: string
  time: string
  text: string
}

type ReviewsCarouselProps = {
  testimonials: Testimonial[]
}

export function ReviewsCarousel({ testimonials }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const startAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }

      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext()
      }, 4500)
    }

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }

    startAutoplay()
    emblaApi.on("pointerDown", stopAutoplay)
    emblaApi.on("settle", startAutoplay)

    return () => {
      stopAutoplay()
      emblaApi.off("pointerDown", stopAutoplay)
      emblaApi.off("settle", startAutoplay)
    }
  }, [emblaApi])

  return (
    <div className="mt-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {testimonials.map((testimonial) => (
            <div key={`${testimonial.name}-${testimonial.time}`} className="min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_50%] xl:flex-[0_0_33.3333%]">
              <article className="flex h-full min-h-[280px] flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${testimonial.name}-${starIndex}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-white/82">"{testimonial.text}"</p>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {scrollSnaps.length > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={`review-dot-${index}`}
              type="button"
              aria-label={`Ir para avaliação ${index + 1}`}
              aria-pressed={selectedIndex === index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                selectedIndex === index ? "w-8 bg-primary" : "w-2.5 bg-white/24 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
