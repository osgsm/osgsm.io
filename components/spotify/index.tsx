export async function Spotify({ url }: { url: string }) {
  try {
    const response = await fetch(`https://open.spotify.com/oembed?url=${url}`);
    const { html } = await response.json();

    return (
      <div
        className="my-6 [&_iframe]:rounded-xl"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
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
          Spotify で見る
        </a>
      </div>
    );
  }
}
