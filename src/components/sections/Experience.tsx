import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-2xl font-bold gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        {experience.map((entry, index) => (
          <TimelineItem
            key={`${entry.company}-${entry.title}`}
            entry={entry}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
