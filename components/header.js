'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <header className="flex flex-col items-center">
      {isHome ? (
        <>
          <Image
            priority
            src="/assets/profile.png"
            className="rounded-full"
            height={108}
            width={108}
            alt=""
          />
          <h1 className="mt-2 text-xl">osgsm</h1>
        </>
      ) : (
        <>
          <Link className="flex flex-col items-center" href="/">
            <Image
              priority
              src="/assets/profile.png"
              className="rounded-full"
              height={80}
              width={80}
              alt=""
            />
            <h2 className="mt-2 text-lg">osgsm</h2>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
