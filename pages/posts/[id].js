import Date from '../../components/date';
import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="og:title" content={postData.title} key="og-title" />
      </Head>
      <article
        className="prose mt-12
          grid max-w-none
          grid-cols-[repeat(auto-fill,1em)]
          place-content-center
          break-words
          [line-break:strict]
          prose-img:my-6
          prose-img:rounded-lg
          prose-img:border
          prose-img:border-gray-300
          [&>*]:[grid-column:1/-1]
          [&_p>img+*]:-mt-4 [&_p>img+*]:block
          [&_p>img+*]:text-sm [&_p>img+*]:opacity-90"
      >
        <h1 className="mb-3 text-2xl font-normal leading-normal">
          {postData.title}
        </h1>
        <div className="text-base text-gray-400">
          <Date dateString={postData.date} />
        </div>
        <div
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
};

export default Post;
