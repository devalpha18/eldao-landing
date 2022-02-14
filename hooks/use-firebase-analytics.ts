import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';
import { firebaseApp } from '../utils/firebase';

const useFirebaseAnalytics = () => {
  const routers = useRouter();
  useEffect(() => {
    isSupported().then(supported => {
      // const analytics = getAnalytics(firebaseApp);
      /** 
      const logEvent = (url: string) => {
        analytics().setCurrentScreen(url);
        logEvent(analytics, 'screen_view');
      };
  
      routers.events.on('routeChangeComplete', logEvent);
      //For First Page
      logEvent(window.location.pathname);
  
      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
      */
    });
  }, []);
};

export default useFirebaseAnalytics;
