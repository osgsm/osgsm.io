"use client";

import type { ImageProps } from "next/image";

import { cn } from "@/lib/cn";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface MDXImageProps extends ImageProps {
  className?: string;
  alt: string;
  caption?: string;
}

export default function MDXImage({
  className,
  caption,
  alt,
  ...props
}: MDXImageProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);
  const href = props.src.toString();

  return (
    <motion.a
      className="hover:!opacity-100 my-6 flex cursor-pointer flex-col justify-end gap-2"
      href={href}
      target={href.startsWith("/") ? "_self" : "_blank"}
      whileHover={{ scale: 0.99 }}
    >
      <div
        className={cn(
          "relative max-h-[560px] w-fit overflow-hidden rounded-large border border-border",
          className,
        )}
      >
        <Image
          unoptimized
          alt={alt}
          width={1000}
          height={1000}
          sizes="100vw"
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            objectPosition: "center",
            WebkitFilter: isImageLoading ? "blur(8px)" : "none",
            transition: "all 0.5s ease",
          }}
          onLoad={() => setImageLoading(false)}
          {...props}
        />
      </div>
      {caption && (
        <sub className="pt-0 pb-4 text-center text-[--iris-10]">{caption}</sub>
      )}
    </motion.a>
  );
}
