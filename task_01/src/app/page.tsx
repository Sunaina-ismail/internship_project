import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Portfolio | Web Developer",
  description: "Professional portfolio of a web developer specializing in React, Next.js, and TypeScript",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
