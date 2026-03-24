"use client"

import ContactForm from "@/components/ContactForm/ContactForm"
import NavigateBar from "@/components/NavigateBar/NavigateBar";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Project/Project";

export default function Home() {
  return (

    <main className="mx-auto px-8 py-10 space-y-16">

      <NavigateBar/>

      <section id="about" className="pt-20 max-w-7xl mx-auto px-4">
        <AboutMe/>
      </section>
      
      <section id="skills" className="scroll-mt-32 -mx-8">
        <Skills/>
      </section>
      
      <section id="projects" className="mt-20 scroll-mt-32 max-w-7xl mx-auto px-4">
        <Project/>
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>

    </main>
  )
}
