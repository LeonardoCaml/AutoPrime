import Image from "next/image";
import content from "@/content.json";
import { createWhatsAppHref } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import {
  ArrowRight,
  CalendarClock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Wrench,
} from "lucide-react";

const navigation = [
  { label: "INÍCIO", href: "#top" },
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "SOBRE", href: "#sobre" },
  { label: "CONFIANÇA", href: "#clientes" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTATO", href: "#contato" },
];

const differentials = [
  "Mais de 4 anos de atuação em manutenção automotiva.",
  "Diagnóstico técnico para revisão, suspensão, freios e sistema geral do veículo.",
  "Orçamento explicado antes de qualquer serviço ser executado.",
  "Atendimento em Belém do Pará e região metropolitana.",
  "Serviços de revisão, troca de óleo, freios, suspensão e alinhamento.",
  "Atendimento pelo WhatsApp com retorno rápido para agendamento e orçamento.",
];

const whatsappMessages = {
  general: "Olá! Vim do site e quero falar com a AUTO PRIME.",
  schedule:
    "Olá! Vim do site e quero solicitar um orçamento de energia solar com a AUTO PRIME.",
  services: "Olá! Vim do site e quero conhecer os serviços da AUTO PRIME.",
};

export function LandingLayout() {
  const whatsappGeneralHref = createWhatsAppHref(whatsappMessages.general);
  const whatsappScheduleHref = createWhatsAppHref(whatsappMessages.schedule);
  const whatsappServicesHref = createWhatsAppHref(whatsappMessages.services);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(content.contact.mapQuery)}&z=13&output=embed`;

  return (
    <div id="top" className="bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-[#F20707]"
          >
            <Image
              src="/images/auto-prime-logo.png"
              alt={`Logo da ${content.site.name}`}
              width={220}
              height={220}
              className="h-full w-full rounded-full object-cover"
            />
          </a>

          <nav className="hidden items-center gap-6 text-xs font-semibold tracking-[0.16em] text-white/72 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappGeneralHref}
            target="_blank"
            rel="noreferrer"
            className="pulse inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary hover:text-[#F20707] sm:px-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Fale conosco</span>
          </a>
        </div>

        <div className="border-t border-white/10 px-4 py-2 lg:hidden">
          <nav className="flex gap-4 overflow-x-auto text-xs font-semibold tracking-[0.14em] text-white/72 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navigation.map((item) => (
              <a
                key={`mobile-${item.label}`}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Hero whatsappScheduleHref={whatsappScheduleHref} />
        <Services
          whatsappServicesHref={whatsappServicesHref}
          whatsappGeneralHref={whatsappGeneralHref}
        />

        <section className="border-b border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">
                Diferenciais
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Por que escolher a {content.site.name}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {differentials.map((item, index) => (
                <article
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/18 text-primary">
                    {index % 3 === 0 && <Wrench className="h-5 w-5" />}
                    {index % 3 === 1 && <ShieldCheck className="h-5 w-5" />}
                    {index % 3 === 2 && <Sparkles className="h-5 w-5" />}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-white/84">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="clientes"
          className="border-b border-white/10 bg-[#050505]"
        >
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">
                Confiança
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                {content.socialProof.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/68">
                {content.socialProof.text}
              </p>
            </div>

            <ReviewsCarousel testimonials={content.socialProof.testimonials} />
          </div>
        </section>

        <section className="relative isolate overflow-hidden text-white">
          <Image
            src="/assets/sobre.png"
            alt=""
            fill
            aria-hidden="true"
            className="-z-20 object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-background/70" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(165, 103, 53, 0.73),transparent_60%)]" />

          <div className="mx-auto max-w-6xl px-4 py-18 text-center sm:px-6 md:py-24">
            <h2 className="mx-auto max-w-5xl text-3xl font-black uppercase leading-tight tracking-[0.04em] text-white drop-shadow md:text-5xl">
              Avalie abaixo como foi seu atendimento na{" "}
              <span className="text-primary italic">Auto Prime</span>
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-white/86 md:text-2xl">
              Queremos garantir que nosso atendimento de diagnóstico, revisão e
              manutenção atendeu suas expectativas. Sua opinião ajuda a melhorar
              a qualidade dos nossos serviços e a experiência de quem confia no
              seu carro com a Auto Prime.
            </p>

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
              <a
                href={content.contact.mapLink}
                target="_blank"
                rel="noreferrer"
                className="pulse inline-flex min-h-24 items-center justify-center gap-5 rounded-lg border border-primary/40 bg-primary px-6 py-5 text-2xl font-black text-white shadow-[0_24px_60px_rgba(63,127,215,0.34)] transition-colors hover:bg-white hover:text-black"
              >
                <ThumbsUp className="h-10 w-10 fill-current" />
                Gostei
              </a>

              <a
                href={createWhatsAppHref(
                  "Olá! Quero falar sobre meu atendimento com a Auto Prime.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-24 items-center justify-center gap-5 rounded-lg border border-white/16 bg-white/10 px-6 py-5 text-2xl font-black text-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur transition-colors hover:bg-white hover:text-black"
              >
                <ThumbsDown className="h-10 w-10 fill-current" />
                Não gostei
              </a>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="relative isolate overflow-hidden border-b border-white/10 bg-black text-white"
        >
          <Image
            src="/assets/about.jpg"
            alt=""
            fill
            aria-hidden="true"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-black/10" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_46%,rgba(0,0,0,0.86)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">
                  {content.about.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  {content.about.title}
                </h2>
                <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-white/78">
                  {content.about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/12 bg-black/38 p-6 backdrop-blur-sm">
                <div className="space-y-5">
                  <article className="rounded-2xl border border-white/12 bg-white/10 p-4">
                    <p className="text-xs uppercase font-bold text-primary">
                      Diagnóstico preciso
                    </p>
                    <p className="mt-2 text-sm text-white/82">
                      Identificamos a causa do problema antes de iniciar
                      qualquer serviço, evitando trocas desnecessárias e
                      retrabalho.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-white/10 p-4">
                    <p className="text-xs uppercase font-bold text-primary">
                      Atendimento transparente
                    </p>
                    <p className="mt-2 text-sm text-white/82">
                      Você recebe explicações claras sobre o que precisa ser
                      feito e só autoriza o serviço após entender o diagnóstico
                      e o orçamento.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-white/10 p-4">
                    <p className="text-xs uppercase font-bold text-primary">
                      Manutenção completa
                    </p>
                    <p className="mt-2 text-sm text-white/82">
                      Revisão, suspensão, troca de óleo, freios, alinhamento e
                      balanceamento em um só lugar, com foco em segurança e
                      desempenho.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-white/10 bg-[#050505]">
          <div className="mx-auto max-w-4xl px-4 py-18 sm:px-6 md:py-24">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Perguntas frequentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {content.faq.items.slice(0, 6).map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-white/68">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="border-b border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-4 py-18 text-center sm:px-6 md:py-24">
            <h2 className="mx-auto max-w-4xl text-3xl font-semibold md:text-5xl">
              {content.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-white/68">
              {content.finalCta.text}
            </p>
            <a
              href={whatsappGeneralHref}
              target="_blank"
              rel="noreferrer"
              className="pulse mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary hover:text-[#F20707]"
            >
              {content.finalCta.primaryButton.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="contato" className="bg-white text-black">
          <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:py-24">
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-black/12 bg-white sm:min-h-[420px] lg:min-h-[560px]">
              <iframe
                title={`Localização da ${content.site.name}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">
                Contato
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Atendimento direto e rápido
              </h2>

              <div className="mt-8 space-y-4">
                <article className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#f6f6f6] p-4">
                  <div className="mt-1 rounded-full bg-primary/18 p-2 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/56">
                      WhatsApp
                    </h3>
                    <p className="mt-1 text-base text-black/86">
                      {content.contact.whatsapp.numberDisplay}
                    </p>
                  </div>
                </article>

                {content.contact.email ? (
                  <article className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#f6f6f6] p-4">
                    <div className="mt-1 rounded-full bg-primary/18 p-2 text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/56">
                        E-mail
                      </h3>
                      <p className="mt-1 text-base text-black/86">
                        {content.contact.email}
                      </p>
                    </div>
                  </article>
                ) : null}

                <article className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#f6f6f6] p-4">
                  <div className="mt-1 rounded-full bg-primary/18 p-2 text-primary">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/56">
                      Instagram
                    </h3>
                    <a
                      href={content.contact.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-base text-black/86 transition-colors hover:text-primary"
                    >
                      @autoprimebelem
                    </a>
                  </div>
                </article>

                <article className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#f6f6f6] p-4">
                  <div className="mt-1 rounded-full bg-primary/18 p-2 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/56">
                      Localização
                    </h3>
                    <p className="mt-1 text-base text-black/86">
                      {content.contact.location}
                    </p>
                  </div>
                </article>

                <article className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#f6f6f6] p-4">
                  <div className="mt-1 rounded-full bg-primary/18 p-2 text-primary">
                    <CalendarClock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/56">
                      Horário
                    </h3>
                    <p className="mt-1 text-base text-black/86">
                      {content.contact.hours.weekdays}
                    </p>
                  </div>
                </article>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noreferrer"
                  className="pulse inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary hover:text-[#F20707]"
                >
                  Falar no WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={content.contact.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="pulse inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition-colors hover:border-black/40"
                >
                  Ver no Google Maps
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-start">
              <Image
                src="/images/auto-prime-logo.png"
                alt={`Logo da ${content.site.name}`}
                width={180}
                height={180}
                className="h-16 w-16 rounded-full border border-white/12 bg-[#F20707] object-cover"
              />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/62">
                {content.footer.description}
              </p>
              <a
                href={whatsappGeneralHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              >
                Fale conosco
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/56">
                Navegação
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/78">
                {navigation.map((item) => (
                  <li key={`footer-${item.label}`}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/56">
                Serviços
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-white/78">
                <li>
                  <a
                    href="#servicos"
                    className="transition-colors hover:text-white"
                  >
                    Revisão completa
                  </a>
                </li>

                <li>
                  <a
                    href="#servicos"
                    className="transition-colors hover:text-white"
                  >
                    Suspensão
                  </a>
                </li>

                <li>
                  <a
                    href="#servicos"
                    className="transition-colors hover:text-white"
                  >
                    Troca de óleo
                  </a>
                </li>

                <li>
                  <a
                    href="#servicos"
                    className="transition-colors hover:text-white"
                  >
                    Freios (pastilhas e discos)
                  </a>
                </li>

                <li>
                  <a
                    href="#servicos"
                    className="transition-colors hover:text-white"
                  >
                    Alinhamento e balanceamento
                  </a>
                </li>

                <li>
                  <a
                    href="#servicos"
                    className="transition-colors hover:text-white"
                  >
                    Diagnóstico automotivo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/56">
                Contato
              </h3>
              <div className="mt-4 space-y-3 text-sm text-white/78">
                <p className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 min-h-4 w-4 min-w-4 text-primary" />
                  <span>{content.contact.whatsapp.numberDisplay}</span>
                </p>
                {content.contact.email ? (
                  <p className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 min-h-4 w-4 min-w-4 text-primary" />
                    <span>{content.contact.email}</span>
                  </p>
                ) : null}
                <p className="flex items-start gap-2">
                  <Instagram className="mt-0.5 h-4 min-h-4 w-4 min-w-4 text-primary" />
                  <a
                    href={content.contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    @autoprimebelem
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 min-h-4 w-4 min-w-4 text-primary" />
                  <span>{content.contact.location}</span>
                </p>
                <p className="flex items-start gap-2">
                  <CalendarClock className="mt-0.5 h-4 min-h-4 w-4 min-w-4 text-primary" />
                  <span>{content.contact.hours.weekdays}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappGeneralHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_46px_rgba(37,211,102,0.4)] transition-transform hover:scale-[1.04] hover:bg-[#1ebe5d] sm:inline-flex"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
