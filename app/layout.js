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
      <body>
        <div className="mx-auto mt-12 mb-16 max-w-2xl px-4 md:px-6">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
