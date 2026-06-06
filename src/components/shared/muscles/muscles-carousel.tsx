import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React, { useCallback, useEffect } from "react";
import MuscleCard from "@/components/shared/muscle-card";
import { cn } from "@/lib/utils/tailwind-merge";
import { Link } from "react-router-dom";
import { MuscleCardSkeleton } from "@/components/skeletons/muscle-card.skeleton";
import { useTranslations } from "use-intl";
import NoDataFound from "@/components/shared/no-data-found";
import { useLanguage } from "@/hooks/language.context";
import type { Muscle } from "@/lib/types/muscle";

type MuscleCardCarouselProps = {
  muscles?: Muscle[];
  isPending: boolean;
};

export default function MusclesCarousel({
  muscles,
  isPending,
}: MuscleCardCarouselProps) {
  // Translations
  const t = useTranslations("workouts");
  const { dir } = useLanguage();

  // States
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

  // Hooks
  /**
   * Updates the current active slide
   */
  const updateCurrent = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api]);

  // Effects
  /**
   * Register carousel event listener for 'select' event
   */
  useEffect(() => {
    if (!api) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api, updateCurrent]);

  return (
    <>
      {/* Carousel*/}
      <Carousel
        setApi={setApi}
        // opts={{
        //   loop: true,
        // }}
        dir={dir}
        opts={{
          direction: dir,
        }}
        className="w-full"
      >
        <CarouselContent
          className={"md:flex-row flex-col gap-8 md:gap-0 max-h-316"}
        >
          {/* Muscle card skeleton */}
          {isPending &&
            Array.from({ length: 3 }).map((_, key) => (
              <CarouselItem
                key={key}
                className="flex justify-center basis-1/1 md:basis-1/3"
              >
                <MuscleCardSkeleton key={key} />
              </CarouselItem>
            ))}

          {/* Display data  */}
          {muscles?.map(muscle => (
            <CarouselItem
              key={muscle._id}
              className="flex justify-center basis-1/1 md:basis-1/3 lg:basis-1/3"
            >
              <MuscleCard muscle={muscle} />
            </CarouselItem>
          ))}

          {/* No data to display   */}
          {!muscles?.length && <NoDataFound />}
        </CarouselContent>
      </Carousel>

      {/* See more button (MOBILE SCREENS) */}
      {muscles && muscles.length > 3 && (
        <Link
          to={"/classes"}
          onClick={() => window.scrollTo(0, 0)}
          className="md:hidden pb-5 font-inter font-semibold text-[#FF4100] text-xs capitalize"
        >
          {t("see-more-button")}
        </Link>
      )}

      {/* Dots navigation */}
      {muscles && muscles.length > 3 && (
        <div className="hidden md:block space-x-2">
          {muscles.slice(0, Math.ceil(muscles.length / 3)).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "bg-[#242424] dark:bg-[#F3F3F4] rounded-full size-2.5",
                {
                  "bg-[#FF4100] dark:bg-[#FF4100] w-7 rounded-lg":
                    current === index + 1,
                },
              )}
            />
          ))}
        </div>
      )}
    </>
  );
}
