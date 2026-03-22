"use client";

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
import { useLocale, useTranslations } from "use-intl";
import NoDataFound from "@/components/shared/no-data-found";

type MuscleCardCarouselProps = {
  muscles?: Muscle[];
  isPending: boolean;
};

export default function MuscleCardCarousel({
  muscles,
  isPending,
}: MuscleCardCarouselProps) {
  // Translate
  const t = useTranslations("workouts");
  const locale = useLocale() as "en" | "ar";

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Hooks
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

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
        <CarouselContent className="flex-col gap-8 max-h-316 md:flex-row md:gap-0">
          {/* Muscle card skeleton */}
          {isPending &&
            Array.from({ length: 3 }).map((_, key) => (
              <CarouselItem
                key={key}
                className="basis-1/1 md:basis-1/3 flex justify-center"
              >
                <MuscleCardSkeleton key={key} />
              </CarouselItem>
            ))}

          {/* Display data  */}
          {muscles?.map(muscle => (
            <CarouselItem
              key={muscle._id}
              className="basis-1/1 md:basis-1/3 flex justify-center"
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
          className="md:hidden capitalize font-inter font-semibold text-[#FF4100] text-xs"
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
                "size-2.5 rounded-full bg-[#242424] dark:bg-[#F3F3F4] ",
                {
                  "bg-[#FF4100] dark:bg-[#FF4100] w-7 rounded-lg":
                    current === index + 1,
                }
              )}
            />
          ))}
        </div>
      )}
    </>
  );
}
