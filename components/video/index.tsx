"use client";

import { motion } from "framer-motion";

interface MDXVideoProps {
  src: string;
  caption?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
}

export default function MDXVideo({
  caption,
  src,
  autoPlay = false,
  controls = true,
  loop = false,
}: MDXVideoProps) {
  return (
    <motion.a
      className="hover:!opacity-100 my-6 flex cursor-pointer flex-col justify-end gap-2"
      href={src}
      whileHover={{ scale: 0.975 }}
    >
      <div className="relative max-h-[560px] w-fit overflow-hidden rounded-large border border-border">
        <video
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
          playsInline
          className="h-auto w-full object-contain"
        >
          <source src={src} type="video/mp4" />
          <track kind="captions" label="Japanese" srcLang="ja" src="" default />
        </video>
      </div>
      {caption && (
        <sub className="pt-2 pb-4 text-center text-[--iris-10]">{caption}</sub>
      )}
    </motion.a>
  );
}
