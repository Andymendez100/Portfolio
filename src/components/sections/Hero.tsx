import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { resume } from "../../data/resume";
import { fadeInUp } from "../../lib/animations";
import StatCard from "../ui/StatCard";

const taglines = [
  "Leading Digital Transformation",
  "Driving AI-Powered Growth",
  "Scaling Enterprise Infrastructure",
  "Building High-Performing Teams",
  "Aligning Technology with Business Strategy",
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTaglineIndex((i) => (i + 1) % taglines.length),
      3000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-10">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-4 text-sm font-medium tracking-widest text-accent-blue uppercase"
          >
            Director of IT
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-4 text-5xl font-extrabold tracking-tight text-fg-bold md:text-7xl lg:text-8xl"
          >
            {resume.name}
          </motion.h1>

          {/* Gradient subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mb-6 text-2xl font-semibold gradient-text md:text-3xl"
          >
            Technology Executive | AI Strategy & Digital Transformation
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mb-8 max-w-xl text-lg leading-relaxed text-fg"
          >
            Leading teams that deliver enterprise AI systems, cloud migrations,
            and operational transformation for high-volume organizations.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mb-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/25"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border-bright px-6 py-3 text-sm font-semibold text-fg-bold transition-all hover:bg-white/5"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mb-6 flex flex-wrap gap-8"
          >
            {resume.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </motion.div>

          {/* Rotating tagline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="h-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-fg-muted"
              >
                {taglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Headshot */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="hidden md:flex justify-center"
        >
          <div className="relative h-72 w-72 lg:h-80 lg:w-80 overflow-hidden rounded-2xl gradient-border">
            <img
              src="/images/headshot.jpg"
              alt="Andy Mendez"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 blur-xl" />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
