export type Article = {
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  url: string;
  /** Vertical focal point for the cropped thumbnail. Defaults to "center". */
  imagePosition?: "center" | "top";
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-olive-deep">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className={`h-full w-full object-cover ${article.imagePosition === "top" ? "object-top" : "object-center"}`}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-bold text-cream">{article.title}</h3>
        <p className="mt-4 flex-1 font-serif text-base leading-relaxed text-cream/85">{article.excerpt}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-1 text-lg text-lime hover:text-cream"
        >
          Read More <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
