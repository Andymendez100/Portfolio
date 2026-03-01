import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const sectionIds = sections.map((s) => s.id);

interface NavbarProps {
  onCodeToggle: () => void;
  codeOpen?: boolean;
}

export default function Navbar({ onCodeToggle, codeOpen }: NavbarProps) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            {/* Monogram */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg font-bold text-fg-bold"
            >
              AM
            </button>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    activeId === s.id
                      ? "text-fg-bold"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {s.label}
                  {activeId === s.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/5"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side: code button + hamburger */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={onCodeToggle}
                className={`rounded-lg p-1.5 transition-colors ${
                  codeOpen
                    ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/30"
                    : "text-fg-muted hover:bg-white/5 hover:text-fg-bold border border-transparent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="View source code"
                aria-label="View source code"
              >
                <Code2 size={16} />
              </motion.button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-fg-muted hover:text-fg-bold md:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-border md:hidden"
              >
                <div className="flex flex-col gap-1 px-6 py-3">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        activeId === s.id
                          ? "bg-white/5 text-fg-bold"
                          : "text-fg-muted hover:text-fg"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
