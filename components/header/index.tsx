import { CommandMenu } from "@/components/cmdk";
import { cn } from "@/lib/cn";
import { getPosts } from "@/lib/mdx";

import { Link } from "next-view-transitions";

const Header = () => {
  const [blogPosts, notesPosts] = ["blog", "notes"].map((category) => {
    return getPosts(category).sort((a, b) => {
      return (
        new Date(b.time.created).getTime() - new Date(a.time.created).getTime()
      );
    });
  });

  return (
    <header className="sticky top-0 z-40 grid w-full place-items-center px-4 py-3 lg:my-6">
      <div
        className={cn(
          "gradient-card flex w-full items-center justify-between gap-2 rounded-xl border border-iris-4 px-3 py-3 backdrop-blur-md md:gap-4 md:px-4",
          "sm:w-fit",
          "[--gradient-from:var(--white-a11)] [--gradient-to:var(--white-a9)] [--shadow-accent-color:var(--white-a12)] [--shadow-base-color:var(--iris-a5)]",
          "dark:border-0 dark:backdrop-brightness-[0.2] dark:[--gradient-from:var(--iris-a4)] dark:[--gradient-to:var(--iris-a3)] dark:[--shadow-accent-color:var(--iris-a4)] dark:[--shadow-base-color:var(--iris-a2)]",
        )}
      >
        <Link className="transition" href="/">
          <div
            className="size-7 animate-move-background bg-[length:600%] bg-gradient-to-br from-50% from-[--iris-8] via-[--iris-9] to-90% to-[--iris-10]"
            style={{
              maskImage: "url(/assets/images/logo.svg)",
              WebkitMaskImage: "url(/assets/images/logo.svg)",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
          <div className="sr-only">osgsm.io</div>
        </Link>
        <div className="flex items-center">
          {[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Notes", href: "/notes" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              className="~text-sm/base rounded-md px-1.5 py-0.5 transition hover:bg-[--iris-4] hover:text-white hover:opacity-100 md:px-2"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
        <CommandMenu blogPosts={blogPosts} notesPosts={notesPosts} />
      </div>
      <div className="-z-10 -top-6 pointer-events-none absolute inset-x-0 bottom-0 from-0% from-[--iris-1] to-50% dark:bg-gradient-to-b" />
    </header>
  );
};

export { Header };
