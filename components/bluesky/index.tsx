import { BlueskyEmbed } from "@/components/bluesky/bluesky-embed";

export async function Bluesky({ url }: { url: string }) {
  try {
    const response = await fetch(`https://embed.bsky.app/oembed?url=${url}`);
    const { html } = await response.json();

    return <BlueskyEmbed html={html} />;
  } catch (error) {
    return (
      <div className="my-4 rounded-xl border border-border p-4 text-muted">
        投稿を読み込めませんでした。
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 hover:underline"
        >
          Bluesky で見る
        </a>
      </div>
    );
  }
}
