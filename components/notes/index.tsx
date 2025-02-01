import { getPosts } from "@/lib/mdx";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import * as motion from "motion/react-client";
import { Link as NextViewTransition } from "next-view-transitions";

interface PostProps {
  category: string;
  numberOfPosts?: number;
}

export const Notes = ({ category, numberOfPosts }: PostProps) => {
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
            <h2 className="-ml-[.03em] ~text-5xl/8xl border-0 text-iris-7 capitalize leading-none tracking-[-0.07em]">
              {category}{" "}
              <span className="text-iris-6 text-sm tracking-normal">
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
        <div className="col-span-full grid lg:col-span-8">
          {posts.slice(0, numberOfPosts).map((post) => {
            return (
              <motion.div
                whileHover={{ filter: "brightness(1.25)" }}
                key={post.slug}
              >
                <NextViewTransition
                  href={`/${category}/${post.slug}`}
                  className="relative flex w-full items-center justify-between gap-3 border-iris-4 border-b py-4 leading-normal no-underline hover:border-iris-5 hover:opacity-100"
                >
                  <p className="~text-base/lg text-foreground">{post.title}</p>
                  <div className="grid size-8 shrink-0 place-items-center rounded-full border border-iris-4">
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
