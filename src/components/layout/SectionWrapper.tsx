import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useCodeToggle } from "../../hooks/useCodeToggle";
import CodeUIWrapper from "../features/CodeUIWrapper";
import type { SectionId } from "../../App";

interface SectionWrapperProps {
  sectionId: SectionId;
  onClose: () => void;
  sourceCode: string;
  filename: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  sectionId,
  onClose,
  sourceCode,
  filename,
  children,
}: SectionWrapperProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isCodeView, toggleSection } = useCodeToggle();
  const showingCode = isCodeView(sectionId);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-20 flex items-start justify-center overflow-y-auto py-8 px-4 sm:py-16"
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.article
        className="relative w-full"
        style={{
          maxWidth: "40rem",
          background: "rgba(27, 31, 34, 0.85)",
          borderRadius: "4px",
          padding: "2rem 2.5rem 1rem",
        }}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.97 }}
        transition={{ duration: 0.325, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with code toggle and close */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          {/* Code toggle button — circular */}
          <button
            onClick={() => toggleSection(sectionId)}
            className={`flex items-center justify-center rounded-full transition-all duration-200 ${
              showingCode
                ? "text-accent-blue"
                : "text-fg-muted hover:text-fg-bold"
            }`}
            style={{
              width: "2.5rem",
              height: "2.5rem",
              border: "1px solid rgba(255,255,255,0.5)",
              background: showingCode ? "rgba(88,166,255,0.1)" : "transparent",
            }}
            title="Toggle code view"
            aria-label="Toggle code view"
          >
            <Code2 size={14} />
          </button>

          {/* Close button — circular with X */}
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-full text-fg-muted hover:text-fg-bold transition-all duration-200"
            style={{
              width: "4rem",
              height: "4rem",
              position: "relative",
            }}
            aria-label="Close section"
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              {/* SVG X icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="2" y1="2" x2="12" y2="12" />
                <line x1="12" y1="2" x2="2" y2="12" />
              </svg>
            </div>
          </button>
        </div>

        <CodeUIWrapper
          sectionId={sectionId}
          code={sourceCode}
          filename={filename}
        >
          {children}
        </CodeUIWrapper>
      </motion.article>
    </motion.div>
  );
}
