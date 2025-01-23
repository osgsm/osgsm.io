import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { cn } from "@/lib/cn";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BookText, FilePenLine, UserRound } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <div className="lg:-mt-28 ~/lg:~py-10/40 grid items-center gap-20 overflow-x-hidden md:grid-cols-2 md:gap-6 lg:h-[100vh] lg:min-h-[50rem] lg:py-0 xl:overflow-x-visible">
        <div className="~px-5/8 grid gap-4">
          <div className="mb-1 flex w-fit items-center gap-2 rounded-lg border border-[--cyan-3] bg-[--cyan-2] px-2 py-1 text-[--cyan-10] text-sm lg:mb-0">
            <span className="grid *:col-span-full *:row-span-full *:inline-block *:size-1.5 *:rounded-full">
              <span className="size-3 animate-ping-slow bg-[--cyan-6]" />
              <span className="z-10 size-1.5 bg-[--cyan-8]" />
            </span>
            Work at KITERETZ inc.
          </div>
          <div className="lg:-translate-x-0.5 lg:~lg:~text-[4rem]/[5.5rem] font-bold text-5xl leading-[1.1] tracking-[-0.08em] *:m-0">
            <p>
              <span className="-ml-1 lg:-ml-2 bg-[radial-gradient(circle_at_60%_-30%,_var(--iris-11),_var(--iris-12))] bg-clip-text text-transparent">
                こんにちは
              </span>
              <span className="~px-1/4 inline-block origin-[80%_80%] animate-wave delay-1000">
                👋🏼
              </span>
            </p>
            <p>
              <span className="bg-[radial-gradient(circle_at_30%_-110%,_var(--iris-11),_var(--iris-12))] bg-clip-text text-transparent">
                大島翔吾です。
              </span>
            </p>
          </div>
          <div className="~text-[0.9375rem]/2xl font-bold text-iris-8 leading-normal *:m-0">
            <p>フロントエンドデベロッパーです。</p>
            <p>近頃は 3D とかグラフィック系に興味ありです。</p>
          </div>
          <div className="*:~text-xl/2xl flex items-center gap-3 px-px text-mauve-9">
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
        <div className="md:~md/xl:~-ml-0/32 xl:~xl:~-ml-32/8 mx-auto grid max-w-xl grid-cols-3 justify-items-center gap-6 lg:max-w-none">
          {[
            {
              label: "Blog",
              href: "/blog",
              icon: <BookText />,
              className:
                "rotate-[-5deg] z-20 -translate-y-8 lg:-translate-y-14 [--icon-border-color:var(--iris-6)] [--icon-color:var(--iris-9)] [--label-color:var(--iris-12)] [--border-color:var(--iris-4)]",
            },
            {
              label: "Short Notes",
              href: "/notes",
              icon: <FilePenLine />,
              className:
                "rotate-[10deg] z-10 translate-y-10 lg:translate-y-14 [--gradient-from:var(--purple-a4)] [--gradient-to:var(--purple-a3)] [--shadow-base-color:var(--purple-a2)] [--shadow-accent-color:var(--purple-a3)] [--icon-border-color:var(--purple-6)] [--icon-color:var(--purple-9)] [--label-color:var(--purple-12)] [--border-color:var(--purple-4)]",
            },
            {
              label: "About Me",
              href: "/about",
              icon: <UserRound />,
              className:
                "rotate-[6deg] translate-y-4 [--gradient-from:var(--pink-a4)] [--gradient-to:var(--pink-a3)] [--shadow-base-color:var(--pink-a2)] [--shadow-accent-color:var(--pink-a3)] [--icon-border-color:var(--pink-6)] [--icon-color:var(--pink-9)] [--label-color:var(--pink-12)] [--border-color:var(--pink-4)]",
            },
          ].map(({ label, href, icon, className }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link
                className={cn(
                  "gradient-card lg:~lg:~size-56/64 md:~md/lg:~size-40/56 ~min-[22.5rem]/md:~size-36/64 grid aspect-square place-items-center border border-[--border-color] p-6 backdrop-blur-lg transition-all hover:opacity-100 hover:brightness-[101%] dark:border-0 dark:backdrop-brightness-[0.2] dark:hover:brightness-105",
                  className,
                )}
                href={href}
              >
                <div className="grid place-items-center gap-1">
                  <div className="w-fit rounded-lg border border-[--icon-border-color] p-2 text-[--icon-color]">
                    {icon}
                  </div>
                  <div className="~text-sm/base text-center text-[--label-color]">
                    {label}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="~px-5/8 ~gap-10/20 ~text-sm/base mt-16 grid pb-8 md:mt-0">
        <div>
          <Posts category="blog" numberOfPosts={5} />
          <Link
            href="/blog"
            className="ml-auto flex w-fit items-center gap-1 rounded-sm p-1 text-muted"
          >
            <span className="capitalize">Blog の一覧を見る</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <Posts category="notes" numberOfPosts={5} />
          <Link
            href="/notes"
            className="ml-auto flex w-fit items-center gap-1 rounded-sm p-1 text-muted"
          >
            <span className="capitalize">Notes の一覧を見る</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </FadeIn.Container>
  );
}
