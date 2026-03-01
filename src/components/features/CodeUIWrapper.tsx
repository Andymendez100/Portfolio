import { useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCodeToggle } from "../../hooks/useCodeToggle";
import CodeView from "./CodeView";

interface CodeUIWrapperProps {
  sectionId: string;
  code: string;
  filename: string;
  children: ReactNode;
}

export default function CodeUIWrapper({
  sectionId,
  code,
  filename,
  children,
}: CodeUIWrapperProps) {
  const { isCodeView } = useCodeToggle();
  const showCode = isCodeView(sectionId);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use crossfade on mobile, 3D flip on desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  if (isMobile) {
    return (
      <div ref={containerRef} className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {showCode ? (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <CodeView code={code} filename={filename} />
            </motion.div>
          ) : (
            <motion.div
              key="ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ perspective: "1200px" }}>
      <motion.div
        className="relative w-full"
        animate={{ rotateY: showCode ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* UI side (front) */}
        <div
          className="w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {children}
        </div>

        {/* Code side (back) */}
        <div
          className="absolute inset-0 w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <CodeView code={code} filename={filename} />
        </div>
      </motion.div>
    </div>
  );
}
