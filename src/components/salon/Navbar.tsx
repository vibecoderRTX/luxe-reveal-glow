import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Stylists", href: "#stylists" },
  { label: "Contact", href: "#footer" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-serif text-2xl tracking-tight text-primary-foreground transition-colors"
        >
          Maison<span className="text-gold"> Lumière</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground shadow-sm transition-all duration-300 hover:bg-gold-soft hover:shadow-lg md:inline-block"
        >
          Book Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-primary-foreground md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mx-6 mt-4 overflow-hidden rounded-2xl bg-primary/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm uppercase tracking-[0.15em] text-primary-foreground/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground"
              >
                Book Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
