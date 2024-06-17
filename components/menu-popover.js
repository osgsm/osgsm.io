import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars2Icon } from '@heroicons/react/24/outline';
import * as Popover from '@radix-ui/react-popover';
import { twJoin, twMerge } from 'tailwind-merge';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';

const menuItems = {
  '/': {
    name: 'Home',
  },
  '/posts': {
    name: 'Blog',
  },
  '/about': {
    name: 'About',
  },
};

const socialLinks = {
  x: {
    href: 'https://x.com/osgsm_',
    icon: FaXTwitter,
  },
  github: {
    href: 'https://github.com/osgsm',
    icon: FaGithub,
  },
};

const MenuPopover = () => {
  let pathname = usePathname();
  if (pathname.includes('/posts')) {
    pathname = '/posts';
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={twJoin(
          'flex h-8 w-8 items-center justify-center rounded-md',
          'hover:bg-button-accent-background hover:text-button-accent-foreground',
          'focus-visible:bg-button-accent-background focus-visible:text-button-accent-foreground',
        )}
      >
        <Bars2Icon className="h-6 w-6" />
      </Popover.Trigger>
      <Popover.Content
        align="end"
        asChild
        sideOffset={8}
        className="data-[state='open']:animate-fade-in"
      >
        <div
          className={twJoin(
            'flex min-w-[104px] flex-col rounded-xl border border-border bg-background p-2.5',
            '[&>*+*]:mt-1',
          )}
        >
          {Object.entries(menuItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Popover.Close key={path} asChild>
                <Link
                  href={path}
                  className={twMerge(
                    'flex items-center justify-between rounded-[4px] px-1.5 py-0.5 text-muted-foreground',
                    'hover:bg-button-accent-background hover:text-button-accent-foreground',
                    '[@media(any-hover:hover)and(any-pointer:fine)]:focus-visible:bg-button-accent-background [@media(any-hover:hover)and(any-pointer:fine)]:focus-visible:text-button-accent-foreground',
                    isActive && 'text-foreground',
                  )}
                >
                  {name}
                  <span
                    className={twMerge(
                      'ml-2 inline-block h-1.5 w-1.5 rounded-full bg-transparent',
                      isActive &&
                        'bg-twilight-indigo-500 dark:bg-twilight-indigo-600',
                    )}
                  ></span>
                </Link>
              </Popover.Close>
            );
          })}
          <div className="!mt-2 flex border-t pt-3">
            {Object.entries(socialLinks).map(([key, { href, icon: Icon }]) => (
              <a
                key={key}
                href={href}
                className={twMerge(
                  'flex items-center justify-between rounded-[4px] px-1.5 py-1 text-muted-foreground',
                  'hover:bg-button-accent-background hover:text-button-accent-foreground',
                  '[@media(any-hover:hover)and(any-pointer:fine)]:focus-visible:bg-button-accent-background [@media(any-hover:hover)and(any-pointer:fine)]:focus-visible:text-button-accent-foreground',
                )}
              >
                <Icon className="size-[1.125rem]" />
              </a>
            ))}
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default MenuPopover;
