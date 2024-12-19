
import { memo } from "react";

import "./styles/tailwind/output/output.css";
import AppContent from "./AppContent";

const AppWrapper = memo(() => {

  // If We Have Dark Mode, Set This Class In Here
  return (
    <div 
      id="app-wrapper"
      className={``}
    >
      <AppContent/>
    </div>
  );
});

export default AppWrapper;
