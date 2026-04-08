import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base font-medium tracking-widest uppercase text-neon-cyan mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-heading font-bold mb-4 neon-text gradient-text"
        >
          Pavan Sai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          AI & ML Student | Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground neon-glow-purple hover:scale-105 transition-transform duration-200"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium text-sm border border-glass-border text-foreground hover:bg-muted/50 hover:scale-105 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium text-sm border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:scale-105 transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
