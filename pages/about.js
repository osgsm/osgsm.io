import Layout from '../components/layout';
import Timeline from '../components/timeline';
import timelineContents from '../content/aboutTimelineContents';

const About = () => {
  return (
    <Layout>
      <div className="prose mt-16">
        <h1 className="text-3xl">About</h1>
        <p>
          大島翔吾と申します。ウェブ制作をしています。モットーは、使いやすく魅力的なサイトを作ること。コーディングだけでなく、デザイン、写真撮影もやります。
        </p>
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
