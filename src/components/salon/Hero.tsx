import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior of the Maison Lumière luxury salon and spa"
          width={1600}
          height={1600}
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-gold"
        >
          Salon · Spa · Atelier
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-serif text-5xl leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl"
        >
          Refine Your Style.
          <br />
          <span className="italic text-gold-soft">Reveal Your Glow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-primary-foreground/70"
        >
          A sanctuary of quiet luxury where master stylists and skin artisans
          craft a look that is unmistakably, effortlessly you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-all duration-300 hover:bg-gold-soft hover:shadow-2xl hover:shadow-gold/20"
          >
            Book Your Visit
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border-b border-primary-foreground/30 pb-1 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/50 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
