import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <motion.p
        variants={fadeInUp}
        className="mb-3 text-sm font-medium tracking-widest text-accent-blue uppercase"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        className="mb-4 text-3xl font-bold text-fg-bold md:text-4xl"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p variants={fadeInUp} className="max-w-2xl text-lg text-fg">
          {description}
        </motion.p>
      )}
    </div>
  );
}
