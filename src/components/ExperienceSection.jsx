import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";


const experiences = [
  {
    title: "Junior Frontend Developer / Technical Marketplace Associate",
    company: "Frontify, St. Gallen, Switzerland",
    date: "July 2024 – present",
    details: [
      "Development and maintenance of content blocks and app integrations on the Frontify platform",
      "Implementation of modern web applications with React, TypeScript, TailwindCSS, and Bootstrap",
      "Experience with automation platforms such as Tray.ai and n8n (e.g., Adobe Stock)",
      "Close collaboration with interdisciplinary teams to optimize user experience",
      "Support in technical consulting and integration of external resources",
    ],
  },
  {
    title: "Junior Frontend Developer (Internship)",
    company: "Frontify, St. Gallen, Switzerland",
    date: "October 2023 – June 2024",
    details: [
      "Development of individual content blocks, apps, and features to improve platform functionality",
      "Deepened knowledge in React, TypeScript, and UI/UX design",
      "Learned the basics of Python and GraphQL for data integration tasks",
      "Gained experience working in a team environment and following agile development processes",
    ],
  },
];

function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center bg-gradient-to-bl from-[#15597a] via-[#11405a] to-[#0e3a4a] flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 py-24 w-full mt-6">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/40 rounded-full shadow-lg p-4 flex items-center justify-center mt-3"
               style={{ width: 250, height: 250 }}>
            <DotLottieReact
              src="https://lottie.host/7d985c7a-06bd-4533-a7a1-746eaf189d37/qw9X9kUBeN.lottie"
              loop
              autoplay
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className={`bg-gray-800/50 p-6 rounded-xl transition-all duration-300 cursor-pointer hover:bg-gray-800 shadow-lg ${
                openIndex === idx ? "ring-2 ring-cyan-400" : ""
              }`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.date}</p>
                </div>
                <span className="text-cyan-400 text-2xl ml-4">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </div>
              {openIndex === idx && (
                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;