"use client";

import { cn } from "@/lib/cn";

import { Command } from "cmdk";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface CommandItemProps extends React.ComponentProps<typeof Command.Item> {
  children: React.ReactNode;
}

const CommandItem = ({ children, className, ...props }: CommandItemProps) => {
  return (
    <Command.Item
      className={cn(
        "flex items-center gap-2 rounded-md p-2",
        "hover:bg-iris-4 hover:text-iris-11",
        "aria-selected:bg-iris-4 aria-selected:text-iris-11",
        className,
      )}
      {...props}
    >
      {children}
    </Command.Item>
  );
};

export const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      loop
      contentClassName="fixed inset-0 z-50 grid place-items-center pointer-events-none backdrop-blur-md backdrop-brightness-50"
      className="pointer-events-auto relative min-w-72 rounded-xl border border-iris-4 bg-iris-2 leading-snug"
    >
      <div className="border-iris-4 border-b px-4 py-3">
        <Command.Input
          placeholder="Type a command or search..."
          className="bg-transparent outline-none placeholder:text-iris-8"
        />
      </div>
      <Command.List className="p-2">
        <Command.Empty className="p-2 text-iris-10">
          No results found.
        </Command.Empty>
        <CommandItem
          onSelect={() => {
            setTheme("dark");
            setOpen(false);
          }}
        >
          <Moon size={16} />
          Change theme to dark
        </CommandItem>
        <CommandItem
          onSelect={() => {
            setTheme("light");
            setOpen(false);
          }}
        >
          <Sun size={16} />
          Change theme to light
        </CommandItem>
      </Command.List>
    </Command.Dialog>
  );
};
