import Date from '../../../components/date';
import { getAllPostIds, getPostData } from '../../../lib/posts';

export const generateMetadata = async ({ params }) => {
  const postData = await getPostData(params.id);
  const { id, title } = postData;

  return {
    title,
    openGraph: {
      title,
      type: 'article',
      url: `http://osgsm.io/posts/${id}`,
    },
    twitter: {
      title,
      card: 'summary_large_image',
    },
  };
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return getAllPostIds();
};

const Post = async ({ params }) => {
  const postData = await getPostData(params.id);
  return (
    <>
      {/* <Head>
        <title{postData.title}/title>
        <meta name="og:title content={postData.title}key="og-title" />
      </Head> */}
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
          {postData.titl}
        </h1>
        <div className="text-base text-gray-400">
          <Date dateString={postData.date} />
        </div>
        <div
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  );
};

export default Post;
