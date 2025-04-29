import React, { useState } from "react";

const menuItems = [
  { id: "home", icon: "fa-home", label: "Home" },
  { id: "about", icon: "fa-user", label: "About" },
  { id: "experience", icon: "fa-briefcase", label: "Experience" },
  { id: "contact", icon: "fa-envelope", label: "Contact" },
];

function HamburgerMenu({ scrollToSection, activeSection }) {
  const [open, setOpen] = useState(false);
  const radius = 50;

  return (
    <div className="relative z-50 -left-6">
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </svg>
      <button
        className={`w-12 h-12 rounded-full bg-cyan-500 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 ${
          open ? "scale-90" : "scale-100"
        }`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span
          className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : "-translate-y-2"
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white rounded transition-all duration-300 my-1 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : "translate-y-2"
          }`}
        ></span>
      </button>
      <div
        className="absolute top-0 left-0 w-20 h-20 left-1.5 pointer-events-none"
        style={{ filter: "url(#goo)" }}
      >
        {menuItems.map((item, i) => (
          <button
            key={item.id}
            className={`absolute w-8 h-8 top-2  rounded-full flex items-center justify-center text-white text-2xl shadow-md transition-all duration-300
      ${
        activeSection === item.id
          ? "text-cyan-500"
          : "bg-cyan-500 hover:bg-white hover:text-cyan-500"
      }
    `}
            style={{
              pointerEvents: open ? "auto" : "none",
              opacity: open ? 1 : 0,
              transitionDuration: open ? `${180 + i * 80}ms` : "200ms",
              transform: open
                ? `translate(${
                    radius *
                    Math.cos((i / menuItems.length) * 2 * Math.PI - Math.PI / 2)
                  }px,
                    ${
                      radius *
                      Math.sin(
                        (i / menuItems.length) * 2 * Math.PI - Math.PI / 2
                      )
                    }px) scale(1)`
                : "translate(0,0) scale(0)",
            }}
            onClick={() => {
              scrollToSection(item.id);
              setOpen(false);
            }}
            aria-label={item.label}
          >
            <i className={`fa ${item.icon}`} />
          </button>
        ))}
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </div>
  );
}

export default HamburgerMenu;
