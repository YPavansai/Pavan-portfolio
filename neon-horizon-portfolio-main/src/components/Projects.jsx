import { motion } from "framer-motion";

const projects = [
  {
    title: "Car Rental Platform",
    description: "A full-stack car rental platform built with Django and React, featuring real-time booking, payment integration, and an admin dashboard.",
    tech: ["Django", "React", "MySQL"],
  },
  {
    title: "Milk Selling Unit App",
    description: "A mobile-friendly application for managing milk distribution, tracking orders, and managing customer subscriptions.",
    tech: ["React", "Django", "REST API"],
  },
  {
    title: "AI Face Recognition Attendance",
    description: "An intelligent attendance system using face recognition with real-time detection, automated logging, and reporting features.",
    tech: ["Python", "OpenCV", "Deep Learning"],
  },
  {
    title: "AI Traffic Violation Detection",
    description: "A computer vision system that detects traffic violations in real-time using AI, with automated evidence capture and reporting.",
    tech: ["Python", "YOLO", "Computer Vision"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 gradient-text text-center">Projects</h2>
        <p className="text-muted-foreground text-center mb-12">Some things I've built</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 group hover:neon-glow-purple transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
