import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";

const shots = [
  { src: look1, alt: "Chic modern pixie haircut", label: "Precision Cut" },
  { src: look4, alt: "Glamorous styled updo", label: "Event Styling" },
  { src: look3, alt: "Gold accented luxury manicure", label: "Nail Artistry" },
  { src: look2, alt: "Serene luxury facial treatment", label: "Skin Ritual" },
];

export function Lookbook() {
  return (
    <section id="lookbook" className="bg-primary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-gold">
            The Lookbook
          </p>
          <h2 className="font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl">
            A Gallery of Transformations
          </h2>
          <p className="mt-5 text-base font-light text-primary-foreground/60">
            Real results, quietly captured. Every look is a collaboration
            between craft and character.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-4 [&>*]:mb-6">
          {shots.map((shot, i) => (
            <Reveal key={shot.label} delay={i * 0.08}>
              <motion.figure
                whileHover="hover"
                className="group relative overflow-hidden rounded-lg"
              >
                <motion.img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-5 left-5 translate-y-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-gold">—</span> {shot.label}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
