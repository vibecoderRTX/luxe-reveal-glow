import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import s1 from "@/assets/stylist-1.jpg";
import s2 from "@/assets/stylist-2.jpg";
import s3 from "@/assets/stylist-3.jpg";

const stylists = [
  {
    img: s1,
    name: "Élise Moreau",
    role: "Creative Director · Colour",
    note: "15 years shaping couture colour for editorial & runway.",
  },
  {
    img: s2,
    name: "Julian Vega",
    role: "Master Barber · Cutting",
    note: "Precision cutting specialist with a sculptural eye.",
  },
  {
    img: s3,
    name: "Amara Sol",
    role: "Skin & Spa Specialist",
    note: "Advanced facialist devoted to luminous, healthy skin.",
  },
];

export function Stylists() {
  return (
    <section id="stylists" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-gold">
            The Atelier
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Meet Our Stylists
          </h2>
          <p className="mt-5 text-base font-light text-muted-foreground">
            A small, devoted team of artisans — each a master of their craft.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {stylists.map((st, i) => (
            <Reveal key={st.name} delay={i * 0.12}>
              <div className="group text-center">
                <div className="relative mx-auto overflow-hidden rounded-2xl">
                  <img
                    src={st.img}
                    alt={`Portrait of ${st.name}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <a
                    href="#"
                    aria-label={`${st.name} on Instagram`}
                    className="absolute bottom-5 left-1/2 flex h-11 w-11 -translate-x-1/2 translate-y-4 items-center justify-center rounded-full bg-gold text-accent-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{st.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  {st.role}
                </p>
                <p className="mt-3 text-sm font-light text-muted-foreground">
                  {st.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
