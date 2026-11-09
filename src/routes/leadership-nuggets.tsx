import { createFileRoute } from "@tanstack/react-router";
import { Footer, Nav, Reveal, nuggets } from "@/components/site";

export const Route = createFileRoute("/leadership-nuggets")({
  head: () => ({
    meta: [
      { title: "Leadership Nuggets — Who is Akua Gyekye" },
      { name: "description", content: "Meet Akua Gyekye, Microsoft's Head of Government Affairs for Africa, and read her leadership nuggets." },
      { property: "og:title", content: "Leadership Nuggets — Who is Akua Gyekye" },
      { property: "og:description", content: "Honest leadership lessons shaped by 20+ years across policy, technology and law." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <section className="bg-hero relative overflow-hidden">
        <Nav />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-36 md:grid-cols-[0.8fr_1.2fr] md:px-12">
          <img src="/images/community/community-07.jpg" alt="Akua Gyekye in a red and gold patterned outfit" className="animate-rise-up w-full rounded-3xl shadow-2xl" />
          <div className="animate-slide-left">
            <h1 className="font-display text-5xl text-lime md:text-6xl">Who is Akua</h1>
            <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-cream/90">
              <p>Akua Gyekye is Microsoft's Head of Government Affairs for Africa, responsible for shaping the company's public policy agenda and leading a team of policy professionals across the continent. Together, they focus on key policy areas including artificial intelligence, cloud computing, data privacy, cybersecurity, digital safety and integrity, and international trade. The team engages with governments, civil society, and industry leaders to help shape inclusive and future-focused technology policy across Africa.</p>
              <p>Akua brings over 20 years of cross-sector experience in public policy, technology, law, finance, and international development, with a career that spans the private sector, multilateral institutions, and government affairs. She joined Microsoft from WhatsApp, where she led public policy and government affairs across Europe, the Middle East, and Africa. Prior to that, she spearheaded election integrity efforts at Meta in Africa and played a key role in establishing and expanding the company's first Africa Policy Team. She also created and implemented pan-African campaigns on digital connectivity and online safety.</p>
              <p>Earlier in her career, Akua served as a legal advisor in Liberia and Nigeria for the World Bank, IFC, and USAID, and later worked as a project finance lawyer at Clifford Chance. She also has years of experience working with government departments, NGOs, and international think tanks across the U.S., Europe, and Sub-Saharan Africa.</p>
              <p>Akua holds an LL.M. in International and Comparative Law from George Washington University, a Law Degree from Cambridge University, and a BA in Law and Society from American University, with minors in International Relations and Spanish. She is admitted to practice law in both New York and the United Kingdom, fluent in English and German, and currently lives in Nairobi with her husband.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cocoa-grad">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <p className="text-lg text-cream">#LeadwithAkua</p>
          <h2 className="font-display text-6xl text-lime">Leadership Nuggets</h2>
          <p className="mt-6 max-w-xl text-lg text-cream/90">Lessons drawn from the journey above — honest, practical and shared in full.</p>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {nuggets.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 150}>
                <article className="h-full rounded-3xl bg-olive-deep p-8">
                  <p className="text-sm text-cream/75">{d.tag}</p>
                  <h3 className="mt-6 text-3xl font-bold text-cream">{d.title}</h3>
                  <p className="mt-4 font-serif text-lg leading-relaxed text-cream/90">{d.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
