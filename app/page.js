import Link from 'next/link';
import { clsx } from 'clsx';

import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

const Home = () => {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <section className="py-32 px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="font-bold text-lg md:text-xl">
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
              'hover:text-misty-slate-600'
            )}
          >
            Read more →
          </Link>
        </div>
      </section>
      <section className="bg-misty-slate-100/40 px-4 pt-10 pb-20 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2
            className={clsx(
              'mb-6 text-2xl text-misty-slate-500 font-semibold',
              'md:text-3xl'
            )}
          >
            Blog
          </h2>
          <ul className="mt-4">
            {allPostsData.map(({ id, date, title }) => (
              <Link
                key={id}
                className={clsx(
                  'block rounded-lg mt-4 p-1 border',
                  'md:mt-5',
                  'hover:border-twilight-indigo-200 hover:bg-twilight-indigo-100/40'
                )}
                href={`/posts/${id}`}
              >
                <li className={clsx('p-4 bg-background rounded-md', 'md:p-6')}>
                  <div
                    className={clsx(
                      'text-lg font-semibold text-foreground leading-normal',
                      'md:text-xl'
                    )}
                  >
                    {title}
                  </div>
                  <small className="mt-2 block text-muted-foreground text-sm">
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
