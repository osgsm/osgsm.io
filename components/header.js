'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MenuPopover from './menu-popover';
import ThemePopover from './theme-popover';

const Logo = () => (
  <Image
    priority
    src="/assets/profile.svg"
    className="rounded-full border"
    height={40}
    width={40}
    alt=""
  />
);

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <header className="sticky top-0 z-20 border-b bg-background px-4 md:px-6">
      <div className="mx-auto flex max-w-3xl flex-row items-center justify-between py-2 ">
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
        <div className="flex gap-3">
          <ThemePopover />
          <MenuPopover />
        </div>
      </div>
    </header>
  );
};

export default Header;
