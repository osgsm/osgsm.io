import Head from 'next/head';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HiArrowUpRight } from 'react-icons/hi2';
import Layout, { siteTitle } from '../components/layout';
import Timeline from '../components/timeline';
import timelineContents from '../content/aboutTimelineContents';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>私について｜{siteTitle}</title>
        <meta
          name="og:title"
          content={`私について｜${siteTitle}`}
          key="og-title"
        />
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
    </Layout>
  );
};

export default About;
