import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { cn } from "@/lib/cn";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BookText, CodeXml, FilePenLine, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <div className="lg:-mt-28 ~/lg:~py-10/40 mx-auto grid max-w-[67rem] items-center gap-20 md:gap-6 lg:h-[100vh] lg:min-h-[50rem] lg:py-0">
        <div className="col-span-full row-span-full grid gap-6">
          <hgroup className="grid gap-3 md:gap-0 md:*:col-span-full md:*:row-span-full">
            <h1 className="-ml-[0.075em] lg:-ml-[0.05em] ~/md:~text-6xl/8xl font-semibold tracking-[-0.07em] *:m-0">
              <span className="block w-[5em] bg-[radial-gradient(circle_at_80%_-80%,_var(--iris-5),_var(--iris-7))] bg-clip-text text-transparent leading-[1.075] sm:w-full sm:leading-tight">
                Shogo{" "}
                <span className="-translate-x-0.5 inline-block">Oshima</span>
              </span>
            </h1>
            <p className="-translate-y-1.5 ~/md:~text-sm/[0.9375rem] m-0 self-end text-mauve-7 leading-none">
              Frontend developer
            </p>
          </hgroup>
          <div className="~text-[0.9375rem]/2xl grid gap-4 font-bold leading-normal [&_p]:m-0">
            <div>
              <p>大島翔吾と申します。</p>
              <p>フロントエンドデベロッパーです。</p>
            </div>
            <div>
              <p>株式会社キテレツで働いています。</p>
              <p>業務では Astro や Next.js、WordPress などを使います。</p>
            </div>
            <div>
              <p>技術だけでなくデザインにも関心があります。</p>
              <p>近頃は 3D とかグラフィック系に惹かれています。</p>
            </div>
          </div>
          <div className="*:~text-xl/2xl flex items-center gap-3 text-mauve-10">
            {[
              {
                label: "Bluesky",
                icon: <FaBluesky />,
                href: "https://bsky.app/profile/osgsm.io",
              },
              {
                label: "Github",
                icon: <FaGithub />,
                href: "https://github.com/osgsm",
              },
              {
                label: "X",
                icon: <FaXTwitter />,
                href: "https://x.com/osgsm_",
              },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="~min-[22.5rem]/sm:~-translate-x-0/16 sm:~sm/md:~translate-y-2/40 col-span-full row-span-full grid size-[min(32vw,22.5rem)] translate-y-2 place-items-center self-start justify-self-end sm:translate-x-0 lg:translate-y-20 lg:self-center">
          <Image
            src="/assets/images/profile.png"
            alt=""
            width={360}
            height={360}
            className="animate-spin-slow rounded-full border border-iris-4"
          />
        </div>
      </div>
      <div className="~gap-10/20 mt-16 grid pb-20 md:mt-0">
        <h2 className="-ml-[.06em] ~text-5xl/8xl border-0 text-iris-7 capitalize leading-none tracking-[-0.07em]">
          Timeline
        </h2>
        <div className="grid gap-4">
          <h3 className="~text-lg/xl w-fit rounded-lg bg-iris-3 px-2 py-1 font-bold text-iris-10">
            2025
          </h3>
          <div className="relative flex gap-3 before:absolute before:top-0 before:left-4 before:block before:h-full before:w-px before:translate-x-[-0.5px] before:bg-iris-3">
            <div className="z-10 grid size-8 place-items-center rounded-full border border-iris-4 bg-iris-1 shadow-[0_0_0_3px_var(--iris-1)]">
              <CodeXml className="size-4 text-muted" />
            </div>
            <div className="grid gap-4">
              <hgroup className="mt-1.5 flex items-center gap-4 *:m-0 [&_p]:text-muted [&_p]:text-sm">
                <h4>このサイトをリニューアル</h4>
                <p>Jan 25</p>
              </hgroup>
              <div className="gradient-card border border-[--border-color] p-5 py-5 pr-16 pl-6 leading-normal no-underline [--border-color:var(--iris-4)] [--gradient-from:var(--iris-2)] [--gradient-to:var(--iris-1)] [--shadow-accent-color:var(--iris-a3)] [--shadow-base-color:var(--iris-a2)] dark:border-0">
                <p className="~text-sm/base mt-0 shrink-0 text-muted">
                  Jan 22, 2025
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex gap-3 before:absolute before:top-0 before:left-4 before:block before:h-full before:w-px before:translate-x-[-0.5px] before:bg-iris-3">
            <div className="z-10 grid size-8 place-items-center rounded-full border border-iris-4 bg-iris-1 shadow-[0_0_0_3px_var(--iris-1)]">
              <CodeXml className="size-4 text-muted" />
            </div>
            <div className="grid gap-4">
              <hgroup className="mt-1.5 flex items-center gap-4 *:m-0 [&_p]:text-muted [&_p]:text-sm">
                <h4>このサイトをリニューアル</h4>
                <p>Jan 25</p>
              </hgroup>
              <div className="gradient-card border border-[--border-color] p-5 py-5 pr-16 pl-6 leading-normal no-underline [--border-color:var(--iris-4)] [--gradient-from:var(--iris-2)] [--gradient-to:var(--iris-1)] [--shadow-accent-color:var(--iris-a3)] [--shadow-base-color:var(--iris-a2)] dark:border-0">
                <p className="~text-sm/base mt-0 shrink-0 text-muted">
                  Jan 22, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn.Container>
  );
}
