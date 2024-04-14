import { createContext, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaPluginType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import styles from "@/styles/carousel.module.css";
type ContextValue = {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
};

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const CarouselContext = createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

const Carousel: React.FC<Props> = ({ className, children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, selectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} w-full overflow-hidden ${className}`}
      >
        <div className={`${styles.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
