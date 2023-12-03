import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars2Icon } from '@heroicons/react/24/outline';
import * as Popover from '@radix-ui/react-popover';
import { twJoin, twMerge } from 'tailwind-merge';

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
        className="data-[state='closed']:animate-fade-out data-[state='open']:animate-fade-in"
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
                    'flex items-center text-muted-foreground justify-between rounded-[4px] px-1.5 py-0.5',
                    'hover:bg-button-accent-background hover:text-button-accent-foreground',
                    'focus-visible:bg-button-accent-background focus-visible:text-button-accent-foreground',
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
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default MenuPopover;
