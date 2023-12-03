import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { FaXTwitter } from 'react-icons/fa6';

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
    <>
      <section className="px-4 py-32 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-muted-foreground">
            About
          </h1>
          <div className="mt-8 grid gap-4 text-lg font-bold leading-8">
            <p>おおしましょうごと申します。</p>
            <p>
              <span className="inline-block">ウェブサイト作ったり、</span>
              <span className="inline-block">
                ウェブアプリを作ったりしてます。
              </span>
            </p>
            <p>
              <span className="block">使い勝手のよいものが好きで、</span>
              <span className="inline-block">自分がつくるものも</span>
              <span className="inline-block">そうありたいと思っています。</span>
            </p>
            <p>
              <span className="inline-block">デザインも好きですが、</span>
              <span className="inline-block">開発も大好きです。</span>
            </p>
            <p>
              <span className="inline-block">
                最近は、React や Next.js などの
              </span>
              <span className="inline-block">モダンな技術に興味あり。</span>
            </p>
            <p>お問い合わせはツイッター（X）からどうぞ。</p>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/osgsm_"
              className={twJoin(
                'flex h-11 items-center justify-between rounded-md border border-button-primary-border bg-button-primary-background px-4 py-2 text-sm text-button-primary-foreground no-underline',
                'hover:border-button-primary-hover-border hover:bg-button-primary-hover-background hover:text-button-primary-foreground',
              )}
            >
              <div className="flex items-center">
                <span className="text-lg">
                  <FaXTwitter />
                </span>
                <span className="ml-1">@osgsm_</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="border-t px-4 py-10 pb-24 md:px-6">
        <div className="mx-auto max-w-3xl text-base leading-8">
          <p>以下は自身の半生で、思考や行動の変遷を辿っています。</p>
          <p>輝かしい経歴はないですが、興味のある方は読んでみてください。</p>
          <div className="mt-8 border-t pt-4">
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
          <div className="mx-auto mt-10 max-w-3xl">
            <Link
              className={twJoin(
                'flex h-11 w-fit items-center rounded-md border border-button-secondary-border bg-button-secondary-background px-4 py-2 text-sm text-button-secondary-foreground',
                'hover:border-button-secondary-hover-border hover:bg-button-secondary-hover-background hover:text-button-secondary-foreground',
              )}
              href="/"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
