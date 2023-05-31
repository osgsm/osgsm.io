'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MenuPopover from './menu-popover';

const Logo = () => (
  <Image
    priority
    src="/assets/profile.png"
    className="rounded-full border-2"
    height={40}
    width={40}
    alt=""
  />
);

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <header className="px-4 border-b md:px-6 sticky top-0 bg-background/80 backdrop-blur-md z-20">
      <div className="mx-auto flex max-w-2xl flex-row items-center justify-between py-2 ">
        {isHome ? (
          <div className="-ml-1">
            <Logo />
            <h1 className="sr-only">osgsm</h1>
          </div>
        ) : (
          <div className="-ml-1">
            <Link className="flex flex-col items-center" href="/">
              <Logo />
              <div className="sr-only">osgsm</div>
            </Link>
          </div>
        )}
        <MenuPopover />
      </div>
    </header>
  );
};

export default Header;
