import * as React from "react";
import { useLocation } from "react-router-dom";

function UtilScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default UtilScrollToTop;
