import { useLocation } from 'react-router-dom';
import { memo, useContext, useEffect } from 'react';
import { OverlayContext } from './contexts/share/overlay.context';

const ScrollToTop = memo(() => {
  const { pathname } = useLocation();
  const overlaySetting = useContext(OverlayContext)
  

  useEffect(() => {
    console.clear()
    overlaySetting?.hideOverlay()
    scrollTo(0, 0);
  }, [pathname]);

  return null;
})

export default ScrollToTop;