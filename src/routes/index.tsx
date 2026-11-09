import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/akua-home-cutout.png";
import portrait from "@/assets/akua-portrait.png.asset.json";
import { Footer, Nav, Reveal, nuggets } from "@/components/site";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "About Akua Gyekye — Lead talk with Akua" },
      { name: "description", content: "Akua Gyekye shares honest leadership lessons from 20+ years across technology, law and policy." },
      { property: "og:title", content: "About Akua Gyekye — Lead talk with Akua" },
      { property: "og:description", content: "Honest leadership lessons from 20+ years across technology, law and policy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="home-opening relative overflow-hidden">
        <Nav />
        <div className="home-opening-inner mx-auto grid max-w-[1440px] items-center px-6 pt-36 md:grid-cols-[1.05fr_1fr] md:px-12 md:pt-24">
          <div className="relative z-10 pb-6 text-center md:pb-16 md:text-left">
            <h1 className="home-name font-script text-lime">Akua Gyekye</h1>
            <p className="mt-4 font-serif text-2xl italic leading-relaxed text-cream lg:text-3xl">
              A little curiosity led me here.<br />Welcome to Lead talk with Akua.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button asChild className="h-auto min-h-12 whitespace-normal rounded-full px-5 py-3 text-sm"><Link to="/contact">Join the Leadership Newsletter <ArrowUpRight /></Link></Button>
              <Button asChild className="h-auto min-h-12 whitespace-normal rounded-full px-5 py-3 text-sm"><Link to="/leadership-nuggets">Read Leadership Nuggets <ArrowUpRight /></Link></Button>
            </div>
          </div>
          <img
            src={hero}
            alt="Akua Gyekye smiling in a red and gold patterned dress"
            className="home-portrait mx-auto w-full self-end object-contain object-bottom"
          />
        </div>
        <a href="#about-akua" aria-label="About Akua" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/80"><ArrowDown className="size-5" /></a>
      </section>

      <section id="about-akua" className="bg-olive-deep">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-12">
          <div>
            <h2 className="font-serif text-6xl italic leading-tight text-cream">Leadership,<br />said honestly.</h2>
            <div className="relative mt-14 w-72 -rotate-6 bg-paper p-4 pb-14 shadow-2xl">
              <span className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-3 bg-lime/70" />
              <img src={portrait.url} alt="Portrait of Akua Gyekye" className="aspect-square w-full object-cover object-top" />
            </div>
          </div>
          <div className="space-y-6 text-center font-serif text-lg leading-relaxed text-cream/90 md:text-xl">
            <p>Hi, I am Akua Gyekye. For over 20 years, I have led teams and worked across technology, law, public policy and international development. Along the way, I have learned that leadership is rarely a straightforward journey. There have been moments when I have had to make difficult decisions, navigate uncertainty, and figure things out without necessarily having all the answers.</p>
            <p>From building policy teams to leading government affairs across Africa, my experiences have continually challenged me to rethink what leadership means, how we show up for the people we lead, and how we create space for others to grow. I have come to appreciate that leadership is not just about the decisions we make or the positions we hold, but also about the lessons we learn, the questions we ask, and the people we become along the way.</p>
            <p>And that is what brings me here. A space to share my leadership experiences, reflect honestly on the lessons, and have conversations about the things we do not always talk about when it comes to leading.</p>
          </div>
        </div>
      </section>

      <section className="bg-cocoa-grad">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <p className="text-lg text-cream">#LeadwithAkua</p>
          <h2 className="font-display text-6xl text-lime md:text-7xl">Leadership Nuggets</h2>
          <p className="mt-8 max-w-xl text-lg text-cream/90">Honest lessons from leaders who have been in the seat, shared by Akua and her guest leaders.</p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {nuggets.slice(0, 3).map((n, i) => (
              <Reveal key={n.title} delay={i * 150}>
                <article className="flex h-full flex-col rounded-3xl bg-olive-deep p-7">
                  <p className="text-sm text-cream/80">{n.tag}</p>
                  <h3 className="mt-8 text-3xl font-bold text-cream">{n.title}</h3>
                  <p className="mt-5 font-serif text-lg leading-relaxed text-cream/85">{n.body}</p>
                  <Link to="/leadership-nuggets" className="mt-auto pt-10 text-lg text-cream hover:text-lime">Read more</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive-grad">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-12">
          <h2 className="font-display text-5xl text-cream md:text-8xl">Community and mentorship</h2>
          <p className="mt-3 text-lg text-cream/90">We lead better when we learn from each other.</p>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-olive-deep p-8">
                <h3 className="text-2xl font-bold text-cream">Virtual conversations</h3>
                <p className="mt-4 text-cream/90">Polls, discussions, and live sessions on the real challenges of leading.</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="h-full rounded-3xl border border-olive-deep p-8">
                <h3 className="text-2xl font-bold text-cream">Networking sessions</h3>
                <p className="mt-2 text-xl text-cream/90">Virtual and in-person events</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
