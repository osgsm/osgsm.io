import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GA_TRACKING_ID, pageview } from '../lib/gtag';
import GoogleAnalytics from '../components/googleanalytics';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {GA_TRACKING_ID && <GoogleAnalytics />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
