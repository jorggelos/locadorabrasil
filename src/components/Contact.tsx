import { Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useState, type FormEvent } from "react"
import { company, phones } from "../content"
import { buildWhatsAppUrl, composeContactMessage, maskWhatsApp } from "../lib/whatsapp"

type ContactProps = {
  selectedMachine: string
}

const emptyForm = {
  name: "",
  email: "",
  whatsapp: "",
  message: "",
}

export function Contact({ selectedMachine }: ContactProps) {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!selectedMachine) return
    setForm((current) => ({
      ...current,
      message: current.message.trim()
        ? current.message
        : `Olá, gostaria de um orçamento para ${selectedMachine}.`,
    }))
  }, [selectedMachine])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const url = buildWhatsAppUrl(
      company.whatsappE164,
      composeContactMessage(form),
    )
    window.open(url, "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-blue-ink pt-16 pb-24 text-white sm:py-24">
      <div className="absolute -right-24 -top-24 size-80 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-green/30 blur-3xl" />

      <div className="relative mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="min-w-0">
          <p className="section-kicker text-gold-bright">Fale conosco</p>
          <h2 className="display mt-3 text-[2.15rem] leading-none sm:text-6xl">
            Conte a obra. A gente responde no WhatsApp.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
            Preencha nome, e-mail, WhatsApp e a mensagem. O envio abre a conversa com a
            Locadora Brasil — pronto para orçamento de máquina, terraplenagem ou demolição.
          </p>

          <ul className="mt-8 space-y-4 text-sm [overflow-wrap:anywhere]">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 text-gold-bright" />
              <a href={company.mapsUrl} className="hover:text-gold-bright" target="_blank" rel="noreferrer">
                {company.address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 text-gold-bright" />
              <a href={`mailto:${company.email}`} className="hover:text-gold-bright">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 size-5 text-gold-bright" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
              <a href={company.instagram} className="hover:text-gold-bright" target="_blank" rel="noreferrer">
                {company.instagramHandle}
              </a>
            </li>
            {phones.map((phone) => (
              <li key={phone.e164} className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 text-gold-bright" />
                <a href={`tel:+${phone.e164}`} className="hover:text-gold-bright">
                  {phone.name}: {phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="scroll-mt-24 rounded-3xl bg-paper p-5 text-ink shadow-2xl sm:p-8"
        >
          <label className="block text-sm font-bold">
            Nome completo
            <input
              required
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Seu nome"
              className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-medium outline-none ring-gold transition focus:ring-2"
            />
          </label>

          <label className="mt-4 block text-sm font-bold">
            E-mail
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="voce@email.com"
              className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-medium outline-none ring-gold transition focus:ring-2"
            />
          </label>

          <label className="mt-4 block text-sm font-bold">
            WhatsApp
            <input
              required
              type="tel"
              name="whatsapp"
              autoComplete="tel"
              inputMode="numeric"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: maskWhatsApp(e.target.value) })}
              placeholder="(31) 99999-0000"
              className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-medium outline-none ring-gold transition focus:ring-2"
            />
          </label>

          <label className="mt-4 block text-sm font-bold">
            Mensagem
            <textarea
              required
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Qual máquina, prazo e endereço da obra?"
              className="mt-2 w-full resize-y rounded-2xl border border-line bg-white px-4 py-3 text-base font-medium outline-none ring-gold transition focus:ring-2"
            />
          </label>

          <button
            type="submit"
            className="mt-6 min-h-12 w-full rounded-full bg-gold py-3.5 text-sm font-extrabold text-ink transition hover:bg-gold-bright"
          >
            Enviar mensagem
          </button>

          {sent && (
            <p className="mt-4 rounded-2xl bg-green/10 px-4 py-3 text-sm font-semibold text-green-deep">
              Abrimos o WhatsApp com a sua mensagem. Se a janela não aparecer, libere os
              pop-ups e envie de novo.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
