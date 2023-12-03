import Header from '../components/header';
import { ThemeProvider } from '../components/theme-provider';

import '../styles/global.css';

export const metadata = {
  title: {
    default: "osgsm's personal website",
    template: "%s | osgsm's personal website",
  },
  openGraph: {
    title: "osgsm's personal website",
    url: 'https://osgsm.io',
    images: '/assets/osgsm-banner.png',
    type: 'website',
  },
  twitter: {
    title: "osgsm's personal website",
    card: 'summary_large_image',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body className="bg-background text-foreground selection:bg-twilight-indigo-100 dark:selection:bg-twilight-indigo-900">
        <ThemeProvider>
          <Header />
          <main>
            <div>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
