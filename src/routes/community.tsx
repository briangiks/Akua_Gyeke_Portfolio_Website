import { createFileRoute } from "@tanstack/react-router";
import { Footer, Nav, Reveal } from "@/components/site";
import { PhotoGallery, type GalleryPhoto } from "@/components/community/PhotoGallery";
import { ArticleCard, type Article } from "@/components/community/ArticleCard";

const communityPhotos: GalleryPhoto[] = [
  { src: "/images/community/community-01.jpg", alt: "Akua Gyekye listening thoughtfully during a panel session" },
  { src: "/images/community/community-08.jpg", alt: "Akua Gyekye speaking animatedly in a fireside chat, holding a notebook" },
  { src: "/images/community/community-03.jpg", alt: "Studio portrait of Akua Gyekye in a red and gold patterned dress" },
  { src: "/images/community/community-02.jpg", alt: "Akua Gyekye sharing a laugh with fellow panelists" },
  { src: "/images/community/community-09.jpg", alt: "Akua Gyekye smiling while receiving a gift box from the Oxford Africa Business Alliance" },
  { src: "/images/community/community-04.jpg", alt: "Headshot portrait of Akua Gyekye" },
  { src: "/images/community/community-05.jpg", alt: "Akua Gyekye seated at a panel discussion, pen in hand" },
  { src: "/images/community/community-10.jpg", alt: "Akua Gyekye speaking at a podium beside a Microsoft banner" },
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
    imagePosition: "top",
    title: "Africa CEO Forum 2026 — Speaker Profile",
    excerpt:
      "Akua Gyekye is Microsoft's Head of Government Affairs for Africa, responsible for shaping the company's public policy agenda and leading a team of policy professionals across the continent. Together, they focus on key policy areas including artificial intelligence, cloud computing, data privacy, cybersecurity, digital safety and integrity, and international trade.",
    url: "https://www.theafricaceoforum.com/forum-2026/en/intervenant/akua-gyekye/",
  },
  {
    image: "/images/articles/globalcenter-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    imagePosition: "top",
    title: "Women in Focus: Akua Gyekye",
    excerpt:
      "Akua Gyekye is Senior Director and Head of Government Affairs for Africa at Microsoft, leading a team that works across technology, policy, government engagement, and partnerships throughout the continent. Her work covers AI and cloud governance, regulatory clarity, cybersecurity, and the responsible and inclusive adoption of technology.",
    url: "https://www.globalcenter.ai/aorai/women-in-focus/akua-gyekye",
  },
  {
    image: "/images/articles/cipit-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    title: "Akua Gyekye — CIPIT Steering Committee",
    excerpt:
      "Akua Gyekye serves as Microsoft's Head of Government Affairs for Africa, where she shapes the company's public policy agenda and leads a team of policy professionals across the continent. Her team's priorities include AI, cloud computing, data privacy, cybersecurity, digital safety, and international trade.",
    url: "https://cipit.strathmore.edu/steering-committee/akua-gyekye/",
  },
  {
    image: "/images/articles/iicom-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    title: "Akua K. Gyekye — International Institute of Communications",
    excerpt:
      "Akua Gyekye is Microsoft's Regional Government Affairs Director for Africa, overseeing the company's legal and government affairs team. The role covers public policy on topics such as AI, cloud, data privacy, cybersecurity, and international trade. Before joining Microsoft, she worked in public policy and government affairs at WhatsApp, covering Europe, the Middle East, and Africa.",
    url: "https://www.iicom.org/profile/akua-gyekye/",
  },
  {
    image: "/images/articles/africancollab-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    title: "Akua Gyekye — African Collaborative",
    excerpt:
      "Akua Gyekye is Microsoft's Head of Government Affairs for Africa, where she shapes the company's public policy agenda and leads a team of policy professionals across the continent. Her team works on issues such as AI, cloud computing, data privacy, and cybersecurity, partnering with governments, civil society, and industry to shape technology policy across Africa.",
    url: "https://www.africancollab.org/people/akua-gyekye",
  },
  {
    image: "/images/articles/coe-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    title: "Akua Gyekye — Octopus Cybercrime Community, Council of Europe",
    excerpt:
      "Akua Gyekye leads Microsoft's government affairs work across Africa, shaping the company's public policy agenda and managing a team of policy professionals. Her focus areas include AI, cloud computing, data privacy, cybersecurity, digital safety, and international trade, working with governments, civil society, and industry to shape technology policy.",
    url: "https://www.coe.int/en/web/cybercrime/-/akua-gyekye",
  },
  {
    image: "/images/articles/techreviewafrica-article.jpg",
    imageAlt: "Portrait of Akua Gyekye",
    title: "Akua Gyekye Appointed Microsoft Head of Government Affairs for Africa",
    excerpt:
      "Microsoft has named Akua Gyekye its Head of Government Affairs for Africa, a promotion from her earlier role as Government Affairs Director. In the position, she leads the company's government affairs strategy across the continent on issues such as digital transformation, cybersecurity, and AI governance.",
    url: "https://techreviewafrica.com/news/2687/akua-gyekye-appointed-microsoft-head-of-government-affairs-for-africa",
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
            <PhotoGallery photos={communityPhotos} />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
