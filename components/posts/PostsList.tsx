"use client";

import { LoadMoreButton } from "@/components/load-more-button";
import { formatter } from "@/lib/formatter";
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
  numberOfPosts?: number;
  category: string;
  initialVisibleCount?: number;
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
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.99 }}
            key={post.slug}
          >
            <NextViewTransition
              href={`/${category}/${post.slug}`}
              className="gradient-card relative flex w-full flex-col justify-between gap-2 border border-[--border-color] py-5 pr-16 pl-6 leading-normal no-underline [--border-color:var(--iris-4)] [--gradient-from:var(--iris-2)] [--gradient-to:var(--iris-1)] [--shadow-accent-color:var(--iris-a3)] [--shadow-base-color:var(--iris-a2)] hover:opacity-100 dark:border-0"
            >
              <p className="~text-base/lg font-semibold">{post.title}</p>
              <p className="~text-sm/base mt-0 shrink-0 text-muted">
                {formatter.date(new Date(post.time.created))}
              </p>
              <div className="absolute right-4 bottom-4 grid size-8 place-items-center rounded-full">
                <ArrowRightIcon className="size-4 text-muted" />
              </div>
            </NextViewTransition>
          </motion.div>
        );
      })}

      {hasMoreItems && (
        <div className="mt-8 flex justify-center">
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </>
  );
};
