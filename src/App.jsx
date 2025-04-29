import { useState } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <main className="pt-20">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App