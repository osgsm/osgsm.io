import Link from 'next/link';
import { clsx } from 'clsx';

import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

const Home = () => {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <section className="px-4 py-32 md:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-lg font-bold md:text-xl">
            <p className="mb-2">
              おおしましょうごと申します。
              <br />
              ウェブサイトを作ってます。
            </p>
            <p>モットーは使い心地のよいサイト制作。</p>
          </div>
          <Link
            href="/about"
            className={clsx(
              'mt-4 inline-block text-base text-muted-foreground',
              'hover:text-misty-slate-600 dark:hover:text-misty-slate-500',
            )}
          >
            Read more →
          </Link>
        </div>
      </section>
      <section className="border-t bg-muted-background/5 px-4 pb-20 pt-10 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2
            className={clsx(
              'mb-6 text-2xl font-semibold text-misty-slate-500',
              'md:text-3xl',
            )}
          >
            Blog
          </h2>
          <ul className="mt-4">
            {allPostsData.map(({ id, date, title }) => (
              <Link
                key={id}
                className={clsx(
                  'mt-4 block rounded-xl border p-1 transition-all',
                  'md:mt-5',
                  'hover:border-twilight-indigo-200 hover:bg-twilight-indigo-100/40',
                  'dark:hover:border-twilight-indigo-700 dark:hover:bg-twilight-indigo-900/40',
                )}
                href={`/posts/${id}`}
              >
                <li className={clsx('rounded-lg bg-background p-4', 'md:p-6')}>
                  <div
                    className={clsx(
                      'text-lg font-semibold leading-normal text-foreground',
                      'md:text-xl',
                    )}
                  >
                    {title}
                  </div>
                  <small className="mt-2 block text-sm text-muted-foreground">
                    <Date dateString={date} />
                  </small>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
