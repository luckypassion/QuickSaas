"use client";

import { cn } from "@/lib/utils";
import type { ImageProps, StaticImageData } from "next/image";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface BlurImageProps extends ImageProps {
  fallback?: string | StaticImageData;
  fallbackElement?: React.ReactNode;
}

export default function BlurImage({
  fallbackElement,
  ...props
}: BlurImageProps) {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState(props.src);
  const [useFallback, setUseFallback] = useState(false);
  useEffect(() => {
    setSrc(props.src);
  }, [props.src]); // update the `src` value when the `prop.src` value changes

  return !(fallbackElement && useFallback) ? (
    <Image
      {...props}
      alt={props.alt}
      className={cn(props.className, loading ? "blur-[2px]" : "blur-0")}
      onError={(e) => {
        setSrc(props.fallback ?? `https://avatar.vercel.sh/${props.alt}`); // if the image fails to load, use the default avatar
        e.currentTarget.onerror = null;
        setUseFallback(true);
      }}
      onLoad={() => {
        setLoading(false);
      }}
      src={src}
    />
  ) : (
    fallbackElement
  );
}
