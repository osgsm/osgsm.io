import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'osgsm';
export const siteTitle = "osgsm's personal website";

const Layout = ({ children, home }) => {
  return (
    <div className="mx-auto my-12 max-w-2xl px-6">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="osgsm's personal website" />
        <meta
          property="og:image"
          content="https://osgsm.vercel.app/assets/osgsm-banner.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/assets/profile.png"
              className="rounded-full"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="mt-2 text-2xl">{name}</h1>
          </>
        ) : (
          <>
            <Image
              priority
              src="/assets/profile.png"
              className="rounded-full"
              height={108}
              width={108}
              alt=""
            />
            <h2 className="mt-1 text-xl">
              <Link href="/">{name}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-blue-500">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
