import React, { useState } from "react";
import LightModeContext from "./LightMode-context";

//LightModeの処理の内容を書く

const LightModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const lightTheme = {
    lightMode,
    setLightMode,
  };

  return (
    <LightModeContext.Provider value={lightTheme}>
      {children}
    </LightModeContext.Provider>
  );
};

export default LightModeProvider;
