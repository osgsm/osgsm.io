import type React from "react";

import Link from "@/components/link";
import { Tweet } from "@/components/tweet";
import { cn } from "@/lib/cn";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  AppWindowIcon,
  BabyIcon,
  BriefcaseBusinessIcon,
  CalendarRangeIcon,
  CameraIcon,
  CirclePauseIcon,
  CodeXmlIcon,
  FlagIcon,
  GrabIcon,
  GraduationCapIcon,
  HandshakeIcon,
  KeyboardIcon,
  PackageIcon,
  PaintbrushIcon,
  PianoIcon,
  RocketIcon,
  UniversityIcon,
  UserRoundXIcon,
} from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <div className="~px-5/8 lg:-mt-28 ~/lg:~py-20/40 mx-auto grid max-w-[67rem] items-center gap-20 md:gap-6 lg:h-[100vh] lg:max-h-[60rem] lg:min-h-[50rem] lg:py-0">
        <div className="col-span-full row-span-full grid gap-6">
          <div className="grid gap-1">
            <div className="-ml-0.5 ~text-xs/sm mb-1 flex w-fit items-center gap-2 rounded-lg border border-[--cyan-3] bg-[--cyan-2] px-2 py-1 text-[--cyan-10] lg:mb-0">
              <span className="grid *:col-span-full *:row-span-full *:inline-block *:size-1.5 *:rounded-full">
                <span className="size-3 animate-ping-slow bg-[--cyan-6]" />
                <span className="z-10 size-1.5 bg-[--cyan-8]" />
              </span>
              Work at KITERETZ inc.
            </div>
            <hgroup className="grid gap-3 md:gap-0 md:*:col-span-full md:*:row-span-full">
              <h1 className="-ml-[0.075em] lg:-ml-[0.05em] ~/md:~text-6xl/8xl font-semibold tracking-[-0.07em] *:m-0">
                <span className="block w-[5em] bg-[radial-gradient(circle_at_80%_-80%,_var(--iris-5),_var(--iris-7))] bg-clip-text text-transparent leading-[1.075] sm:w-full sm:leading-tight">
                  Shogo <span className="-ml-0.5 inline-block">Oshima</span>
                </span>
              </h1>
              <p className="-translate-y-1.5 ~/md:~text-sm/[0.9375rem] m-0 self-end text-mauve-7 leading-none">
                Frontend developer
              </p>
            </hgroup>
          </div>
          <div className="~text-[0.9375rem]/2xl grid gap-4 font-bold leading-normal [&_p]:m-0">
            <div>
              <p>大島翔吾と申します。</p>
              <p>フロントエンドデベロッパーです。</p>
            </div>
            <div>
              <p>HTML / CSS / TypeScript が主軸。</p>
              <p>フレームワークは Astro や Next.js、</p>
              <p>CMS は WordPress をよく使います。</p>
            </div>
            <div>
              <p>技術だけでなくデザインにも関心があります。</p>
              <p>近頃は 3D とか WebGL に惹かれてます。</p>
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
        <div className="~xs/sm:~-translate-x-0/16 sm:~sm/md:~translate-y-10/48 col-span-full row-span-full size-[min(32vw,22.5rem)] translate-y-10 place-items-center self-start justify-self-end sm:translate-x-0 lg:translate-y-20 lg:self-center min-[22.5rem]:visible">
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
              className="rounded-full border border-iris-4"
            />
          </motion.div>
        </div>
      </div>
      <div className="~px-5/8 ~gap-8/10 relative mx-auto mt-16 grid max-w-[67rem] items-start pb-20 md:mt-0 md:grid-cols-[auto_1fr] md:pl-0 lg:pl-8">
        <h2 className="-ml-[.15em] ~/md:~text-5xl/8xl md:-ms-1.5 md:-translate-x-2 border-0 text-iris-7 capitalize leading-none tracking-[-0.07em] md:sticky md:top-4 md:text-9xl md:text-iris-4 md:[writing-mode:vertical-rl]">
          Timeline
        </h2>
        <div className="~gap-4/6 grid">
          <TimelineList year="2025">
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
                、コンテンツの管理は{" "}
                <Link text="MDX" href="https://mdxjs.com/" />。
              </p>
              <p>
                スタイリングは{" "}
                <Link text="Tailwind CSS" href="https://tailwindcss.com/" />
                、アニメーションは{" "}
                <Link
                  text="Motion"
                  href="https://www.framer.com/motion/"
                />{" "}
                を使っています。
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
              title="リニューアル案件で、ほんの少しだけフロントエンドを担当"
              icon={RocketIcon}
              isTweet
            >
              <Tweet url="https://x.com/ixkaito/status/1844254949418598442" />
            </TimelineItem>
            <TimelineItem
              date="Jul. 4"
              title="WordPress 構築案件を担当"
              icon={RocketIcon}
              isTweet
            >
              <Tweet url="https://x.com/ixkaito/status/1808792122025521602" />
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2023">
            <TimelineItem
              title="1,155 contributions"
              icon={GitHubLogoIcon}
              isDetached
            />
            <TimelineItem
              date="Jun. 1"
              title="KITERETZ inc. にジョイン"
              icon={HandshakeIcon}
            />
            <TimelineItem
              date="Jan. 1"
              title="Next.js を使ってこのサイトの v1 を作成"
              icon={CodeXmlIcon}
            />
          </TimelineList>
          <TimelineList year="2022">
            <TimelineItem
              title="861 contributions"
              icon={GitHubLogoIcon}
              isDetached
            />
            <TimelineItem
              date="Jan. 1"
              title="ウェブ制作を極めるべく転職を決意"
              icon={FlagIcon}
            >
              <p>
                ウェブ制作を極めるべく、スペシャリストが集まる会社に行きたいと決意。
              </p>
              <p>
                そのために必要な技術を集中的に学び始める。この過程で、開発の楽しさをより実感するようになる。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2021">
            <TimelineItem
              title="ウェブ制作の一連の流れを担う"
              icon={AppWindowIcon}
            >
              <p>
                打ち合わせ、デザイン、コーディングという受託制作の一連の流れを担う。
              </p>
              <p>
                また、昔に写真撮影を学んでいたおかげで、ウェブサイトに掲載する写真や動画の撮影も担当。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2019">
            <TimelineItem
              title="社内のウェブ制作担当がいなくなる"
              icon={UserRoundXIcon}
            >
              <p>諸事情により、主にウェブ関連の仕事を担当していた者が離脱。</p>
              <p>
                そのため業務を諸々引き継ぐ必要があり、当時はバタバタしたが、自身にとってはよい経験となった。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2018">
            <TimelineItem
              title="ウェブ制作のアシスタントを担う"
              icon={CodeXmlIcon}
            >
              <p>グラフィック系の仕事もあったが、ウェブの仕事が増える。</p>
              <p>
                昔にウェブ制作をかじっていたので、下層ページの作成などを任されるように。
              </p>
              <p>ウェブ制作の楽しさを思い出す。</p>
            </TimelineItem>
            <TimelineItem
              title="グラフィックデザイナー見習いとして神戸にある会社に転職"
              icon={HandshakeIcon}
            />
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
                その流れでポップやカフェのメニューを作ったり、そのままグラフィックデザインにハマっていく。
              </p>
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2016">
            <TimelineItem
              title="部屋中の窓を段ボールで閉ざす"
              icon={PackageIcon}
            >
              <p>暗室を作るために、自室の窓をすべて閉ざす。</p>
              <p>自室でフィルムの現像からプリント、額装までを行う。</p>
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
            </TimelineItem>
          </TimelineList>
          <TimelineList year="2013">
            <TimelineItem
              title="卒業論文を提出するも休学"
              icon={CirclePauseIcon}
            >
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
              title="就活で運命の出会いを果たす"
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
              title="キラキラのキャンパスライフを夢見て近畿大学に入学"
              icon={UniversityIcon}
            />
          </TimelineList>
          <TimelineList year="2005">
            <TimelineItem
              title="時給708円でキーボードをカタカタし始める"
              icon={KeyboardIcon}
            />
          </TimelineList>
          <TimelineList year="2000">
            <TimelineItem
              title="ピアノをやめたくて少年野球チームに入る"
              icon={GrabIcon}
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
      </div>
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
    <div className="[&_h3]:~text-lg/xl grid gap-4">
      <h3 className="w-fit rounded-lg bg-iris-3 px-2 py-1 font-bold text-iris-8 text-sm dark:text-iris-11">
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
