import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Copy, Check, FileCode2 } from "lucide-react";
import { getHighlighter } from "../../lib/highlighter";

interface CodeViewProps {
  code: string;
  filename: string;
}

export default function CodeView({ code, filename }: CodeViewProps) {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    getHighlighter().then((highlighter) => {
      if (cancelled) return;
      const result = highlighter.codeToHtml(code, {
        lang: "tsx",
        theme: "github-dark-default",
      });
      setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="h-full flex flex-col rounded-xl overflow-hidden border border-border bg-[#0d1117]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      {/* File tab bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-border">
        <div className="flex items-center gap-2 text-xs text-fg-muted">
          <FileCode2 size={14} className="text-accent-blue" />
          <span className="font-mono">{filename}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-md
            text-fg-muted hover:text-fg-bold hover:bg-white/5 transition-colors duration-200"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={12} className="text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto p-4 text-[13px] leading-relaxed [&_pre]:!bg-transparent [&_code]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.div>
  );
}
