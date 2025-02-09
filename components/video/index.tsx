interface MDXVideoProps {
  src: string;
  caption?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function MDXVideo({
  caption,
  src,
  autoPlay = false,
  controls = true,
  loop = false,
  muted = true,
}: MDXVideoProps) {
  return (
    <div className="my-6 flex flex-col justify-end gap-2">
      <div className="relative max-h-[560px] w-fit overflow-hidden rounded-large border border-border">
        <video
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
          muted={muted}
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
    </div>
  );
}
