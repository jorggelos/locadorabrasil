import { useState } from "react"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { Machines } from "./components/Machines"
import { Services } from "./components/Services"
import { WhatsAppButton } from "./components/WhatsAppButton"

function App() {
  const [selectedMachine, setSelectedMachine] = useState("")

  function requestMachine(name: string) {
    setSelectedMachine(name)
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Machines onRequest={requestMachine} />
        <HowItWorks />
        <Gallery />
        <Contact selectedMachine={selectedMachine} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
