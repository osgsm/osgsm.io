"use client";

import type { Post } from "@/types/post";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/cn";

import { Command } from "cmdk";
import {
  ArrowRight,
  BookText,
  FilePenLine,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";

interface CommandItemProps extends React.ComponentProps<typeof Command.Item> {
  label: string;
  icon:
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >
    | IconType;
}

const CommandItem = ({
  className,
  label,
  icon: Icon,
  ...props
}: CommandItemProps) => {
  return (
    <Command.Item
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-md p-2",
        "hover:bg-iris-3 hover:text-iris-11",
        "aria-selected:bg-iris-3 aria-selected:text-iris-11",
        className,
      )}
      {...props}
    >
      {Icon && <Icon size={16} className="flex-shrink-0 text-iris-8" />}
      {label}
    </Command.Item>
  );
};

const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Command.Separator>) => {
  return (
    <Command.Separator
      className={cn("mx-2 mt-2 border-border border-t py-1", className)}
      {...props}
    />
  );
};

export const CommandMenu = ({
  blogPosts,
  notesPosts,
}: {
  blogPosts: Post[];
  notesPosts: Post[];
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const resetSearch = () => {
    setSearch("");
    setOpen(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-1 rounded-md border border-iris-4 bg-iris-2 p-1.5 text-iris-11 text-xs transition-colors duration-200 hover:bg-iris-3 hover:text-iris-12 md:pr-2 md:pl-1.5 dark:border-iris-5 dark:bg-iris-3 dark:hover:bg-iris-4"
        onClick={() => setOpen(true)}
      >
        <Search size={14} />
        <span className="sr-only">Search</span>
        <span className="hidden translate-y-[0.5px] md:block" aria-hidden>
          ⌘K
        </span>
      </button>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="コマンドパレットメニュー"
        loop
        contentClassName="fixed inset-0 z-50 p-8 md:p-[10vh] pointer-events-none backdrop-blur-md backdrop-brightness-50"
        className={cn(
          "pointer-events-auto relative mx-auto w-full max-w-[50rem] rounded-xl border border-iris-4 bg-iris-1 leading-snug",
          "[&_[cmdk-group-heading]]:my-1.5 [&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-iris-8 dark:[&_[cmdk-group-heading]]:text-muted",
        )}
      >
        <div className="relative border-iris-4 border-b px-5 py-4">
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search or type a command..."
            className="w-full bg-transparent pr-10 text-[16px] outline-none placeholder:text-iris-8 placeholder:tracking-tight dark:placeholder:text-muted"
          />
          <button
            type="button"
            className="-translate-y-1/2 absolute top-1/2 right-3 rounded-md border border-iris-4 bg-iris-2 p-1.5 text-iris-11 text-sm leading-none transition-colors duration-200 hover:bg-iris-3 hover:text-iris-12 dark:border-iris-5 dark:bg-iris-3 dark:hover:bg-iris-4"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close</span>
            <span className="hidden md:inline" aria-hidden>
              esc
            </span>
            <X size={16} className="md:hidden" aria-hidden />
          </button>
          <div className="-bottom-5 absolute left-0 h-5 w-full translate-y-px bg-gradient-to-b from-25% from-iris-2 dark:from-iris-1" />
        </div>
        <Command.List className="max-h-[calc(100svh-4rem-47px)] scroll-pt-4 overflow-y-auto p-3 md:max-h-[calc(100svh-20vh-47px)]">
          <Command.Empty className="p-2 text-iris-10">
            No results found.
          </Command.Empty>
          <Command.Group heading="Blog">
            {blogPosts
              .slice(0, search ? undefined : 3)
              .map(({ slug, title, tags }) => (
                <CommandItem
                  key={slug}
                  label={title}
                  keywords={tags}
                  icon={BookText}
                  onSelect={() => {
                    router.push(`/blog/${slug}`);
                    resetSearch();
                  }}
                />
              ))}
          </Command.Group>
          <CommandSeparator />
          <Command.Group heading="Notes">
            {notesPosts
              .slice(0, search ? undefined : 3)
              .map(({ slug, title, tags }) => (
                <CommandItem
                  key={slug}
                  label={title}
                  keywords={tags}
                  icon={FilePenLine}
                  onSelect={() => {
                    router.push(`/notes/${slug}`);
                    resetSearch();
                  }}
                />
              ))}
          </Command.Group>
          <CommandSeparator />
          <Command.Group heading="Navigation">
            {[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Notes", href: "/notes" },
              { label: "About", href: "/about" },
            ].map(({ label, href }) => (
              <CommandItem
                key={href}
                label={label}
                keywords={["navigation"]}
                icon={ArrowRight}
                onSelect={() => {
                  router.push(href);
                  resetSearch();
                }}
              />
            ))}
          </Command.Group>
          <CommandSeparator />
          <Command.Group heading="Links">
            {[
              {
                label: "Bluesky",
                href: "https://bsky.app/profile/osgsm.io",
                icon: FaBluesky,
              },
              {
                label: "GitHub",
                href: "https://github.com/osgsm",
                icon: FaGithub,
              },
              {
                label: "X (Twitter)",
                href: "https://x.com/osgsm_",
                icon: FaXTwitter,
              },
            ].map(({ label, href, icon: Icon }) => (
              <CommandItem
                key={href}
                label={label}
                keywords={["links"]}
                icon={Icon}
                onSelect={() => {
                  window.open(href, "_blank");
                  resetSearch();
                }}
              />
            ))}
          </Command.Group>
          <CommandSeparator />
          <Command.Group heading="Command">
            <CommandItem
              label="Toggle theme"
              keywords={[theme === "light" ? "dark mode" : "light mode"]}
              icon={theme === "light" ? Moon : Sun}
              onSelect={() => {
                setTheme(theme === "light" ? "dark" : "light");
                resetSearch();
              }}
            />
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};
