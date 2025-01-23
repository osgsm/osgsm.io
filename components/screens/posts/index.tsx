import type { Post } from "@/types";

import { Breadcrumb } from "@/components/breadcrumb";
import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React from "react";

interface Props {
  post: Post;
  route: string;
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);

  const Seperator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <div>Published {formatter.date(new Date(post.time.created))}</div>;
  };
  const UpdateTime = () => {
    return <div>Updated {formatter.date(new Date(post.time.updated))}</div>;
  };

  return (
    <React.Fragment>
      <Breadcrumb postTitle={post.title} />
      <div>
        <div className="flex flex-col">
          <div>
            <h1>{post.title}</h1>
          </div>
          <div className="mt-1 flex gap-2 text-muted text-small">
            <PublishedTime />
            <Seperator />
            <UpdateTime />
          </div>
        </div>

        <MDX source={post.content} />
        <PostNavigation posts={posts} />
      </div>
      <TableOfContents />
    </React.Fragment>
  );
};
