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
        "hover:bg-iris-4 hover:text-iris-11",
        "aria-selected:bg-iris-4 aria-selected:text-iris-11",
        className,
      )}
      {...props}
    >
      {Icon && <Icon size={16} className="flex-shrink-0 text-muted" />}
      {label}
    </Command.Item>
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
        className="flex items-center gap-1 rounded-md bg-iris-5 py-1 pr-2 pl-1.5 text-iris-11 text-sm"
        onClick={() => setOpen(true)}
      >
        <Search size={16} />
        ⌘K
      </button>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="コマンドパレットメニュー"
        loop
        contentClassName="fixed inset-0 z-50 p-8 md:p-[10vh] pointer-events-none backdrop-blur-md backdrop-brightness-50"
        className={cn(
          "pointer-events-auto relative mx-auto w-full max-w-[50rem] rounded-xl border border-iris-4 bg-iris-2 leading-snug",
          "[&_[cmdk-group-heading]]:mt-2 [&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-muted",
        )}
      >
        <div className="relative border-iris-4 border-b px-4 py-3">
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Type a command or search..."
            className="bg-transparent outline-none placeholder:text-muted"
          />
          <button
            type="button"
            className="-translate-y-1/2 absolute top-1/2 right-3 rounded-md border border-iris-6 bg-iris-3 px-1 py-1 font-mono text-iris-10 text-sm leading-none"
            onClick={() => setOpen(false)}
          >
            esc
          </button>
        </div>
        <Command.List className="max-h-[calc(100vh-4rem-47px)] overflow-y-auto p-2 md:max-h-[calc(100vh-20vh-47px)]">
          <Command.Empty className="p-2 text-iris-10">
            No results found.
          </Command.Empty>
          <Command.Group heading="Blog">
            {blogPosts
              .slice(0, search ? undefined : 3)
              .map(({ slug, title }) => (
                <CommandItem
                  key={slug}
                  label={title}
                  icon={BookText}
                  onSelect={() => {
                    setSearch("");
                    setOpen(false);
                    router.push(`/blog/${slug}`);
                  }}
                />
              ))}
          </Command.Group>
          <Command.Separator className="mt-2 border-border border-t py-1" />
          <Command.Group heading="Notes">
            {notesPosts
              .slice(0, search ? undefined : 3)
              .map(({ slug, title }) => (
                <CommandItem
                  key={slug}
                  label={title}
                  icon={FilePenLine}
                  onSelect={() => {
                    resetSearch();
                    router.push(`/notes/${slug}`);
                  }}
                />
              ))}
          </Command.Group>
          <Command.Separator className="mt-2 border-border border-t py-1" />
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
                icon={ArrowRight}
                onSelect={() => {
                  resetSearch();
                  router.push(href);
                }}
              />
            ))}
          </Command.Group>
          <Command.Separator className="mt-2 border-border border-t py-1" />
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
                icon={Icon}
                onSelect={() => {
                  resetSearch();
                  window.open(href, "_blank");
                }}
              />
            ))}
          </Command.Group>
          <Command.Separator className="mt-2 border-border border-t py-1" />
          <Command.Group heading="Command">
            <CommandItem
              label={`Toggle theme (change to ${theme === "light" ? "dark" : "light"} mode)`}
              icon={theme === "light" ? Moon : Sun}
              onSelect={() => {
                resetSearch();
                setTheme(theme === "light" ? "dark" : "light");
              }}
            />
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};
