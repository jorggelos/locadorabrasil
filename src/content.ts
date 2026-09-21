import { publicUrl } from "./lib/asset"

export const company = {
  name: "Locadora Brasil",
  tagline: "Locação de máquinas pesadas",
  email: "locadora_brasil@yahoo.com.br",
  instagram: "https://instagram.com/locadorabrasil_ltda",
  instagramHandle: "@locadorabrasil_ltda",
  address: "Rua Costa Capanema, 863 C — Jardim Industrial, Contagem-MG",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Costa+Capanema+863+C+Jardim+Industrial+Contagem+MG",
  whatsappE164: "5531994513393",
}

export const phones = [
  { name: "Ian", display: "(31) 99451-3393", e164: "5531994513393" },
]

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#empresa", label: "A empresa" },
  { href: "#maquinas", label: "Máquinas" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Fale conosco" },
]

export const stats = [
  { value: "50 anos", label: "de experiência em obra" },
  { value: "7 tipos", label: "de equipamentos na frota" },
  { value: "Contagem", label: "base em Minas Gerais" },
  { value: "Entrega", label: "da máquina na sua obra" },
]

export const machines = [
  {
    id: "escavadeira",
    name: "Escavadeira hidráulica",
    image: publicUrl("images/escavadeira-obra.jpg"),
    summary:
      "Corte, fundação, valas e demolição com alcance e estabilidade de esteira.",
    alt: "Escavadeira hidráulica da Locadora Brasil em obra de terraplenagem",
    uses: ["Fundação", "Demolição", "Terraplenagem"],
  },
  {
    id: "retroescavadeira",
    name: "Retroescavadeira",
    image: publicUrl("images/retroescavadeira.jpg"),
    summary:
      "Versátil para cavar, carregar e finalizar — inclusive modelos 2025 na frota.",
    alt: "Retroescavadeira JCB da Locadora Brasil disponível para locação",
    uses: ["Abertura de valas", "Carga", "Acabamento"],
  },
  {
    id: "mini-escavadeira",
    name: "Mini escavadeira",
    image: publicUrl("images/mini-escavadeira.png"),
    summary:
      "Ideal para valas, acessos estreitos e acabamento em obras com pouco espaço.",
    alt: "Mini escavadeira SANY da Locadora Brasil abrindo vala em canteiro",
    uses: ["Valas", "Espaços estreitos", "Fundação"],
  },
  {
    id: "mini-carregadeira",
    name: "Mini carregadeira",
    image: publicUrl("images/mini-carregadeira.png"),
    summary:
      "Agilidade em espaços estreitos, pátio e serviços de acabamento na obra.",
    alt: "Mini carregadeira SANY da Locadora Brasil movimentando terra",
    uses: ["Pátio", "Carga", "Acesso limitado"],
  },
  {
    id: "pa-carregadeira",
    name: "Pá carregadeira",
    image: publicUrl("images/pa-carregadeira.png"),
    summary:
      "Volume e ritmo para aterro, desaterro e carregamento de caminhões.",
    alt: "Pá carregadeira Case da Locadora Brasil carregando caminhão basculante",
    uses: ["Aterro", "Desaterro", "Carga"],
  },
  {
    id: "rolo",
    name: "Rolo compactador",
    image: publicUrl("images/rolo-compactador.png"),
    summary:
      "Compactação de solo e base para a obra assentar do jeito certo.",
    alt: "Rolo compactador Dynapac da Locadora Brasil em compactação de solo",
    uses: ["Base", "Aterro", "Pavimentação"],
  },
  {
    id: "basculante",
    name: "Caminhões basculantes",
    image: publicUrl("images/carregando.jpg"),
    summary:
      "Leva e traz material com a mesma operação — terra, entulho e brita.",
    alt: "Caminhão basculante sendo carregado por máquina da Locadora Brasil",
    uses: ["Transporte", "Entulho", "Terra"],
  },
]

export const services = [
  {
    title: "Locação de máquinas",
    text: "Frota para terraplenagem e construção, com equipamento certo para o serviço — sem inflar o custo da obra.",
  },
  {
    title: "Terraplenagem",
    text: "Corte, aterro e nivelamento com quem já conhece o ritmo de obra em Contagem e na região metropolitana.",
  },
  {
    title: "Aterro e desaterro",
    text: "Movimentação de terra com pá, escavadeira e basculante no mesmo fluxo, para a frente não parar.",
  },
  {
    title: "Demolições",
    text: "Desmonte controlado com máquina pesada, da estrutura ao carregamento do entulho.",
  },
]

