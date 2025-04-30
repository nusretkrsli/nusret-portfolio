function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-b from-[#176B87] via-[#205d7a] to-[#04364A] overflow-hidden flex items-center"
    >
      <div className="absolute right-40 top-32 w-[200px] h-[200px] bg-cyan-700/30 rounded-full z-0 animate-float"></div>
      <div className="absolute -left-32 bottom-0 w-[300px] h-[300px] bg-cyan-900/40 rounded-full z-0 animate-float-x"></div>
      <div className="absolute right-10 bottom-10 w-40 h-40 bg-cyan-500/20 rounded-full z-0 animate-float-xy"></div>
      <div className="absolute left-4 top-76 w-[700px] h-[700px] bg-cyan-700/30 rounded-full z-0 animate-scale-pulse"></div>
      <div className="absolute left-8 top-8 w-40 h-40 bg-cyan-500/10 rounded-full z-0 animate-float-xy"></div>
      <div className="absolute right-16 top-[260px] w-[400px] h-[400px] bg-cyan-700/30 rounded-full z-0 animate-scale-pulse"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 mt-28">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I'm{" "}
            <span className="font-cormorant italic text-cyan-400">Nusret</span>
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-cyan-400">Junior Frontend</span> Developer
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
            Crafting interactive, beautiful web interfaces that turn imagination
            into reality.
          </p>
          <div className="flex gap-6 justify-center md:justify-start mb-8">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-full text-lg font-semibold transition-all"
            >
              Resume
            </a>
            <a
              href="/ReferenceLetter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-500 bg-cyan-500/100 px-8 py-3 rounded-full text-lg font-semibold transition-all hover:text-cyan-400 hover:bg-white/10"
            >
              Reference Letter
            </a>
          </div>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/nusret-karsli-56a43a247/"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/nusretkrsli"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative">
          <div className="w-80 h-80 rounded-full bg-cyan-500/30 flex items-center justify-center relative z-10">
            <img
              src="nusret.jpg"
              alt="Nusret"
              className="w-64 h-64 object-cover rounded-full border-8 border-cyan-700 shadow-xl"
            />
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
    </section>
  );
}

export default HomeSection;
