"use client";

export function BlueskyEmbed({ html }: { html: string }) {
  return (
    <div
      className="my-6 [&_iframe]:rounded-xl"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: html.replace(
          /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          "",
        ),
      }}
    />
  );
}