export const steps = [
  {
    n: "01",
    title: "Conte o que a obra precisa",
    text: "Tipo de serviço, prazo e acesso ao canteiro. Um recado no WhatsApp já resolve o primeiro filtro.",
  },
  {
    n: "02",
    title: "Indicamos a máquina certa",
    text: "Escavadeira, retro, pá, rolo ou basculante — montamos a combinação que cabe no seu cronograma.",
  },
  {
    n: "03",
    title: "Entregamos e você executa",
    text: "A máquina vai até a obra. Você agenda, acompanha e pede reforço se a frente crescer.",
  },
]

export const gallery = [
  { src: publicUrl("images/hero.jpg"), alt: "Escavadeira SANY carregando caminhão no sol" },
  { src: publicUrl("images/terraplenagem.jpg"), alt: "Terraplenagem com escavadeira e retroescavadeira" },
  { src: publicUrl("images/retro-obra.jpg"), alt: "Retroescavadeira JCB em serviço interno" },
  { src: publicUrl("images/transporte.jpg"), alt: "Retroescavadeira JCB sendo transportada" },
  { src: publicUrl("images/entrega.jpg"), alt: "Escavadeira Komatsu no prancha para entrega" },
  { src: publicUrl("images/escavadeira.jpg"), alt: "Escavadeira Komatsu em via urbana" },
]

export const weekdayLabels = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
] as const

type BoardRow = {
  time: string
  machine: string
  detail: string
  status: string
}

const todayBoards: BoardRow[][] = [
  [
    { time: "08:10", machine: "Rolo compactador", detail: "Revisão na base", status: "Pátio" },
    { time: "10:00", machine: "Mini escavadeira", detail: "Ajuste de esteira", status: "Manutenção" },
    { time: "14:20", machine: "Basculante", detail: "Abastecimento", status: "Na base" },
  ],
  [
    { time: "07:40", machine: "Escavadeira Komatsu", detail: "Corte e carga", status: "Em operação" },
    { time: "09:15", machine: "Retroescavadeira JCB", detail: "Entrega na obra", status: "A caminho" },
    { time: "13:30", machine: "Basculante", detail: "Aterro e transporte", status: "Na frente" },
  ],
  [
    { time: "07:20", machine: "Pá carregadeira Case", detail: "Desaterro", status: "Em operação" },
    { time: "10:05", machine: "Mini carregadeira", detail: "Acabamento de pátio", status: "Na frente" },
    { time: "15:40", machine: "Escavadeira hidráulica", detail: "Abertura de vala", status: "Em operação" },
  ],
  [
    { time: "06:50", machine: "Basculante", detail: "Transporte de brita", status: "A caminho" },
    { time: "08:30", machine: "Rolo compactador", detail: "Compactação de base", status: "Em operação" },
    { time: "14:10", machine: "Retroescavadeira JCB", detail: "Fundação", status: "Na frente" },
  ],
  [
    { time: "07:05", machine: "Mini escavadeira", detail: "Vala em acesso estreito", status: "Em operação" },
    { time: "11:20", machine: "Escavadeira Komatsu", detail: "Demolição controlada", status: "Na frente" },
    { time: "16:00", machine: "Pá carregadeira Case", detail: "Carga de entulho", status: "A caminho" },
  ],
  [
    { time: "07:35", machine: "Retroescavadeira JCB", detail: "Acabamento", status: "Em operação" },
    { time: "09:50", machine: "Basculante", detail: "Leva e traz de terra", status: "Na frente" },
    { time: "13:15", machine: "Mini carregadeira", detail: "Serviço interno", status: "Em operação" },
  ],
  [
    { time: "08:00", machine: "Escavadeira hidráulica", detail: "Nivelamento", status: "Em operação" },
    { time: "10:40", machine: "Rolo compactador", detail: "Entrega na obra", status: "A caminho" },
    { time: "12:25", machine: "Basculante", detail: "Aterro de lote", status: "Na frente" },
  ],
]

const todayReminders = [
  "Domingo na base: revisão da frota para a semana começar no horário.",
  "Lembrete da operação: a máquina chega no horário combinado.",
  "Frente em andamento: pá e escavadeira no mesmo fluxo de terra.",
  "Compactação hoje: rolo e basculante combinados no canteiro.",
  "Obra apertada: mini escavadeira entra onde a grande não passa.",
  "Sexta de ritmo: retro e basculante para fechar a frente.",
  "Sábado útil: entrega e nivelamento sem deixar a obra parar.",
]

export function getTodayBoard(now = new Date()) {
  const day = now.getDay()
  return {
    weekday: weekdayLabels[day],
    rows: todayBoards[day],
    reminder: todayReminders[day],
  }
}
