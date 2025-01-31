import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import * as motion from "motion/react-client";
import { Link as NextViewTransition } from "next-view-transitions";

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
      <div className="mt-4 grid items-start gap-8 pb-8 lg:grid-cols-12">
        <div className="top-14 col-span-full flex justify-between no-underline lg:sticky lg:col-span-4">
          <hgroup className="grid content-start gap-2">
            <h2 className="-ml-[.06em] ~text-5xl/8xl border-0 text-iris-7 capitalize leading-none tracking-[-0.07em]">
              {category}{" "}
              <span className="text-iris-5 text-sm tracking-normal">
                {!numberOfPosts && posts.length > 0 && `(${posts.length})`}
              </span>
            </h2>
            <p className="~text-sm/base m-0 font-semibold text-iris-7">
              {category === "blog"
                ? "試したことや学んだこと"
                : "ブログに満たないもの"}
            </p>
          </hgroup>
        </div>
        <div className="~gap-5/8 col-span-full grid lg:col-span-8">
          {posts.slice(0, numberOfPosts).map((post) => {
            return (
              <motion.div
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                key={post.slug}
              >
                <NextViewTransition
                  href={`/${category}/${post.slug}`}
                  className="gradient-card relative flex w-full flex-col justify-between gap-2 border border-[--border-color] py-5 pr-16 pl-6 leading-normal no-underline [--border-color:var(--iris-4)] [--gradient-from:var(--iris-2)] [--gradient-to:var(--iris-1)] [--shadow-accent-color:var(--iris-a3)] [--shadow-base-color:var(--iris-a2)] hover:opacity-100 dark:border-0"
                >
                  <p className="~text-base/xl font-semibold">{post.title}</p>
                  <p className="~text-sm/base mt-0 shrink-0 text-muted">
                    {formatter.date(new Date(post.time.created))}
                  </p>
                  <div className="absolute right-4 bottom-4 grid size-8 place-items-center rounded-full border border-iris-4">
                    <ArrowRightIcon className="text-muted" />
                  </div>
                </NextViewTransition>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};
