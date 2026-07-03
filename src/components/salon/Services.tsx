import { Scissors, Sparkles, Hand, Flower2 } from "lucide-react";
import { Reveal } from "./Reveal";

const categories = [
  {
    icon: Scissors,
    title: "Hair",
    blurb: "Precision cuts, balayage & couture colour.",
    items: [
      { name: "Signature Cut & Style", price: "$120" },
      { name: "Balayage & Gloss", price: "$260" },
      { name: "Bridal & Event Styling", price: "$180" },
    ],
  },
  {
    icon: Sparkles,
    title: "Skin",
    blurb: "Advanced facials & radiant complexion rituals.",
    items: [
      { name: "Lumière Glow Facial", price: "$150" },
      { name: "Anti-Aging Ritual", price: "$210" },
      { name: "Dermaplane & Peel", price: "$140" },
    ],
  },
  {
    icon: Hand,
    title: "Nails",
    blurb: "Meticulous manicures & luxe gel artistry.",
    items: [
      { name: "Classic Manicure", price: "$55" },
      { name: "Gel & Nail Art", price: "$85" },
      { name: "Spa Pedicure", price: "$75" },
    ],
  },
  {
    icon: Flower2,
    title: "Spa",
    blurb: "Restorative massage & full-body escapes.",
    items: [
      { name: "Deep Tissue Massage", price: "$160" },
      { name: "Hot Stone Therapy", price: "$185" },
      { name: "Half-Day Retreat", price: "$420" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-gold">
            The Menu
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Services & Pricing
          </h2>
          <p className="mt-5 text-base font-light text-muted-foreground">
            A considered edit of treatments, delivered with quiet precision and
            the finest products in the world.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-x-16 gap-y-16 md:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="group">
                <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-accent-foreground">
                    <cat.icon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">{cat.title}</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      {cat.blurb}
                    </p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-4">
                      <span className="text-[0.95rem] text-foreground">{item.name}</span>
                      <span className="mx-1 flex-1 border-b border-dotted border-border" />
                      <span className="font-serif text-lg text-gold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
