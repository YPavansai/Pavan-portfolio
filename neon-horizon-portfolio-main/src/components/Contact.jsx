import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/YPavansai",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12..." />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pavansai-ai/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569..." />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:pavan222318@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
];

const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_77njbsd",   // replace with your EmailJS service id
      "template_fwtxkm9",  // your template id
      formRef.current,
      "4NaLNDqIwJhClNyit"    // replace with EmailJS public key
    )
    .then(
      () => {
        alert("Message Sent Successfully 🚀");
      },
      (error) => {
        console.log(error);
        alert("Failed to send message ❌");
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 gradient-text text-center">
          Contact
        </h2>

        <p className="text-muted-foreground text-center mb-12">
          Let's work together
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* CONTACT FORM */}

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="glass p-6 sm:p-8 space-y-5"
          >

            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>

              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-medium text-sm bg-primary text-white hover:scale-[1.02] transition-transform"
            >
              Send Message
            </button>

          </motion.form>

          {/* SOCIAL LINKS */}

          <motion.div
            className="glass p-6 sm:p-8 flex flex-col justify-center"
          >

            <h3 className="text-xl font-semibold mb-6">
              Connect with me
            </h3>

            <div className="space-y-4">

              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;