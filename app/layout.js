import Header from '../components/header';

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
      <body className="bg-background text-foreground">
        <div>
          <Header />
          <main className="px-4 md:px-6">
            <div className="mx-auto max-w-2xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
