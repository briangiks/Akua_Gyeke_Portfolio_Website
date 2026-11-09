import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type SlideshowPhoto = {
  src: string;
  alt: string;
};

export function PhotoSlideshow({ photos }: { photos: SlideshowPhoto[] }) {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {photos.map((photo) => (
          <CarouselItem key={photo.src}>
            <div className="aspect-video w-full overflow-hidden rounded-3xl border border-border bg-cocoa/60">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
