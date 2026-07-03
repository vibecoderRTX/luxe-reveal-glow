import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-primary pt-24 pb-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#top" className="font-serif text-2xl">
              Maison<span className="text-gold"> Lumière</span>
            </a>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-primary-foreground/60">
              An ultra-premium salon & spa. Refine your style, reveal your glow.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Hours
            </h4>
            <ul className="space-y-3 text-sm font-light text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 text-gold/70" />
                <span>Mon – Fri · 9am – 8pm</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 text-gold/70" />
                <span>Saturday · 9am – 6pm</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 text-gold/70" />
                <span>Sunday · By appointment</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Location
            </h4>
            <p className="flex items-start gap-2 text-sm font-light text-primary-foreground/70">
              <MapPin size={15} className="mt-0.5 text-gold/70" />
              <span>
                128 Rue de la Lumière
                <br />
                Design District, Suite 4<br />
                New York, NY 10013
              </span>
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-gold/70" />
                <a href="tel:+15550000000" className="hover:text-gold">
                  +1 (555) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-gold/70" />
                <a href="mailto:hello@maisonlumiere.com" className="hover:text-gold">
                  hello@maisonlumiere.com
                </a>
              </li>
            </ul>
            <a
              href="#booking"
              className="mt-6 inline-block rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-colors hover:bg-gold-soft"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-light text-primary-foreground/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Maison Lumière. All rights reserved.</p>
          <p>Crafted with quiet luxury.</p>
        </div>
      </div>
    </footer>
  );
}
