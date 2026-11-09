import { createFileRoute } from "@tanstack/react-router";
import { Footer, Nav, Reveal } from "@/components/site";
import { PhotoSlideshow, type SlideshowPhoto } from "@/components/community/PhotoSlideshow";
import { ArticleCard, type Article } from "@/components/community/ArticleCard";

const communityPhotos: SlideshowPhoto[] = [
  { src: "/images/community/community-01.jpg", alt: "Akua Gyekye listening thoughtfully during a panel session" },
  { src: "/images/community/community-02.jpg", alt: "Akua Gyekye sharing a laugh with fellow panelists" },
  { src: "/images/community/community-03.jpg", alt: "Studio portrait of Akua Gyekye in a red and gold patterned dress" },
  { src: "/images/community/community-04.jpg", alt: "Headshot portrait of Akua Gyekye" },
  { src: "/images/community/community-05.jpg", alt: "Akua Gyekye seated at a panel discussion, pen in hand" },
  { src: "/images/community/community-06.jpg", alt: "Close-up of Akua Gyekye in conversation at a forum" },
  { src: "/images/community/community-07.jpg", alt: "Full-length portrait of Akua Gyekye in a red and gold patterned outfit" },
];

const articles: Article[] = [
  {
    image: "/images/articles/bwit-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    title: "The Story of Akua Gyekye",
    excerpt:
      "Akua Gyekye is Microsoft's Regional Government Affairs Director for Africa, where she leads strategic public policy engagement on AI, cloud, cybersecurity, and data privacy. With over 20 years of experience in law, technology policy, and international development, she has held leadership roles at WhatsApp and Meta, where she helped launch the company's first Africa Policy Team.",
    url: "https://theblackwomenintech.com/projects/the-story-of-akua-gyekye-2/",
  },
  {
    image: "/images/articles/africa-ceo-forum-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    title: "Africa CEO Forum 2026 — Speaker Profile",
    excerpt:
      "Akua Gyekye is Microsoft's Head of Government Affairs for Africa, responsible for shaping the company's public policy agenda and leading a team of policy professionals across the continent. Together, they focus on key policy areas including artificial intelligence, cloud computing, data privacy, cybersecurity, digital safety and integrity, and international trade.",
    url: "https://www.theafricaceoforum.com/forum-2026/en/intervenant/akua-gyekye/",
  },
];

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Events & Media with Akua Gyekye" },
      { name: "description", content: "Events, conversations and media from the Lead talk with Akua community." },
      { property: "og:title", content: "Community — Events & Media with Akua Gyekye" },
      { property: "og:description", content: "Events, conversations and media from the Lead talk with Akua community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <section className="bg-hero relative">
        <Nav />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-36 md:px-12">
          <div className="aspect-video w-full overflow-hidden rounded-3xl border border-border bg-cocoa/60">
            <video
              className="h-full w-full object-cover"
              src="/videos/women-in-tech.mp4"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="bg-olive-deep">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <h2 className="text-center font-display text-6xl text-lime">EVENTS</h2>
          <Reveal className="mt-10">
            <div className="grid gap-8 md:grid-cols-2">
              {articles.map((article) => (
                <ArticleCard key={article.url} article={article} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-cocoa-grad">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <h2 className="text-center font-display text-6xl text-lime">MEDIA</h2>
          <Reveal className="mt-10">
            <PhotoSlideshow photos={communityPhotos} />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
