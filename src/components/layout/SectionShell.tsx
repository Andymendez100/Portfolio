import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../lib/animations";

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({
  id,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
