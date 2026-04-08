import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Python", "C++"],
    color: "neon-purple",
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "neon-blue",
  },
  {
    title: "Backend",
    skills: ["Django"],
    color: "neon-cyan",
  },
  {
    title: "Database",
    skills: ["MySQL"],
    color: "neon-pink",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
    color: "neon-purple",
  },
];

const colorMap = {
  "neon-purple": "from-neon-purple/20 to-neon-purple/5 border-neon-purple/30 hover:border-neon-purple/60",
  "neon-blue": "from-neon-blue/20 to-neon-blue/5 border-neon-blue/30 hover:border-neon-blue/60",
  "neon-cyan": "from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/30 hover:border-neon-cyan/60",
  "neon-pink": "from-neon-pink/20 to-neon-pink/5 border-neon-pink/30 hover:border-neon-pink/60",
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 gradient-text text-center">Skills</h2>
        <p className="text-muted-foreground text-center mb-12">Technologies I work with</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl border bg-gradient-to-br p-6 transition-all duration-300 ${colorMap[cat.color]}`}
            >
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted/80 text-foreground border border-glass-border"
                  >
                    {skill}
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

export default Skills;
