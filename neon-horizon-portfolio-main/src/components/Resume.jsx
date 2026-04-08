import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="section-padding max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 gradient-text text-center">Resume</h2>
        <p className="text-muted-foreground text-center mb-12">Download my resume</p>

        <motion.div
          whileHover={{ y: -5 }}
          className="glass p-8 text-center gradient-border"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
          </div>

          <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Pavan Sai — Resume</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            B.Tech AI & ML • Full Stack Developer • CGPA 8.82
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground neon-glow-purple hover:scale-105 transition-transform duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
