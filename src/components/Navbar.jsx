import GooeyMenu from './HamburgerMenu'

function Navbar({ sections, activeSection, scrollToSection }) {
  return (
    <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm z-50 pt-8">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-400">Nusret</h1>
        
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <GooeyMenu 
              scrollToSection={scrollToSection} 
              activeSection={activeSection} 
            />
          </div>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`${
                  activeSection === section.id 
                    ? 'text-cyan-400 border-b-2 border-cyan-400' 
                    : 'hover:text-cyan-400'
                } px-2 py-1 transition-all`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar