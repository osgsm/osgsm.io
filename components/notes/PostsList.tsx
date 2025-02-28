"use client";

import { LoadMoreButton } from "@/components/load-more-button";
import { useVisibleItems } from "@/lib/hooks/useVisibleItems";

import { ArrowRightIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { Link as NextViewTransition } from "next-view-transitions";

interface Post {
  slug: string;
  title: string;
  time: {
    created: string;
    updated?: string;
  };
}

interface PostsListProps {
  posts: Post[];
  category: string;
  numberOfPosts?: number;
  initialVisibleCount?: number;
  /**
   * 「もっと見る」ボタンを表示するかどうか
   * @default true
   */
  showMoreButton?: boolean;
}

export const PostsList = ({
  posts,
  numberOfPosts,
  category,
  initialVisibleCount = 12,
  showMoreButton = true,
}: PostsListProps) => {
  const { visibleItems, hasMoreItems, handleLoadMore } = useVisibleItems({
    totalItems: posts.length,
    initialCount: initialVisibleCount,
    category,
    showMoreButton,
  });

  return (
    <>
      {posts.slice(0, numberOfPosts || visibleItems).map((post) => {
        return (
          <motion.div
            whileHover={{ filter: "brightness(1.25)" }}
            key={post.slug}
          >
            <NextViewTransition
              href={`/${category}/${post.slug}`}
              className="trainsition-all relative flex w-full items-center justify-between gap-3 border-iris-4 border-b py-4 leading-normal no-underline hover:border-iris-8 hover:opacity-100 dark:hover:border-iris-5"
            >
              <p className="~text-base/lg text-foreground">{post.title}</p>
              <div className="grid size-8 shrink-0 place-items-center rounded-full border border-iris-4">
                <ArrowRightIcon className="size-4 text-muted" />
              </div>
            </NextViewTransition>
          </motion.div>
        );
      })}

      {hasMoreItems && showMoreButton && (
        <div className="mt-6 flex justify-center">
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </>
  );
};
