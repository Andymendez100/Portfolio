import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { getHighlightedCode } from "../../lib/highlighter";

interface CodeFile {
  id: string;
  filename: string;
  code: string;
}

interface CodePanelProps {
  files: CodeFile[];
  onClose: () => void;
}

const sectionIds = ["hero", "about", "experience", "skills", "projects", "contact"];

export default function CodePanel({ files, onClose }: CodePanelProps) {
  const activeSection = useScrollSpy(sectionIds, 100);
  const [activeFile, setActiveFile] = useState(files[0]?.id ?? "");
  const [highlightedHtml, setHighlightedHtml] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  // Sync active file with scroll position
  useEffect(() => {
    if (activeSection) {
      const match = files.find((f) => f.id === activeSection);
      if (match) setActiveFile(match.id);
    }
  }, [activeSection, files]);

  // Highlight code on demand
  useEffect(() => {
    if (highlightedHtml[activeFile]) return;
    const file = files.find((f) => f.id === activeFile);
    if (!file) return;

    getHighlightedCode(file.code).then((html) => {
      setHighlightedHtml((prev) => ({ ...prev, [activeFile]: html }));
    });
  }, [activeFile, files, highlightedHtml]);

  // Scroll code to top when switching files
  useEffect(() => {
    codeRef.current?.scrollTo({ top: 0 });
  }, [activeFile]);

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const currentFile = files.find((f) => f.id === activeFile);

  const handleCopy = () => {
    if (!currentFile) return;
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 bottom-0 z-[60] flex w-full flex-col border-l border-white/6 bg-[#0a0a0c] md:w-[55%] lg:w-[48%]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/6 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="font-mono text-xs text-fg-muted">
            {currentFile?.filename ?? "source"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="rounded-md p-1.5 text-fg-muted transition-colors hover:bg-white/5 hover:text-fg-bold"
            aria-label="Copy code"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-fg-muted transition-colors hover:bg-white/5 hover:text-fg-bold"
            aria-label="Close code panel"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* File tabs */}
      <div className="flex gap-0 overflow-x-auto border-b border-white/6 bg-[#08080a]">
        {files.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFile(f.id)}
            className={`whitespace-nowrap border-b-2 px-4 py-2.5 font-mono text-xs transition-colors ${
              activeFile === f.id
                ? "border-accent-blue text-fg-bold bg-white/[0.02]"
                : "border-transparent text-fg-muted hover:text-fg"
            }`}
          >
            {f.filename}
          </button>
        ))}
      </div>

      {/* Code view */}
      <div ref={codeRef} className="flex-1 overflow-auto p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFile}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {highlightedHtml[activeFile] ? (
              <div
                className="text-sm leading-6 [&_pre]:!bg-transparent [&_code]:font-mono [&_code]:text-[13px]"
                dangerouslySetInnerHTML={{ __html: highlightedHtml[activeFile] }}
              />
            ) : (
              <pre className="font-mono text-[13px] leading-6 text-fg-muted whitespace-pre">
                {currentFile?.code ?? ""}
              </pre>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom hint */}
      <div className="border-t border-white/6 px-4 py-2.5 text-center">
        <span className="font-mono text-[11px] text-fg-muted">
          scroll the page — code follows &middot; <kbd className="rounded border border-white/10 px-1 py-0.5">esc</kbd> to close
        </span>
      </div>
    </motion.div>
  );
}
