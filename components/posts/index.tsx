import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
  numberOfPosts?: number;
}

export const Posts = ({ category, numberOfPosts }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return (
      new Date(b.time.created).getTime() - new Date(a.time.created).getTime()
    );
  });

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-8 pb-8">
        <NextViewTransition
          href={`/${category}`}
          className="col-span-full flex justify-between no-underline lg:col-span-4"
        >
          <hgroup>
            <h2 className="-ml-[.06em] ~text-4xl/8xl border-0 text-iris-5 capitalize leading-none tracking-[-0.07em]">
              {category}
            </h2>
            <p className="~text-sm/base m-0 text-muted">
              {category === "blog"
                ? "試行の記録とか学習メモ"
                : "ブログに満たないコードスニペットとか"}
            </p>
          </hgroup>
        </NextViewTransition>
        <div className="~gap-5/8 col-span-full grid lg:col-span-8">
          {posts.slice(0, numberOfPosts).map((post) => {
            return (
              <React.Fragment key={post.slug}>
                <NextViewTransition
                  href={`/${category}/${post.slug}`}
                  className="gradient-card flex w-full flex-col justify-between gap-2 px-6 py-5 leading-normal no-underline [--border-color:var(--iris-4)] [--gradient-from:var(--iris-2)] [--gradient-to:var(--iris-1)] [--shadow-accent-color:var(--iris-a3)] [--shadow-base-color:var(--iris-a2)]"
                >
                  <p className="~text-base/xl font-bold">{post.title}</p>
                  <p className="~text-sm/base mt-0 shrink-0 text-muted">
                    {formatter.date(new Date(post.time.created))}
                  </p>
                </NextViewTransition>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
