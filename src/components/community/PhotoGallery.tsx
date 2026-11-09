export type GalleryPhoto = {
  src: string;
  alt: string;
};

/**
 * A masonry-style photo gallery: images keep their natural aspect ratio
 * (no forced cropping) and flow into balanced columns, like a professional
 * press/media page rather than a single-image carousel.
 */
export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
      {photos.map((photo) => (
        <a
          key={photo.src}
          href={photo.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-5 block break-inside-avoid overflow-hidden rounded-2xl border border-border bg-cocoa/60"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </a>
      ))}
    </div>
  );
}
