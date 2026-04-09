import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/YPavansai",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.44 21.8 8.21 23.39C8.8 23.5 9 23.13 9 22.77V20.9C5.67 21.6 4.97 19.27 4.97 19.27C4.42 17.87 3.63 17.5 3.63 17.5C2.54 16.76 3.72 16.78 3.72 16.78C4.93 16.87 5.56 18.02 5.56 18.02C6.63 19.85 8.37 19.33 9.05 19.02C9.16 18.25 9.46 17.72 9.8 17.42C7.14 17.12 4.34 16.09 4.34 11.49C4.34 10.18 4.81 9.11 5.58 8.27C5.46 7.97 5.05 6.75 5.7 5.1C5.7 5.1 6.74 4.77 9 6.3C9.98 6.02 11.02 5.88 12.06 5.88C13.1 5.88 14.14 6.02 15.12 6.3C17.38 4.77 18.42 5.1 18.42 5.1C19.07 6.75 18.66 7.97 18.54 8.27C19.31 9.11 19.78 10.18 19.78 11.49C19.78 16.1 16.97 17.11 14.31 17.41C14.73 17.77 15.1 18.49 15.1 19.6V22.77C15.1 23.13 15.29 23.5 15.9 23.39C20.66 21.8 24 17.3 24 12C24 5.37 18.63 0 12 0Z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pavansai-ai/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6C1.11 6 0 4.88 0 3.5C0 2.12 1.11 1 2.49 1C3.87 1 4.98 2.12 4.98 3.5ZM0.22 8H4.75V24H0.22V8ZM7.98 8H12.33V10.2H12.39C12.99 9.06 14.46 7.85 16.66 7.85C21.26 7.85 22.12 10.88 22.12 14.82V24H17.59V15.64C17.59 13.64 17.55 11.06 14.79 11.06C11.99 11.06 11.57 13.18 11.57 15.49V24H7.98V8Z"/>
      </svg>
    ),
  },
];

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      "service_77njbsd",
      "template_fwtxkm9",
      formRef.current,
      "4NaLNDqIwJhClNyit"
    )
    .then(() => {
      setStatus("success");
      setLoading(false);
      formRef.current.reset();
    })
    .catch(() => {
      setStatus("error");
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">
          Contact Me
        </h2>

        <p className="text-center text-muted-foreground mb-10">
          Let's build something amazing together 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* FORM */}

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="glass p-8 space-y-5 rounded-xl"
          >

            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-glass-border bg-muted/50"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-glass-border bg-muted/50"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-glass-border bg-muted/50"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg hover:scale-[1.02] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-sm">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm">
                ❌ Failed to send message.
              </p>
            )}

          </form>

          {/* SOCIAL LINKS */}

          <div className="glass p-8 rounded-xl">

            <h3 className="text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <div className="space-y-4">

              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;