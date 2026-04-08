import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 gradient-text text-center">About Me</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Get to know me and my journey
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 sm:p-8"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm Pavan Sai, a passionate AI & ML student and Full Stack Developer based in Hyderabad, India.
              I love building innovative solutions that blend cutting-edge AI with practical web applications.
              Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at Malla Reddy University,
              I'm constantly exploring new technologies and pushing the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass p-6 sm:p-8"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Education</h3>
            <div className="relative pl-6 border-l-2 border-primary/40">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary neon-glow-purple" />
              <div>
                <p className="text-sm text-neon-cyan font-medium">2024 – 2028</p>
                <h4 className="text-lg font-semibold text-foreground mt-1">B.Tech — AI & Machine Learning</h4>
                <p className="text-muted-foreground mt-1">Malla Reddy University</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA: <span className="text-neon-cyan font-semibold">8.82</span></p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  📍 Hyderabad, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
