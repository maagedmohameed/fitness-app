"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React, { useCallback, useEffect } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Link } from "react-router-dom";
import { useLocale, useTranslations } from "use-intl";
import NoDataFound from "@/components/shared/no-data-found";
import type { MealByCategory } from "@/lib/types/meals";
import MealCard from "@/components/shared/meal-card";
import { MealCardSkeleton } from "@/components/skeletons/meal-card.skeleton";

type MealCardCarouselProps = {
  meals?: MealByCategory[];
  isPending: boolean;
};

export default function MealCardCarousel({
  meals,
  isPending,
}: MealCardCarouselProps) {
  // Translations
  const t = useTranslations("workouts");
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
        <CarouselContent className="flex-row gap-4 md:gap-0 max-h-316">
          {/* Muscle card skeleton */}
          {isPending &&
            Array.from({ length: 3 }).map((_, key) => (
              <CarouselItem
                key={key}
                className="flex justify-center basis-1/1 md:basis-1/3"
              >
                <MealCardSkeleton key={key} />
              </CarouselItem>
            ))}

          {/* Display data  */}
          {meals?.map(meal => (
            <CarouselItem
              key={meal.idMeal}
              className="flex justify-center basis-1/1 md:basis-1/3"
            >
              <MealCard title={meal.strMeal} mealImage={meal.strMealThumb} />
            </CarouselItem>
          ))}
          {/* No data to display   */}
          {!meals?.length && <NoDataFound />}
        </CarouselContent>
      </Carousel>

      {/* See more button (MOBILE SCREENS) */}
      {meals && meals.length > 3 && (
        <Link
          to={"/classes"}
          className="md:hidden font-inter font-semibold text-[#FF4100] text-xs capitalize"
        >
          {t("see-more-button")}
        </Link>
      )}

      {/* Dots navigation */}
      {meals && meals.length > 3 && (
        <div className="flex items-center justify-center gap-2">
          {meals.slice(0, Math.ceil(meals.length / 3)).map((_, index) => (
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
