import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperisSection } from "@/components/experis-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-border" />
      </div>
      <AboutSection />
      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-border" />
      </div>
      <ExperisSection />
      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-border" />
      </div>
      <SkillsSection />
      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-border" />
      </div>
      <EducationSection />
      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-border" />
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}
