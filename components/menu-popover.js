import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars2Icon } from '@heroicons/react/24/outline';
import * as Popover from '@radix-ui/react-popover';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

const MenuPopover = () => {
  let pathname = usePathname();
  if (pathname.includes('/posts')) {
    pathname = '/posts';
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          'flex h-8 w-8 rounded-md items-center justify-center',
          'hover:bg-twilight-indigo-100/75 hover:text-twilight-indigo-500',
          'focus-visible:bg-twilight-indigo-100/75 focus-visible:text-twilight-500 focus-visible:outline-none focus-visible:ring-offset-1'
        )}
      >
        <Bars2Icon className="h-6 w-6" />
      </Popover.Trigger>
      <Popover.Content align="end" asChild sideOffset={8}>
        <div
          className={clsx(
            'flex flex-col rounded-lg border border-border bg-background p-2.5 min-w-[104px]',
            '[&>*+*]:mt-1'
          )}
        >
          {Object.entries(menuItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Popover.Close key={path} asChild>
                <Link
                  href={path}
                  className={clsx(
                    'rounded-[4px] py-0.5 px-1.5 flex items-center justify-between',
                    'hover:bg-twilight-indigo-100/75 hover:text-twilight-indigo-500',
                    'focus-visible:bg-twilight-indigo-100/75 focus-visible:text-twilight-500 focus-visible:outline-none focus-visible:ring-offset-1'
                  )}
                >
                  {name}
                  <span
                    className={twMerge(
                      clsx(
                        'ml-2 inline-block h-1.5 w-1.5 rounded-full bg-transparent',
                        {
                          'bg-twilight-indigo-500': isActive,
                        }
                      )
                    )}
                  ></span>
                </Link>
              </Popover.Close>
            );
          })}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default MenuPopover;
