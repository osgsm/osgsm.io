import { useContext } from 'react';
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import * as Popover from '@radix-ui/react-popover';
import { twJoin, twMerge } from 'tailwind-merge';
import { ThemeContext } from './theme-provider';

const themes = [
  {
    name: 'light',
    icon: <SunIcon />,
  },
  {
    name: 'dark',
    icon: <MoonIcon className="!h-4 !w-4" />,
  },
  {
    name: 'system',
    icon: <ComputerDesktopIcon className="!h-4 !w-4" />,
  },
];

const ThemePopover = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Popover.Root>
      <Popover.Trigger
        className={twJoin(
          'grid h-8 w-8 items-center justify-center rounded-md',
          'hover:bg-button-accent-background hover:text-button-accent-foreground',
          'focus-visible:bg-button-accent-background focus-visible:text-button-accent-foreground',
        )}
      >
        <MoonIcon className="ease invisible col-span-full row-span-full h-5 w-5 translate-y-1 opacity-0 transition-transform duration-500 dark:visible dark:translate-y-0 dark:opacity-100 dark:duration-300" />
        <SunIcon className="ease visible col-span-full row-span-full h-6 w-6 translate-y-0 opacity-100 transition-transform duration-300 dark:invisible dark:translate-y-1 dark:opacity-0 dark:duration-500" />
      </Popover.Trigger>
      <Popover.Content
        align="end"
        asChild
        sideOffset={8}
        className="data-[state='open']:animate-fade-in"
      >
        <div
          className={twJoin(
            'flex min-w-[104px] flex-col rounded-xl border border-border bg-background p-2',
            '[&>*+*]:mt-1',
          )}
        >
          {themes.map(({ name, icon }) => {
            const isActive = name === theme;
            return (
              <Popover.Close key={name} asChild>
                <button
                  onClick={() => {
                    setTheme(name);
                    localStorage.selected_theme = name;
                  }}
                  className={twMerge(
                    'flex items-center text-muted-foreground justify-between gap-2 rounded-[4px] px-1.5 py-0.5',
                    'hover:bg-button-accent-background hover:text-button-accent-foreground',
                    '[@media(any-hover:hover)and(any-pointer:fine)]focus-visible:bg-button-accent-background [@media(any-hover:hover)and(any-pointer:fine)]:focus-visible:text-button-accent-foreground',
                    isActive && 'text-foreground',
                  )}
                >
                  <span className="flex items-center gap-[0.375rem]">
                    <span className="grid h-5 w-5 place-content-center [&>*]:h-full [&>*]:w-full">
                      {icon}
                    </span>
                    {name.at(0).toUpperCase() + name.slice(1)}
                  </span>
                  <span
                    className={twMerge(
                      'ml-2 inline-block h-1.5 w-1.5 rounded-full bg-transparent',
                      isActive &&
                        'bg-twilight-indigo-500 dark:bg-twilight-indigo-600',
                    )}
                  ></span>
                </button>
              </Popover.Close>
            );
          })}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default ThemePopover;
