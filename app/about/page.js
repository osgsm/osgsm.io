import Link from 'next/link';
import { clsx } from 'clsx';
import { AiOutlineTwitter } from 'react-icons/ai';
import { HiArrowUpRight } from 'react-icons/hi2';

import Timeline from '../../components/timeline';
import timelineContents from '../../content/aboutTimelineContents';

export const metadata = {
  title: 'About',
  openGraph: {
    title: "About — osgsm's personal website",
    url: 'https://osgsm.io/about',
    images: '/assets/osgsm-banner.png',
    type: 'website',
  },
  twitter: {
    title: "About — osgsm's personal website",
    card: 'summary_large_image',
  },
};

const About = () => {
  return (
    <div>
      <section className="prose py-20 mx-auto max-w-2xl px-4 md:px-6">
        <h1 className="text-3xl text-muted-foreground">About</h1>
        <div className="font-bold text-md md:text-lg">
          <p className="mb-2">
            おおしましょうごと申します。
            <br />
            ウェブサイトを作ってます。
          </p>
          <p>モットーは使い心地のよいサイト制作。</p>
          <p>デザインも開発もやります。</p>
          <p>
            <span className="inline-block">
              最近は、React や Next.js などの
            </span>
            <span className="inline-block">モダンな技術に興味あり。</span>
          </p>
          <p>お問い合わせはツイッターからどうぞ。</p>
        </div>
        <div className="mt-8 flex gap-4">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/osgsm_"
            className={clsx(
              'flex items-center justify-between rounded-md border h-11 border-button-primary-border bg-button-primary-background py-2 px-4 text-sm text-button-primary-foreground no-underline',
              'hover:text-button-primary-foreground hover:bg-button-primary-hover-background hover:border-button-primary-hover-border'
            )}
          >
            <div className="flex items-center">
              <span className="text-lg">
                <AiOutlineTwitter />
              </span>
              <span className="ml-1">@osgsm_</span>
            </div>
          </a>
        </div>
      </section>
      <section className="pb-24 bg-misty-slate-100/30 border-t py-10 px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="leading-relaxed">
            以下は自身の半生で、思考や行動の変遷を辿っています。輝かしい経歴はないですが、興味のある方は読んでみてください。
          </p>
          <div className="mt-8 pt-4 border-t">
            {timelineContents.map((content) => {
              return (
                <Timeline
                  content={content}
                  year={content.header}
                  key={content.header}
                />
              );
            })}
          </div>
          <div className="mx-auto max-w-2xl mt-10">
            <Link
              className={clsx(
                'flex items-center w-fit rounded-md border border-button-secondary-border bg-button-secondary-background h-11 py-2 px-4 text-sm text-gray-700',
                'hover:border-button-secondary-hover-border hover:bg-button-secondary-hover-background hover:text-button-secondary-foreground'
              )}
              href="/"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
