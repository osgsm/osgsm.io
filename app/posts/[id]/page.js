import Link from 'next/link';
import Date from '../../../components/date';
import { getAllPostIds, getPostData } from '../../../lib/posts';

export const generateMetadata = async ({ params }) => {
  const postData = await getPostData(params.id);
  const { id, title } = postData;

  return {
    title,
    openGraph: {
      title,
      url: `http://osgsm.io/posts/${id}`,
      images: '/assets/osgsm-banner.png',
      type: 'article',
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

export default Post;
