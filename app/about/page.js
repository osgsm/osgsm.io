import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { AiOutlineTwitter } from 'react-icons/ai';

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
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold text-muted-foreground">
            About
          </h1>
          <div
            className={twJoin(
              'mt-8 text-base font-semibold',
              '[&>p]:mt-5',
              'md:text-lg',
            )}
          >
            <p>
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
              className={twJoin(
                'flex h-11 items-center justify-between rounded-md border border-button-primary-border bg-button-primary-background px-4 py-2 text-sm text-button-primary-foreground no-underline',
                'hover:border-button-primary-hover-border hover:bg-button-primary-hover-background hover:text-button-primary-foreground',
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
        </div>
      </section>
      <section className="border-t bg-muted-background/5 px-4 py-10 pb-24 md:px-6">
        <div className="mx-auto max-w-2xl text-[0.9375rem] leading-relaxed">
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
          <div className="mx-auto mt-10 max-w-2xl">
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
    </div>
  );
};

export default About;
