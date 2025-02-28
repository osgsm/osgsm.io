import { getPosts } from "@/lib/mdx";

import { PostsList } from "./PostsList";

interface PostProps {
  category: string;
  numberOfPosts?: number;
  showMoreButton?: boolean;
}

export const Posts = ({
  category,
  numberOfPosts = 12,
  showMoreButton = true,
}: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return (
      new Date(b.time.created).getTime() - new Date(a.time.created).getTime()
    );
  });

  if (posts.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-4 grid items-start gap-8 pb-8 lg:grid-cols-12">
        <div className="top-14 col-span-full flex justify-between no-underline lg:sticky lg:col-span-4">
          <hgroup className="grid content-start gap-2">
            <h2 className="-ml-[.06em] ~text-5xl/8xl flex items-start gap-2 border-0 text-iris-7 capitalize leading-none tracking-[-0.07em]">
              {category}{" "}
              <span className="~text-xs/base ~pt-3/6 text-iris-6 tracking-normal">
                {`${posts.length}`}
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
          <PostsList
            posts={posts}
            numberOfPosts={numberOfPosts}
            category={category}
            initialVisibleCount={numberOfPosts}
            showMoreButton={showMoreButton}
          />
        </div>
      </div>
    </>
  );
};
