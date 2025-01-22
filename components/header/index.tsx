import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid w-full place-items-center bg-gradient-to-b from-5% from-[--iris-1] to-50% px-4 py-3 lg:my-6">
      <div className="gradient-card flex w-full items-center justify-between gap-4 rounded-xl border border-iris-4 px-4 py-2 backdrop-blur-md [--gradient-from:var(--iris-a4)] [--gradient-to:var(--iris-a3)] [--shadow-accent-color:var(--iris-a4)] [--shadow-base-color:var(--iris-a2)] sm:w-fit dark:border-0 dark:backdrop-brightness-[0.2]">
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
              className="rounded-lg ~text-sm/base px-2 py-0.5 transition hover:bg-[--iris-4] hover:text-white hover:opacity-100"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export { Header };
