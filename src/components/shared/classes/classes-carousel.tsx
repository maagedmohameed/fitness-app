import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React, { useCallback, useEffect } from "react";
import MuscleCard from "@/components/shared/muscle-card";
import { cn } from "@/lib/utils/tailwind-merge";
import { MuscleCardSkeleton } from "@/components/skeletons/muscle-card.skeleton";
import { useLocale } from "use-intl";
import NoDataFound from "@/components/shared/no-data-found";

type MuscleCardCarouselProps = {
  muscles?: Muscle[];
  isPending: boolean;
};

export default function ClassesCarousel({
  muscles,
  isPending,
}: MuscleCardCarouselProps) {
  // Translations
  const locale = useLocale() as "en" | "ar";

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

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";
  const chunked = [];

  if (muscles && muscles.length) {
    for (let i = 0; i < muscles.length; i += 6) {
      chunked.push(muscles.slice(i, i + 6));
    }
  }

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
        <CarouselContent>
          {/* Muscle card skeleton */}
          {isPending && (
            <CarouselItem>
              <div className="gap-x-9 gap-y-8 grid md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, key) => (
                  <MuscleCardSkeleton key={key} />
                ))}
              </div>
            </CarouselItem>
          )}

          {/* Display data  */}
          {chunked.map((group, index) => (
            <CarouselItem key={index}>
              <div className="gap-x-9 gap-y-8 grid md:grid-cols-2 lg:grid-cols-3">
                {group.map(muscle => (
                  <MuscleCard key={muscle._id} muscle={muscle} />
                ))}
              </div>
            </CarouselItem>
          ))}

          {/* No data to display   */}
          {!muscles?.length && <NoDataFound />}
        </CarouselContent>
      </Carousel>

      {/* This code below commented cause It hasn't decided its behavior yet (Scrollable / Infinite query)  */}
      {/* See more button (MOBILE SCREENS) */}
      {/* {muscles && muscles.length > 3 && (
        <Link
          to={"/classes"}
          className="md:hidden font-inter font-semibold text-[#FF4100] text-xs capitalize"
        >
          {t("see-more-button")}
        </Link>
      )} */}

      {/* Dots navigation */}
      {chunked && chunked.length > 1 && (
        <div className="hidden md:block space-x-2">
          {chunked.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "bg-[#242424] dark:bg-[#F3F3F4] rounded-full size-2.5",
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
