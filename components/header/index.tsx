import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between p-4 md:p-6">
      <Link className="transition" href="/">
        <div
          className="h-[20px] w-[70px] animate-move-background bg-[length:600%] bg-gradient-to-r from-60% from-[--iris-10] via-70% via-[--plum-10] to-80% to-[--iris-11]"
          style={{
            maskImage: "url(/assets/images/logo-horizontal.svg)",
            WebkitMaskImage: "url(/assets/images/logo-horizontal.svg)",
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
    </header>
  );
};

export { Header };
