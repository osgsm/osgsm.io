import Head from 'next/head';
import Link from 'next/link';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HiArrowUpRight } from 'react-icons/hi2';
import Timeline from '../../components/timeline';
import timelineContents from '../../content/aboutTimelineContents';

export const metadata = {
  title: 'About',
  openGraph: {
    title: "About — osgsm's personal website",
    url: 'https://osgsm.io/about',
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
      <Head>
        <title>私について</title>
        <meta name="og:title" content="私について" key="og-title" />
      </Head>
      <div className="prose mt-16">
        <h1 className="text-3xl">About</h1>
        <p>
          大島翔吾と申します。ウェブ制作をしています。モットーは、使いやすく魅力的なサイトを作ること。コーディングだけでなく、デザイン、写真撮影もやります。
        </p>
        <div className="mb-10 flex gap-4">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/osgsm_"
            className="flex w-full items-center justify-between
              rounded-md border border-gray-200 bg-gray-100
              p-3 text-sm text-gray-700
              no-underline hover:bg-gray-200 hover:text-gray-800"
          >
            <div className="flex items-center">
              <AiOutlineTwitter />
              <span className="ml-1">Twitter</span>
            </div>
            <HiArrowUpRight />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/osgsm"
            className="flex w-full items-center justify-between
              rounded-md border border-gray-200 bg-gray-100
              p-3 text-sm text-gray-700
              no-underline hover:bg-gray-200 hover:text-gray-800"
          >
            <div className="flex items-center">
              <AiFillGithub />
              <span className="ml-1">GitHub</span>
            </div>
            <HiArrowUpRight />
          </a>
        </div>
        <p>
          以下は自身の半生で、思考や行動の変遷を辿っています。輝かしい経歴はないですが、興味のある方は読んでみてください。
        </p>
      </div>
      <div className="mt-16">
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
      <div className="mt-10">
        <Link
          className="inline-block rounded-md border border-gray-300
              bg-gray-100 p-3 text-sm text-gray-700
              hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800"
          href="/"
        >
          ← ホームにもどる
        </Link>
      </div>
    </>
  );
};

export default About;
