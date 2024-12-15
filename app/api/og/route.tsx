import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  title?: string;
};

/*
 * To assist with generating dynamic Open Graph (OG) images, you can use the Vercel @vercel/og library to compute and generate social card images using Vercel Edge Functions.
 * @see: https://vercel.com/docs/functions/og-image-generation
 *
 * You can use the following code sample to explore using parameters and different content types with next/og.
 * @see: https://vercel.com/guides/dynamic-text-as-image
 *
 * For this example we are going to generate a simple social card image with a dynamic title.
 */
export async function GET(request: Request) {
  try {
    /*
     * Next we are going to extract the parameters from the request URL.
     */
    const { searchParams } = new URL(request.url);
    const parameters: Parameters = Object.fromEntries(searchParams);
    const { title } = parameters;
    console.log(parameters);

    /*
     * Finally we are fetching the font file from the public directory.
     */
    const inter = fetch(
      new URL("/public/assets/inter/regular.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            /* layout */
            display: "flex",
            width: "100%",
            height: "100%",

            /* box */
            padding: "120px",

            /* style */
            fontSize: "32px",
            letterSpacing: "-0.47px",
            backgroundColor: "rgba(19, 19, 30, 1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "24px",
              gap: 12,
            }}
          >
            <div style={{ color: "rgba(91, 91, 214, 1)" }}>osgsm.io</div>
            {title && <div style={{ color: "rgba(38, 42, 101, 1)" }}>/</div>}
            {title ? (
              <div style={{ color: "rgba(91, 91, 214, 1)" }}>
                {title.toLowerCase()}
              </div>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Inter",
            data: await inter,
            weight: 400,
          },
        ],
      },
    );
  } catch {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
