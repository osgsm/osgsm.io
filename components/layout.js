import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'osgsm';
export const siteTitle = "osgsm's personal website";

const Layout = ({ children, home }) => {
  return (
    <div className="mx-auto mt-12 mb-16 max-w-2xl px-4 md:px-6">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="osgsm's personal website" />
        <meta
          property="og:image"
          content="https://osgsm.io/assets/osgsm-banner.png"
        />
        <meta name="og:title" content={siteTitle} key="og-title" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/assets/profile.png"
              className="rounded-full"
              height={108}
              width={108}
              alt=""
            />
            <h1 className="mt-2 text-xl">{name}</h1>
          </>
        ) : (
          <>
            <Image
              priority
              src="/assets/profile.png"
              className="rounded-full"
              height={80}
              width={80}
              alt=""
            />
            <h2 className="mt-1 text-lg">
              <Link href="/">{name}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link
            className="inline-block rounded-md border border-gray-300
              bg-gray-100 p-3 text-sm text-gray-700
              hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800"
            href="/"
          >
            ← ホームにもどる
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
