import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-2xl font-bold gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Skills
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            className="glass rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + catIndex * 0.08, duration: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-fg-bold mb-3 uppercase tracking-wider">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skill}
                  name={skill}
                  delay={0.15 + catIndex * 0.08 + skillIndex * 0.03}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
