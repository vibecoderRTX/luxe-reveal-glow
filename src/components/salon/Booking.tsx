import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  "Hair — Cut & Style",
  "Hair — Colour",
  "Skin — Facial",
  "Nails — Manicure / Pedicure",
  "Spa — Massage",
];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const field =
    "w-full rounded-none border-0 border-b border-border bg-transparent px-1 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-0 transition-colors";

  return (
    <section id="booking" className="bg-secondary py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-gold">
            Reservations
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Reserve Your
            <br />
            <span className="italic">Moment of Luxury</span>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            Tell us a little about what you're after and your preferred time.
            Our concierge will confirm your appointment within the hour.
          </p>
          <ul className="mt-8 space-y-3">
            {["Complimentary consultation", "Master-level artisans", "Serene private suites"].map(
              (perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check size={16} className="text-gold" />
                  {perk}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)] sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-accent-foreground">
                  <Check size={26} />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-foreground">
                  Thank you
                </h3>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  Your request is received. We'll be in touch shortly to confirm.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-7">
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Full Name
                  </label>
                  <input required type="text" placeholder="Jane Doe" className={field} />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Phone
                  </label>
                  <input required type="tel" placeholder="+1 (555) 000-0000" className={field} />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Service
                  </label>
                  <select required defaultValue="" className={field}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Date
                    </label>
                    <input required type="date" className={field} />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Time
                    </label>
                    <input required type="time" className={field} />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
