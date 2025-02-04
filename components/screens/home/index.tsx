import { Notes } from "@/components/notes";
import { Posts } from "@/components/posts";
import { cn } from "@/lib/cn";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BookText, FilePenLine, UserRound } from "lucide-react";
import * as motion from "motion/react-client";
import { Link } from "next-view-transitions";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function Home() {
  const variants = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
  };
  const fadeInVariants = {
    initial: { opacity: 0, y: 4 },
    whileInView: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }}
      >
        <div className="lg:-mt-28 ~/lg:~py-12/40 ~/lg:~pb-16/40 grid items-center gap-20 overflow-x-hidden md:grid-cols-2 md:gap-6 lg:h-[100vh] lg:max-h-[75rem] lg:min-h-[50rem] lg:py-0 xl:overflow-x-visible">
          <div className="~pl-5/8 ~pr-5/0 grid gap-4 md:pb-10">
            <motion.div
              className="-ml-0.5 ~text-xs/sm mb-1 flex w-fit items-center gap-2 rounded-lg border border-[--cyan-3] bg-[--cyan-2] px-2 py-1 text-[--cyan-10] lg:mb-0"
              variants={fadeInVariants}
            >
              <span className="grid *:col-span-full *:row-span-full *:inline-block *:size-1.5 *:rounded-full">
                <span className="size-[0.8125rem] animate-ping-slow bg-[--cyan-6]" />
                <span className="z-10 size-1.5 bg-[--cyan-8]" />
              </span>
              Work at KITERETZ inc.
            </motion.div>
            <motion.div
              className="lg:-translate-x-0.5 lg:~lg:~text-[4rem]/[5.5rem] font-semibold text-5xl leading-[1.1] tracking-[-0.08em] *:m-0"
              variants={fadeInVariants}
            >
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
            </motion.div>
            <motion.div
              className="~text-[0.9375rem]/2xl font-semibold text-iris-12 leading-normal *:m-0 md:~md:pr-6/12"
              variants={fadeInVariants}
            >
              <p>フロントエンドデベロッパーです。</p>
              <p>近頃は 3D とか WebGL に惹かれてます。</p>
            </motion.div>
            <motion.div
              className="*:~text-xl/2xl flex items-center gap-3 px-px text-mauve-10"
              variants={fadeInVariants}
            >
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
                  className="transition-all hover:opacity-100 hover:brightness-[130%]"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="md:~md/xl:~-ml-0/32 xl:~xl:~-ml-32/8 mx-auto grid max-w-xl grid-cols-3 justify-items-center gap-6 md:pb-10 lg:max-w-none"
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.3, staggerChildren: 0.3 }}
          >
            {[
              {
                label: "Blog",
                href: "/blog",
                icon: <BookText />,
                className: cn(
                  "rotate-[-5deg] z-20 -translate-y-8 lg:-translate-y-14",
                  "[--icon-border-color:var(--iris-6)] [--icon-color:var(--iris-9)]",
                  "[--label-color:var(--iris-12)] [--border-color:var(--iris-4)]",
                  "dark:[--gradient-from:var(--iris-3)] dark:[--gradient-to:var(--iris-2)]",
                ),
              },
              {
                label: "Short Notes",
                href: "/notes",
                icon: <FilePenLine />,
                className: cn(
                  "rotate-[10deg] z-10 translate-y-10 lg:translate-y-14",
                  "[--gradient-from:var(--purple-2)] [--gradient-to:var(--purple-3)]",
                  "[--shadow-base-color:var(--purple-a2)] [--shadow-accent-color:var(--purple-a3)]",
                  "[--icon-border-color:var(--purple-6)] [--icon-color:var(--purple-9)]",
                  "[--label-color:var(--purple-12)] [--border-color:var(--purple-4)]",
                  "dark:[--gradient-from:var(--purple-3)] dark:[--gradient-to:var(--purple-2)]",
                ),
              },
              {
                label: "About Me",
                href: "/about",
                icon: <UserRound />,
                className: cn(
                  "rotate-[6deg] translate-y-4",
                  "[--gradient-from:var(--pink-2)] [--gradient-to:var(--pink-3)]",
                  "[--shadow-base-color:var(--pink-2)] [--shadow-accent-color:var(--pink-a3)]",
                  "[--icon-border-color:var(--pink-6)] [--icon-color:var(--pink-9)]",
                  "[--label-color:var(--pink-12)] [--border-color:var(--pink-4)]",
                  "dark:[--gradient-from:var(--pink-3)] dark:[--gradient-to:var(--pink-2)]",
                ),
              },
            ].map(({ label, href, icon, className }) => (
              <motion.div
                key={label}
                variants={variants}
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
          </motion.div>
        </div>
        <div className="~px-5/8 ~gap-10/20 ~text-sm/base mt-16 grid pb-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Posts category="blog" numberOfPosts={5} />
            <Link
              href="/blog"
              className="ml-auto flex w-fit items-center gap-1 rounded-sm p-1 text-muted"
            >
              <span className="capitalize">Blog の一覧を見る</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Notes category="notes" numberOfPosts={10} />
            <Link
              href="/notes"
              className="ml-auto flex w-fit items-center gap-1 rounded-sm p-1 text-muted"
            >
              <span className="capitalize">Notes の一覧を見る</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
