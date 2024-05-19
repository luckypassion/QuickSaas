"use client";

import Link from "next/link";
import BrandCarousel from "@/components/brand-carousel";
import { Button } from "@/components/common/button";
import type { BrandCarouselItem } from "@/components/brand-carousel";

const brandCarouselItemsWithClasses: BrandCarouselItem[] = [
  {
    id: 1,
    title: "SUNDAY FUN-DAY",
    subtitle: "NFL ROSTER",
    description: "All Present. Rounded Corners.",
    backgroundImage: {
      src: "/images/graphic.png",
      className: "opacity-20",
    },
    cardProps: {
      className: "text-white !bg-[#063387] lg:!rounded-lg lg:overflow-hidden",
    },
    buttonOrLink: (
      <Button className="w-fit whitespace-normal backdrop-blur">
        Primary Button For In App Actions
      </Button>
    ),
    children: <></>,
  },
  {
    id: 2,
    title: "SUNDAY FUN-DAY 2",
    subtitle: "NFL ROSTER",
    description: "All present but no indicator on top.",
    backgroundImage: {
      src: "/images/graphic.png",
      className: "grayscale brightness-75 opacity-20",
    },
    cardProps: {
      className: "text-white !bg-[#B42025]",
    },
    buttonOrLink: (
      <Button
        variant="secondary"
        className="w-fit whitespace-normal backdrop-blur"
      >
        Secondary Button For In App Actions
      </Button>
    ),
    children: <></>,
  },
  {
    id: "2B",
    title: "SUNDAY FUN-DAY 2B",
    subtitle: "NFL ROSTER",
    description: "All Present. Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: {
      src: "/images/graphic.png",
      className: "grayscale opacity-20",
    },
    cardProps: {
      className: "text-foreground",
    },
    buttonOrLink: (
      <Button className="w-fit whitespace-normal backdrop-blur">
        Primary Button
      </Button>
    ),
    children: <></>,
  },
  {
    id: 3,
    title: "SUNDAY FUN-DAY 3",
    description: "No Subtitle. Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: {
      src: "/images/graphic.png",
      className: "grayscale brightness-75 opacity-20",
    },
    cardProps: {
      className: "text-black !bg-[#C1FF14]",
    },
    buttonOrLink: (
      <Link
        className="border-b border-black hover:border-transparent w-fit"
        href="#"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        External Link Click Here
      </Link>
    ),
  },
  {
    id: 4,
    title: "SUNDAY FUN-DAY 4",
    subtitle: "NO DESCRIPTION",
    backgroundImage: {
      src: "/images/graphic.png",
      className: "grayscale brightness-75 opacity-20",
    },
    cardProps: {
      className: "text-black !bg-[#B3995D]",
    },
    buttonOrLink: (
      <Link
        className="w-fit"
        href="#"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <Button
          variant="secondary"
          className="w-fit whitespace-normal backdrop-blur"
        >
          Secondary Button With External Link
        </Button>
      </Link>
    ),
  },
  {
    id: 5,
    title: "SUNDAY FUN-DAY 5",
    subtitle: "NFL ROSTER",
    description: "No Background Image. Lorem ipsum dolor sit amet consectetur.",
    buttonOrLink: (
      <Link
        className="w-fit"
        href="#"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <Button
          variant="outline"
          className="w-fit whitespace-normal backdrop-blur"
        >
          Outline Button With External Link
        </Button>
      </Link>
    ),
  },
  {
    id: 6,
    title: "SUNDAY FUN-DAY 6",
    subtitle: "NFL ROSTER",
    description: "No Button. Lorem ipsum dolor sit amet consectetur.",
    backgroundImage: {
      src: "/images/graphic.png",
      className: "grayscale brightness-75 opacity-20",
    },
    cardProps: {
      className: "text-primary !bg-[#017129]",
    },
  },
  {
    id: 7,
    backgroundImage: {
      src: "/images/graphic.png",
      className: "grayscale brightness-75 opacity-20",
    },
  },
];
export default function Home() {
  return (
    <div>
      <div className="flex items-center text-center">sdfsdf</div>
      <div className="w-full py-3">
        <BrandCarousel items={brandCarouselItemsWithClasses} />
      </div>
    </div>
  );
}
