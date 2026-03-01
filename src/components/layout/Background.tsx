import { motion } from "framer-motion";

interface BackgroundProps {
  blurred: boolean;
}

export default function Background({ blurred }: BackgroundProps) {
  return (
    <motion.div
      className="fixed inset-0 z-0"
      animate={{
        filter: blurred ? "blur(3px)" : "blur(0px)",
        scale: blurred ? 1.0825 : 1,
      }}
      transition={{ duration: 0.325, ease: "easeOut" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundColor: "#1b1f22",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(19, 21, 25, 0.5)" }}
      />
      {/* Extra vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </motion.div>
  );
}
