import Image from "next/image";
import { ArrowRight } from "lucide-react";
import content from "@/content.json";
import { Button } from "@/components/ui/button";
import { createWhatsAppHref } from "@/lib/constants";

type ServicesProps = {
  whatsappServicesHref: string;
  whatsappGeneralHref: string;
};

const serviceImages: Record<string, string> = {
  "Revisão completa": "/assets/Revisão completa.png",
  Suspensão: "/assets/Suspensão.png",
  Freios: "/assets/Freios.png",
  "Troca de óleo": "/assets/Troca de óleo.png",
  "Alinhamento e balanceamento": "/assets/Alinhamento e balanceamento.png",
};

export function Services({
  whatsappServicesHref,
  whatsappGeneralHref,
}: ServicesProps) {
  const services = content.services.categories;

  const remainder = services.length % 3;

  const mainServices =
    remainder === 0 ? services : services.slice(0, services.length - remainder);

  const lastRowServices = remainder > 0 ? services.slice(-remainder) : [];

  const renderCard = (service: any) => {
    const image =
      serviceImages[service.title] || "/assets/revisao-completa.png";

    return (
      <article
        key={service.title}
        className="
          relative min-h-[260px] overflow-hidden rounded-3xl border border-black/10
          bg-[linear-gradient(180deg,#12143a_0%,#191b4b_100%)]"
      >
        <Image
          src={image}
          alt={service.title}
          fill
          className="object-cover blur-[1.4px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-background/90" />

        <div className="relative flex h-full flex-col justify-between p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary/90 text-shadow-md">
              Serviço
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white text-shadow-md">
              {service.title}
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-white/74 text-shadow-md">
              {service.description}
            </p>
          </div>

          <Button
            asChild
            className="
              mt-6 w-fit rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white
              shadow-[0_18px_34px_-22px_rgba(63,127,215,0.9)]
              hover:bg-secondary hover:text-[#191b4b]
            "
          >
            <a
              href={
                service.ctaMessage
                  ? createWhatsAppHref(service.ctaMessage)
                  : whatsappServicesHref
              }
              target="_blank"
              rel="noreferrer"
            >
              {service.ctaLabel || "Consultar serviço"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </article>
    );
  };

  return (
    <section
      id="servicos"
      className="border-b border-black/10 bg-white text-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">
            Serviços
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            {content.services.title}
          </h2>

          <p className="mt-4 text-base text-black/68">
            {content.services.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-1 md:grid-cols-3 ">
          {mainServices.map(renderCard)}
        </div>

        {lastRowServices.length > 0 && (
          <div
            className={`
              mt-5 grid gap-5
              ${lastRowServices.length === 1 ? "md:grid-cols-1 xl:grid-cols-1" : ""}
              ${lastRowServices.length === 2 ? "md:grid-cols-2 xl:grid-cols-2" : ""}
            `}
          >
            {lastRowServices.map(renderCard)}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappGeneralHref}
            target="_blank"
            rel="noreferrer"
            className="
              pulse inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3
              text-sm font-semibold text-white transition-colors
              hover:bg-secondary hover:text-black
              border border-primary hover:border-black
              hover:shadow-[0_18px_34px_-22px_rgba(63,127,215,0.9)]
            "
          >
            Pedir orçamento pelo WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
