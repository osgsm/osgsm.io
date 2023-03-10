import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="prose mt-16">
          <p className="mb-2">
            大島翔吾と申します。ウェブ制作をしています。
            <br />
            モットーは、使いやすく魅力的なサイトを作ること。
          </p>
          <Link href="/about">もっと詳しく→</Link>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-3xl">Blog</h2>
        <ul className="mt-8">
          {allPostsData.map(({ id, date, title }) => (
            <Link
              className="mt-6 block rounded-lg border border-gray-300 p-6
              hover:bg-gray-200/50"
              href={`/posts/${id}`}
              key={id}
            >
              <li className="text-lg">
                {title}
                <br />
                <small className="text-gray-400">
                  <Date dateString={date} />
                </small>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
