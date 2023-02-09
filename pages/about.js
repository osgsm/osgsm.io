import Layout from '../components/layout';
import Timeline from '../components/timeline';
import aboutContents from '../content/aboutContents';

const About = () => {
  return (
    <Layout>
      <div className="prose mt-16">
        <h1>About</h1>
        <p>大島翔吾と申します。</p>
        <p>
          仕事では、ウェブデザインしたり、コーディングしたり、写真を撮ったりしています。ウェブサイトを制作する上で目指していることは「使いやすく魅力的なサイトを作る」こと。ちなみに、1990年10月11日生まれの32歳、既婚です。
        </p>
        <p>
          以下は僕の半生です。輝かしいものはないですが、自分自身の思考や行動の変遷を辿っています。興味のある方は読んでみてください。
        </p>
      </div>
      <div className="mt-16">
        {aboutContents.map((aboutContent) => {
          return (
            <Timeline
              content={aboutContent}
              year={aboutContent.header}
              key={aboutContent.header}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default About;
