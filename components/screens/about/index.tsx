import type React from "react";

import Link from "@/components/link";
import { Tweet } from "@/components/tweet";
import { cn } from "@/lib/cn";
import { getPosts } from "@/lib/mdx";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  AppWindowIcon,
  BabyIcon,
  BriefcaseBusinessIcon,
  CalendarRangeIcon,
  CameraIcon,
  CirclePauseIcon,
  CodeXmlIcon,
  DiamondIcon,
  GraduationCapIcon,
  HandshakeIcon,
  KeyboardIcon,
  PackageIcon,
  PaintbrushIcon,
  PianoIcon,
  RocketIcon,
  SquarePenIcon,
  StarIcon,
  UniversityIcon,
  UserRoundXIcon,
} from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function About() {
  const variants = {
    initial: { opacity: 0, y: 4 },
    whileInView: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div
        className="~px-5/8 lg:-mt-28 ~/lg:~py-12/40 ~/lg:~pb-16/40 mx-auto grid max-w-[67rem] items-center gap-20 md:gap-6 lg:h-[100vh] lg:max-h-[75rem] lg:min-h-[50rem] lg:py-0"
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          staggerChildren: 0.1,
        }}
      >
        <div className="col-span-full row-span-full grid gap-6">
          <div className="grid gap-1">
            <motion.hgroup
              className="grid gap-3 md:gap-0 md:*:col-span-full md:*:row-span-full"
              variants={variants}
            >
              <h1 className="-ml-[0.075em] lg:-ml-[0.05em] ~/md:~text-6xl/8xl font-semibold tracking-[-0.07em] *:m-0">
                <span className="block w-[5em] bg-[radial-gradient(circle_at_80%_-80%,_var(--iris-5),_var(--iris-7))] bg-clip-text text-transparent leading-[1.075] sm:w-full sm:leading-tight">
                  Shogo <span className="-ml-0.5 inline-block">Oshima</span>
                </span>
              </h1>
              <p className="-translate-y-1.5 ~/md:~text-sm/[0.9375rem] m-0 self-end text-mauve-9 leading-none">
                Frontend developer
              </p>
            </motion.hgroup>
          </div>
          <div className="~text-[0.9375rem]/xl grid gap-4 font-semibold leading-normal [&_p]:m-0">
            <motion.div variants={variants}>
              <p>大島翔吾と申します。</p>
              <p>フロントエンドデベロッパーです。</p>
            </motion.div>
            <motion.div variants={variants}>
              <p>HTML / CSS / TypeScript が主軸。</p>
              <p>フレームワークは Astro や Next.js、</p>
              <p>CMS は WordPress をよく使います。</p>
            </motion.div>
            <motion.div variants={variants}>
              <p>技術だけでなくデザインにも関心あり。</p>
              <p>近頃は 3D とか WebGL に惹かれてます。</p>
            </motion.div>
            <motion.div variants={variants}>
              <p>
                お問い合わせは <Link href="https://x.com/osgsm_">Twitter</Link>{" "}
                からどうぞ。
              </p>
            </motion.div>
          </div>
          <motion.div
            className="*:~text-xl/2xl flex items-center gap-3 text-mauve-10"
            variants={variants}
          >
            {[
              {
                label: "X",
                icon: <FaXTwitter />,
                href: "https://x.com/osgsm_",
              },
              {
                label: "Github",
                icon: <FaGithub />,
                href: "https://github.com/osgsm",
              },
              {
                label: "Bluesky",
                icon: <FaBluesky />,
                href: "https://bsky.app/profile/osgsm.io",
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
          </motion.div>
        </div>
        <motion.div
          className="~xs/sm:~-translate-x-0/16 sm:~sm/md:~translate-y-40/48 sm:~sm/lg:~-translate-x-10/32 lg:~/xl:~-translate-x-32/0 col-span-full row-span-full size-[min(32vw,22.5rem)] translate-y-2 place-items-center self-start justify-self-end lg:translate-y-20 lg:self-center min-[22.5rem]:visible"
          variants={variants}
        >
          <motion.div
            whileTap={{
              rotate: 720,
              scale: 1.2,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <Image
              src="/assets/images/profile.png"
              alt=""
              width={360}
              height={360}
              className="pointer-events-none rounded-full border border-iris-4"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="~px-5/8 ~gap-8/10 relative mx-auto mt-16 grid max-w-[67rem] items-start pb-20 md:mt-0 md:grid-cols-[auto_1fr]"
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <h2 className="-ml-[.15em] ~/md:~text-5xl/8xl md:-ms-1.5 border-0 pt-0 text-iris-7 capitalize leading-none tracking-[-0.07em] md:sticky md:top-4 md:text-9xl md:text-iris-4 md:[writing-mode:vertical-rl]">
          Timeline
        </h2>
        <div className="~gap-4/6 grid">
          <TimelineList year="2025">
            <TimelineItem
              date="Oct."
              title="Created 199 commits in 4 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItem
              date="Sep."
              title="Created 226 commits in 12 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItem
              date="Aug."
              title="Created 197 commits in 5 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItem
              date="Jul."
              title="Created 203 commits in 7 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItem
              date="Jun."
              title="Created 177 commits in 8 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItem
              date="May"
              title="Created 127 commits in 7 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItem
              date="Apr."
              title="Created 83 commits in 8 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItemPostList date="Apr." year={2025} month={4} />
            <TimelineItem
              date="Mar."
              title="Created 185 commits in 7 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItemPostList date="Mar." year={2025} month={3} />
            <TimelineItem
              date="Feb."
              title="Created 243 commits in 8 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItemPostList date="Feb." year={2025} month={2} />
            <TimelineItem
              date="Jan."
              title="Created 301 commits in 5 repositories"
              icon={GitHubLogoIcon}
            />
            <TimelineItemPostList date="Jan." year={2025} month={1} />
            <TimelineItem
              date="Jan. 23"
              title="このサイトをリニューアル"
              icon={CodeXmlIcon}
            >
              <p>
                <Link
                  text="Sylph"
                  href="https://next-sylph-portfolio.vercel.app/"
                />{" "}
                というスターターをベースにこのサイトをリニューアル。
              </p>
              <p>
                フレームワークは{" "}
                <Link text="Next.js" href="https://nextjs.org/" />
                、コンテンツは <Link text="MDX" href="https://mdxjs.com/" />、
                スタイリングは{" "}
                <Link text="Tailwind CSS" href="https://tailwindcss.com/" />
                、アニメーションは{" "}
                <Link
                  text="Motion"
                  href="https://www.framer.com/motion/"
                />{" "}
                を使用。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2024">
            <TimelineItem
              title="2,971 contributions"
              icon={GitHubLogoIcon}
              isDetached
            />
            <TimelineItem
              date="Oct. 10"
              title="リニューアルプロジェクトで、ほんの少しだけフロントエンドを担当"
              icon={RocketIcon}
              isTweet
            >
              <Tweet url="https://x.com/ixkaito/status/1844254949418598442" />
            </TimelineItem>
            <TimelineItem
              date="Jul. 4"
              title="WordPress 構築を担当"
              icon={RocketIcon}
              isTweet
            >
              <Tweet url="https://x.com/ixkaito/status/1808792122025521602" />
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2023">
            <TimelineItem
              date="Jun. 1"
              title="憧れの KITERETZ inc. へ"
              icon={HandshakeIcon}
            >
              <p>かねてより思いを馳せていた KITERETZ inc. で働き始める。</p>
              <p>フロントエンドを中心に、 WordPress の構築なども担当。</p>
            </TimelineItem>
            <TimelineItem
              date="Jan. 1"
              title="React, Next.js との出会い"
              icon={CodeXmlIcon}
            >
              <p>
                転職するためには React と Next.js
                の知識が必要だと感じ、このサイトの前身を作成。
              </p>
              <p>
                どちらも未知の世界だったが、とりあえずなにか作ってみることはとても学びになった。
              </p>
              <p>そして、モダンな技術の素晴らしさにどんどん心惹かれてく。</p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2022">
            <TimelineItem
              date="Jan. 1"
              title="武器を磨くために転職を決意"
              icon={StarIcon}
            >
              <p>
                武器の候補には「写真」と「ウェブ制作」があったが、より極めたいと思ったのは後者だった。
              </p>
              <p>
                その道を深く探求していくには、「スペシャリストが集まる会社に行くべきだ！」と転職を決意。
              </p>
              <p>
                そのために必要な技術を集中的に学び始め、学べば学ぶほどに楽しくなっていく。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2021">
            <TimelineItem
              title="できることが増え、武器がないことに焦る"
              icon={AppWindowIcon}
            >
              <p>
                打ち合わせ、デザイン、コーディングという受託制作の一連の流れを担う。
              </p>
              <p>
                写真も好きだったので、サイトに掲載する写真や動画の撮影も担当。
              </p>
              <p>
                色々とできるようになった反面、自分には武器と呼べるほどの強みがないことに気づく。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2019">
            <TimelineItem
              title="社内のウェブ業務担当がいなくなる"
              icon={UserRoundXIcon}
            >
              <p>諸事情により、主にウェブ関連の仕事を担当していた者が離脱。</p>
              <p>
                そのため業務を諸々引き継ぐ必要があり、当時はバタバタしたが、自身にとってはよい経験となった。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2018">
            <TimelineItem title="ウェブとの邂逅" icon={AppWindowIcon}>
              <p>グラフィック系の仕事もあったが、ウェブの仕事が増える。</p>
              <p>
                学生のときにウェブ制作をかじっていたので、下層ページの作成などを任されるように。
              </p>
              <p>このとき、かつて熱中していたウェブ制作の楽しさを思い出す。</p>
            </TimelineItem>
            <TimelineItem
              date="Apr. 1"
              title="グラフィックデザイナー見習いとして転職"
              icon={HandshakeIcon}
            >
              <p>神戸元町にある会社に転職。</p>
              <p>
                イベントで配るビラから始まり、名刺やインビテーション、カタログなどを作る。
              </p>
              <p>昔に写真に力を入れていたこともあり、物撮りなども担当。</p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2017">
            <TimelineItem
              title="グラフィックデザインに目覚める"
              icon={PaintbrushIcon}
            >
              <p>
                学生時代にイラレなどを触っていたので、当時働いていたお店でフライヤー作成を依頼される。
              </p>
              <p>
                その流れでポップやカフェのメニューを作ったりして、そのままグラフィックデザインにハマっていく。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2016">
            <TimelineItem
              title="部屋中の窓を段ボールで閉ざす"
              icon={PackageIcon}
            >
              <p>
                暗室を作るために、自室の窓をすべて段ボールでふさぎ、壁一面を黒いマスキングテープで覆う。
              </p>
              <p>
                ネットで情報をかき集め、フィルム現像からプリント、額装までを自分で行う。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2015">
            <TimelineItem title="大学を中退" icon={GraduationCapIcon}>
              <p>
                2年ほど休学した挙げ句、結局中退。写真が楽しく、大学に行く意味を見失う。
              </p>
              <p>
                この辺りで、当時バイトをしていた本屋兼雑貨屋兼カフェで契約社員として働き始める。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2014">
            <TimelineItem title="写真に取り憑かれる" icon={CameraIcon}>
              <p>
                この頃は写真にハマり、休日はもちろん、バイトの休憩中や行き帰りでも写真を撮り続ける。
              </p>
              <p>食べることもおろそかになり、体重は40キロ台まで落ちる。</p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2013">
            <TimelineItem title="卒業論文を提出して休学" icon={CirclePauseIcon}>
              <p>
                卒業論文を提出したものの就職先もなく、「まだ学生でいた方がメリットがあるかも」と考え休学。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2012">
            <TimelineItem title="はじめまして、WordPress" icon={CodeXmlIcon}>
              <p>
                当時学生が立ち上げたウェブ制作系の会社にインターン的なノリで参加。
              </p>
              <p>WordPress を使ったメディアサイトの立ち上げに関わる。</p>
            </TimelineItem>
            <TimelineItem
              title="就活での運命の出会い"
              icon={BriefcaseBusinessIcon}
            >
              <p>就活をしていく中でウェブ系の仕事の存在を知る。</p>
              <p>
                ウェブ業界にキラキラしたものを感じ、HTML や
                CSS、ウェブデザインを独学し始める。
              </p>
              <p>
                それがめちゃくちゃ楽しく、「これを仕事にするんや！」と決意。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2009">
            <TimelineItem
              title="近畿大学経済学部に入学"
              icon={UniversityIcon}
            />
          </TimelineList>
          <TimelineList year="2006">
            <TimelineItem
              title="時給708円でキーボードをカタカタし始める"
              icon={KeyboardIcon}
            />
          </TimelineList>
          <TimelineList year="2000">
            <TimelineItem
              title="ピアノをやめたくて少年野球チームに入る"
              icon={DiamondIcon}
            />
          </TimelineList>
          <TimelineList year="1995">
            <TimelineItem title="鍵盤を叩き始める" icon={PianoIcon} />
          </TimelineList>
          <TimelineList year="1990">
            <TimelineItem
              date="Oct. 11"
              title="大阪府羽曳野市で生まれる"
              icon={BabyIcon}
            />
          </TimelineList>
        </div>
      </motion.div>
    </>
  );
}

function TimelineList({
  year,
  children,
}: {
  year: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4">
      <h3 className="w-fit rounded-lg bg-iris-3 p-2 font-semibold text-iris-8 text-lg/none dark:text-iris-11">
        {year}
      </h3>
      <div>{children}</div>
    </div>
  );
}

function TimelineItem({
  date,
  title,
  icon: Icon,
  isTweet,
  isDetached,
  children,
}: {
  date?: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  isTweet?: boolean;
  isDetached?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex gap-3 before:absolute before:top-0 before:left-4 before:h-full before:w-px before:translate-x-[-0.5px] before:bg-iris-4 last:before:hidden",
        isDetached ? "before:hidden" : "before:block",
      )}
    >
      <TimelineIcon icon={Icon} />
      <TimelineContent
        date={date}
        title={title}
        isTweet={isTweet}
        hasBody={!!children}
      >
        {children}
      </TimelineContent>
    </div>
  );
}

function TimelineIcon({
  icon: Icon,
}: {
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="z-10 grid size-[32px] shrink-0 place-items-center rounded-full border border-iris-4 bg-iris-1 text-iris-9 shadow-[0_0_0_3px_var(--iris-1)] *:size-4">
      {Icon ? <Icon /> : <CalendarRangeIcon />}
    </div>
  );
}

function TimelineContent({
  date,
  title,
  isTweet,
  hasBody,
  children,
}: {
  date?: string;
  title: string;
  isTweet?: boolean;
  hasBody?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 grid w-full gap-4">
      <TimelineHeader date={date} title={title} />
      {hasBody && <TimelineBody isTweet={isTweet}>{children}</TimelineBody>}
    </div>
  );
}

function TimelineHeader({ date, title }: { date?: string; title: string }) {
  return (
    <hgroup className="mt-1.5 flex flex-col gap-1 *:m-0 sm:flex-row sm:items-center sm:gap-4 lg:mt-[3px]">
      <h4>{title}</h4>
      {date && <p className="shrink-0 text-muted text-sm">{date}</p>}
    </hgroup>
  );
}

function TimelineBody({
  children,
  isTweet,
}: {
  children: React.ReactNode;
  isTweet?: boolean;
}) {
  return isTweet ? (
    <div className="-mt-2">{children}</div>
  ) : (
    <div
      className={cn(
        "gradient-card -ml-1 ~p-4/6 ~text-sm/base border border-[--border-color] leading-normal no-underline [--border-color:var(--iris-4)] [--gradient-from:var(--iris-2)] [--gradient-to:var(--iris-1)] [--shadow-accent-color:var(--iris-a3)] [--shadow-base-color:var(--iris-a2)] dark:border-0 [&_p+p]:mt-2",
      )}
    >
      {children}
    </div>
  );
}

function TimelineItemPostList({
  date,
  year,
  month,
}: {
  date: string;
  year: number;
  month: number;
}) {
  const getPostsByYearMonth = (
    category: string,
    year: number,
    month: number,
  ) => {
    return getPosts(category)
      .sort(
        (a, b) =>
          new Date(b.time.created).getTime() -
          new Date(a.time.created).getTime(),
      )
      .filter((post) => {
        const postYear = new Date(post.time.created).getFullYear();
        const postMonth = new Date(post.time.created).getMonth() + 1;
        return postYear === year && postMonth === month;
      });
  };
  const blogPosts = getPostsByYearMonth("blog", year, month);
  const notesPosts = getPostsByYearMonth("notes", year, month);

  const monthMap: { [key: string]: string } = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return (
    <TimelineItem
      date={date}
      title={`Published ${[...blogPosts, ...notesPosts].length} posts`}
      icon={SquarePenIcon}
    >
      <details>
        <summary className="cursor-pointer marker:text-iris-8">
          <span className="px-1 font-medium">
            View all posts in {monthMap?.[month] ?? "this month"}
          </span>
        </summary>
        {blogPosts.length > 0 && (
          <>
            <div className="mt-4 font-medium text-muted">Blog</div>
            <ul className="mt-0 ml-2 list-disc leading-relaxed">
              {blogPosts.map((post) => (
                <li
                  key={post.slug}
                  className="mt-1 ml-2 list-item leading-snug marker:text-[--iris-8]"
                >
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
        {notesPosts.length > 0 && (
          <>
            <div className="mt-4 font-medium text-muted">Notes</div>
            <ul className="mt-0 ml-2 list-disc leading-relaxed">
              {notesPosts.map((post) => (
                <li
                  key={post.slug}
                  className="mt-1 ml-2 list-item leading-snug marker:text-[--iris-8]"
                >
                  <Link href={`/notes/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </details>
    </TimelineItem>
  );
}
