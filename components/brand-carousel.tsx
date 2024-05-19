import {
  autoplayPlugin,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "./common/carousel";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./common/card";
import React, { useRef } from "react";
import BlurImage from "@/components/common/blur-image";
import type { BlurImageProps } from "@/components/common/blur-image";

export interface BrandCarouselItem {
  id: string | number;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  backgroundImage?: Omit<BlurImageProps, "alt">;
  buttonOrLink?: JSX.Element;
  cardProps?: React.HTMLAttributes<HTMLDivElement>;
  foregroundContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}

interface BrandCarouselProps {
  items: BrandCarouselItem[];
}

function ItemCard(item: BrandCarouselItem): JSX.Element {
  return (
    <Card
      {...item.cardProps}
      className={cn(
        `!rounded-none h-full dark:!border-transparent`,
        item.backgroundImage?.src && "!border-transparent", // If image present no border
        item.cardProps?.className
      )}
    >
      {/* Card: If BG Image Not Used, Card BG will be shown */}
      <CardContent
        className={cn(
          `flex !p-0 relative min-h-[14rem] sm:min-h-[17rem] md:min-h-[22rem] lg:min-h-[27rem] h-full items-center justify-center transition-all duration-300`
        )}
      >
        {/* Background Image */}
        {item.backgroundImage?.src ? (
          <BlurImage
            fill
            {...item.backgroundImage}
            // Don't override className and alt
            className={cn(
              `absolute inset-0 z-[1] object-cover`,
              item.backgroundImage?.className
            )}
            alt={`${item.id}_hero_image`}
          />
        ) : null}

        {/* Foreground Content */}
        <div
          {...item.foregroundContainerProps}
          className={cn(
            `relative w-full gap-2 z-[2] px-4 max-sm:pt-6 max-sm:pb-8 sm:py-10 md:py-16 sm:px-6 flex justify-between h-full transition-all duration-300`,
            item.foregroundContainerProps?.className
          )}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              {item.title ? <h1>{item.title}</h1> : null}
              {item.subtitle ? <h4 className="mt-2">{item.subtitle}</h4> : null}
              {item.description ? (
                <span className="typography-body2 md:typography-body1 mt-1">
                  {item.description}
                </span>
              ) : null}
            </div>
            {item.buttonOrLink || <span />}
          </div>
          {item.children}
        </div>
      </CardContent>
    </Card>
  );
}

export default function BrandCarousel({
  items,
}: BrandCarouselProps): JSX.Element {
  const plugin = useRef(
    autoplayPlugin({
      delay: 3000,
    })
  );

  return items && items.length === 1 ? (
    // Don't need to use Carousel if only one image is passed. Use this component if:
    // You want same style as carousel for a image
    // Or if in future, you may have multiple images instead of a single image at the same place
    ItemCard(items[0])
  ) : (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
      plugins={[plugin.current as any]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => {
        plugin.current.play();
      }}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id}>{ItemCard(item)}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots className="absolute bottom-2 left-1/2 -translate-x-1/2" />
    </Carousel>
  );
}
