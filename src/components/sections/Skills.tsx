import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { fadeInUp } from "../../lib/animations";
import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
  return (
    <div>
      <SectionHeading
        eyebrow="Skills"
        heading="Tech Stack"
        description="Languages, frameworks, and tools I use to build production systems."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            variants={fadeInUp}
            custom={catIndex}
            className="rounded-xl border border-border bg-bg-card p-6 transition-colors hover:border-border-bright"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-fg-bold uppercase">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
