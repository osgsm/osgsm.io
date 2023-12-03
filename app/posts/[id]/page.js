import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

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
      <div className="mx-auto max-w-3xl pb-6 pt-8 text-sm text-muted-foreground">
        <Link
          href="/posts"
          className="-mx-1 rounded-md p-1 hover:text-misty-slate-600"
        >
          ← Back to Blog
        </Link>
      </div>
      <article
        className={twJoin(
          'prose mx-auto max-w-3xl break-words text-foreground [line-break:strict]',
          'grid grid-cols-[repeat(auto-fill,1em)] place-content-center',
          'prose-img:my-6 prose-img:rounded-lg prose-img:border',
          'dark:prose-img:brightness-90',
          '[&>*]:[grid-column:1/-1]',
          '[&_a]:text-link-foreground [&_a]:decoration-link-decoration hover:[&_a]:text-link-hover-foreground hover:[&_a]:decoration-link-hover-decoration',
          '[&_p>img+*]:-mt-4 [&_p>img+*]:block [&_p>img+*]:text-sm [&_p>img+*]:opacity-90',
          '[&_code]:border-misty-slate-200 [&_code]:bg-misty-slate-100 [&_code]:text-misty-slate-900',
          'dark:[&_code]:border-misty-slate-800 dark:[&_code]:bg-misty-slate-900 dark:[&_code]:text-misty-slate-400',
          '[&_hr]:border-border',
        )}
      >
        <h1 className="mb-3 text-[28px] font-semibold leading-snug text-foreground">
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
      <div className="mx-auto mt-10 max-w-3xl">
        <Link
          className={twJoin(
            'flex h-11 w-fit items-center rounded-md border border-button-secondary-border bg-button-secondary-background px-4 py-2 text-sm text-button-secondary-foreground',
            'hover:border-button-secondary-hover-border hover:bg-button-secondary-hover-background hover:text-button-secondary-foreground',
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
