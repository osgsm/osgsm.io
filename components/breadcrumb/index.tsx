"use client";

import { cn } from "@/lib/cn";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React from "react";

export const Breadcrumb = ({ postTitle }: { postTitle?: string }) => {
  const pathname = usePathname();

  const paths = pathname
    .split("/")
    .filter((path) => path !== "")
    .map((path) =>
      path.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
    );

  return (
    <div className="relative">
      <div
        className={cn(
          "hide-scrollbar mt-0 mb-4 flex w-full items-center gap-1 overflow-x-auto whitespace-nowrap px-4 align-middle font-normal text-small *:shrink-0 md:px-6",
        )}
      >
        <Link className="text-muted no-underline" href="/">
          Home
        </Link>
        <ChevronRightIcon className="text-muted" />
        {paths.map((path, index) => {
          const href = `/${paths
            .slice(0, index + 1)
            .join("/")
            .toLowerCase()}`;

          const isLast = index === paths.length - 1;

          return (
            <React.Fragment key={path}>
              {isLast ? (
                <span className="text-muted">{postTitle || path}</span>
              ) : (
                <Link className="text-muted no-underline" href={href}>
                  {path}
                </Link>
              )}
              {index < paths.length - 1 && (
                <ChevronRightIcon className="text-muted" />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-background md:w-6" />
      <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-background md:w-6" />
    </div>
  );
};
