import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const skills = [
  { name: "JavaScript", emoji: "🟨" },
  { name: "React.js", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟩" },
  { name: "CSS3", emoji: "🎨" },
  { name: "HTML5", emoji: "🟥" },
  { name: "TailwindCSS", emoji: "🌬️" },
  { name: "Bootstrap", emoji: "🟪" },
  { name: "Python", emoji: "🐍" },
  { name: "N8N", emoji: "🔗" },
  { name: "Tray.ai", emoji: "🤖" },
  { name: "GraphQL", emoji: "🔺" },
  { name: "Docker", emoji: "🐳" },
];

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function AboutSection() {
  const center = 250;
  const radius = 260;
  const angleStep = 360 / skills.length;

  return (
    <section
      id="about"
      className="min-h-screen flex bg-gradient-to-tr from-[#15597a] via-[#11405a] to-[#0e3a4a] text-gray-300 items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 py-24 w-full mt-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="space-y-6 w-full md:w-1/2 break-words z-10">
            <p className="text-lg">
              I specialize in modern frontend development, focusing on building
              fast, responsive, and visually engaging web applications.
            </p>
            <p>
              My main stack includes React, JavaScript (ES6+), TypeScript,
              Tailwind CSS, Bootstrap, and CSS3. I have hands-on experience with
              component-based architectures, state management, and integrating
              RESTful APIs and GraphQL.
            </p>
            <p>
              I have experience building websites using the Frontify platform,
              customizing existing blocks, and developing new blocks as needed.
              Additionally, I have developed custom applications (Apps) within
              the same platform to enhance project functionality.
            </p>
            <p>
              I can build integration solutions using N8N and Tray.io platforms.
              With these tools, I can create automations and workflows between
              various services to increase project efficiency.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div className="hidden md:block w-[500px] h-[500px] relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[#0e3a4a] bg-opacity-95 flex items-center justify-center shadow-2xl border-4 border-cyan-900/60 z-10">
                <DotLottieReact
                  src="https://lottie.host/a832ad0d-42e1-453d-ab12-1bd3d960bf44/imhkgFLETV.lottie"
                  loop
                  autoplay
                  style={{ width: "230px", height: "230px" }}
                />
              </div>
              {skills.map((skill, i) => {
                const { x, y } = polarToCartesian(
                  center,
                  center,
                  radius,
                  i * angleStep
                );
                return (
                  <div
                    key={skill.name}
                    className={`
                      absolute flex items-center justify-center
                      rounded-full shadow-lg
                      bg-gradient-to-br from-cyan-400/90 to-blue-700/90
                      text-white font-semibold
                      px-4 py-2
                      transition-all duration-300
                      hover:scale-110 hover:z-20 hover:shadow-cyan-400/70
                    `}
                    style={{
                      left: x - 60,
                      top: y - 24,
                      width: 120,
                      height: 48,
                    }}
                  >
                    <span className="mr-2 text-xl">{skill.emoji}</span>
                    {skill.name}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:hidden z-10 overflow-hidden">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-gradient-to-br from-cyan-500 to-blue-700 text-white font-semibold rounded-full shadow px-4 py-2"
                >
                  <span className="mr-2">{skill.emoji}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;