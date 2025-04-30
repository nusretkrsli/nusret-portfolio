import { useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "emailjs-com";

function ContactSection() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    emailjs
      .sendForm(
        "service_gjddz8a",
        "template_r0dkkvj",
        formRef.current,
        "GUjh48fINiO6Uz9Sr"
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        () => {
          setError("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#15597a] via-[#11405a] to-[#0e3a4a] overflow-hidden"
    >
      <div className="container mx-auto px-6 py-24 w-full mt-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          <div className="flex-1 w-full max-w-xl">
            <form
              ref={formRef}
              className="space-y-6 bg-gray-800/50 p-8 rounded-xl shadow-lg"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-gray-700 rounded-lg p-4 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-gray-700 rounded-lg p-4 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full bg-gray-700 rounded-lg p-4 text-white placeholder-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 w-full py-3 rounded-lg font-semibold text-lg transition-all"
                disabled={sent}
              >
                {sent ? "Message Sent!" : "Send Message"}
              </button>
              {error && <p className="text-red-400 mt-2">{error}</p>}
              {sent && <p className="text-green-400 mt-2">Thank you! Your message has been sent.</p>}
            </form>
          </div>
          <div className="flex-1 flex justify-center items-center w-full">
            <div
              className="bg-gray-900/40 rounded-full shadow-lg p-4 flex items-center justify-center"
              style={{ width: 350, height: 350 }}
            >
              <DotLottieReact
                src="https://lottie.host/229c15aa-e2f2-4a45-9e85-9b27b5532d62/GKXkpF4hLy.lottie"
                loop
                autoplay
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;