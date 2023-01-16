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
        <meta name="og:title" content={postData.title} />
      </Head>
      <article
        className="prose mt-12
          grid max-w-none grid-cols-[repeat(auto-fill,1em)] place-content-center
          break-words
          prose-headings:font-normal
          prose-a:font-normal
          prose-a:text-blue-500 prose-a:decoration-blue-300
          prose-a:decoration-2
          prose-a:underline-offset-4 hover:prose-a:text-blue-600
        hover:prose-a:decoration-blue-400
          prose-img:rounded-md
          prose-img:border
          [&>*]:[grid-column:1/-1]"
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
