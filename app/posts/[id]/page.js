import Link from 'next/link';
import { clsx } from 'clsx';

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
    <div className="mb-24 px-4 md:px-6">
      <div className="mx-auto max-w-2xl pt-8 pb-6 text-muted-foreground text-sm">
        <Link
          href="/posts"
          className="p-1 -mx-1 rounded-md hover:text-misty-slate-600"
        >
          ← Back to Blog
        </Link>
      </div>
      <article
        className={clsx(
          'mx-auto max-w-2xl prose break-words [line-break:strict]',
          'grid grid-cols-[repeat(auto-fill,1em)] place-content-center',
          'prose-img:my-6 prose-img:rounded-lg prose-img:border',
          '[&>*]:[grid-column:1/-1]',
          '[&_p>img+*]:-mt-4 [&_p>img+*]:block [&_p>img+*]:text-sm [&_p>img+*]:opacity-90'
        )}
      >
        <h1 className="mb-3 text-[28px] font-semibold leading-snug">
          {postData.title}
        </h1>
        <div className="text-sm text-muted-foreground">
          <Date dateString={postData.date} />
        </div>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <div className="mx-auto max-w-2xl mt-10">
        <Link
          className={clsx(
            'flex items-center w-fit rounded-md border border-button-secondary-border bg-button-secondary-background h-11 py-2 px-4 text-sm text-gray-700',
            'hover:border-button-secondary-hover-border hover:bg-button-secondary-hover-background hover:text-button-secondary-foreground'
          )}
          href="/"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Post;
