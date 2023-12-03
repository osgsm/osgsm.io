'use client';

import { useEffect, useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        rootElement.classList.add('dark');
      } else {
        rootElement.classList.remove('dark');
      }
    } else if (theme === 'dark') {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.selected_theme === 'system') {
      setTheme('system');
    } else if (localStorage.selected_theme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (()=>{let e=document.documentElement;"selected_theme"in localStorage||(localStorage.selected_theme="system"),"system"===localStorage.selected_theme?window.matchMedia("(prefers-color-scheme: dark)").matches?e.classList.add("dark"):e.classList.remove("dark"):"dark"===localStorage.selected_theme?e.classList.add("dark"):e.classList.remove("dark");let s=s=>{"system"===localStorage.selected_theme&&(s.matches?e.classList.add("dark"):e.classList.remove("dark"))};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s)})();
          `,
        }}
      />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
