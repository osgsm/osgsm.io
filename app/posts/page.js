import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import Date from '../../components/date';
import { getSortedPostsData } from '../../lib/posts';

const Home = () => {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <section className="bg-muted-background/30 px-4 py-20 pb-24 dark:bg-muted-background/5 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2
            className={twMerge(
              'mb-8 text-3xl font-semibold text-misty-slate-500',
              'md:text-3xl',
            )}
          >
            Blog
          </h2>
          <ul className="mt-4">
            {allPostsData.map(({ id, date, title }) => (
              <Link
                key={id}
                className={twMerge(
                  'mt-4 block rounded-xl border p-1 transition-all',
                  'md:mt-5',
                  'hover:border-twilight-indigo-200 hover:bg-twilight-indigo-100/40',
                  'dark:hover:border-twilight-indigo-700 dark:hover:bg-twilight-indigo-900/40',
                )}
                href={`/posts/${id}`}
              >
                <li
                  className={twMerge('rounded-lg bg-background p-4', 'md:p-6')}
                >
                  <div
                    className={twMerge(
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
          <div className="mt-10">
            <Link
              className={twMerge(
                'flex h-11 w-fit items-center rounded-md border border-button-secondary-border bg-button-secondary-background px-4 py-2 text-sm text-button-secondary-foreground',
                'hover:border-button-secondary-hover-border hover:bg-button-secondary-hover-background hover:text-button-secondary-foreground',
              )}
              href="/"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
