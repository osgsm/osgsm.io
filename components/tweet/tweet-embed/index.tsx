"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    twttr: any;
  }
}

export function TweetEmbed({ html }: { html: string }) {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window.twttr === "undefined") return;

    window.twttr.widgets.load(tweetRef.current);
  }, []);

  return (
    <div
      ref={tweetRef}
      className="[&_iframe]:rounded-xl"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
