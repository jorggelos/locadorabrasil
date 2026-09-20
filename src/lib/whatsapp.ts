export function buildWhatsAppUrl(phone: string, message: string) {
  const text = encodeURIComponent(message.trim())
  return `https://wa.me/${phone}?text=${text}`
}

export function maskWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length === 0) return ""
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function composeContactMessage(input: {
  name: string
  email: string
  whatsapp: string
  message: string
}) {
  return [
    "Olá, Locadora Brasil. Vim pelo site.",
    `Nome: ${input.name}`,
    `E-mail: ${input.email}`,
    `WhatsApp: ${input.whatsapp}`,
    "",
    input.message,
  ].join("\n")
}
