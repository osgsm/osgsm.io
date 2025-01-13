import { TweetEmbed } from "@/components/tweet/tweet-embed";

export async function Tweet({ url }: { url: string }) {
  try {
    const response = await fetch(
      `https://publish.twitter.com/oembed?url=${url}&omit_script=true`,
    );
    const { html } = await response.json();

    return <TweetEmbed html={html} />;
  } catch (error) {
    return (
      <div className="my-4 rounded-xl border border-border p-4 text-muted">
        ツイートを読み込めませんでした。
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 hover:underline"
        >
          Twitter で見る
        </a>
      </div>
    );
  }
}
