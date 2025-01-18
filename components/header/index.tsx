import Link from "next/link";

const Header = () => {
  return (
    <header className="w:full sticky top-0 z-50 mx-auto my-6 grid place-items-center p-2">
      <div className="gradient-card flex items-center gap-6 rounded-xl px-4 py-2 backdrop-blur-md [--gradient-from:var(--iris-4)] [--gradient-to:var(--iris-3)] [--shadow-accent-color:var(--iris-a4)] [--shadow-base-color:var(--iris-a2)]">
        <Link className="transition" href="/">
          <div
            className="size-[32px] animate-move-background bg-[length:600%] bg-gradient-to-br from-60% from-[--iris-8] via-60% via-[--iris-9] to-90% to-[--iris-7]"
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
        <div className="flex items-center gap-2">
          {[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Shorts", href: "/shorts" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              className="rounded-lg px-2 py-0.5 transition hover:bg-[--iris-5] hover:text-white-a12"
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
