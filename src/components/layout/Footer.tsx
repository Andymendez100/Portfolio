import { motion } from "framer-motion";

interface FooterProps {
  visible: boolean;
}

export default function Footer({ visible }: FooterProps) {
  return (
    <motion.footer
      className="absolute bottom-6 text-center text-fg-muted"
      style={{
        letterSpacing: "0.2rem",
        fontSize: "0.6rem",
        textTransform: "uppercase",
      }}
      animate={{
        opacity: visible ? 0.75 : 0,
        scale: visible ? 1 : 0.95,
        filter: visible ? "blur(0px)" : "blur(1.6px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.325 }}
    >
      <p>&copy; {new Date().getFullYear()} Andy Mendez</p>
    </motion.footer>
  );
}
