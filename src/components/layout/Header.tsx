import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Diamond } from "lucide-react";

const taglines = [
  "Building Voice AI Systems",
  "Architecting Cloud Infrastructure",
  "Leading Digital Transformation",
  "Designing Multi-Agent Platforms",
  "Engineering RAG Pipelines",
];

interface HeaderProps {
  shrunk: boolean;
}

export default function Header({ shrunk }: HeaderProps) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      className="text-center px-6 flex flex-col items-center"
      animate={{
        scale: shrunk ? 0.95 : 1,
        opacity: shrunk ? 0 : 1,
        filter: shrunk ? "blur(1.6px)" : "blur(0px)",
      }}
      transition={{ duration: 0.325, ease: "easeOut" }}
      style={{ pointerEvents: shrunk ? "none" : "auto" }}
    >
      {/* Diamond icon in bordered circle */}
      <motion.div
        className="flex items-center justify-center rounded-full"
        style={{
          width: "5.5rem",
          height: "5.5rem",
          border: "1px solid white",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <Diamond size={40} strokeWidth={1} className="text-white" />
      </motion.div>

      {/* Vertical connecting line */}
      <motion.div
        className="header-line"
        style={{ height: "2rem" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />

      {/* Content area with top and bottom borders */}
      <motion.div
        style={{
          borderTop: "1px solid white",
          borderBottom: "1px solid white",
          padding: "3rem 2rem",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <h1
          className="text-fg-bold"
          style={{
            fontWeight: 300,
            letterSpacing: "0.5rem",
            fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Andy Mendez
        </h1>

        <p
          className="text-fg-muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.2rem",
            fontSize: "0.8rem",
          }}
        >
          Director of IT &middot; AI & Software Engineering Leader
        </p>

        {/* Animated tagline */}
        <div className="mt-4 overflow-hidden" style={{ height: "1.5rem" }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              className="text-fg-muted"
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.2rem",
                fontSize: "0.8rem",
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {taglines[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Vertical connecting line */}
      <motion.div
        className="header-line"
        style={{ height: "2rem" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      />
    </motion.header>
  );
}
