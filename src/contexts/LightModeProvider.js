import React, { Children, useState } from "react";
import LightModeContext from "./LightMode-context";

//LightModeの処理の内容を書く

const LightModeProvider = () => {
  const [lightMode, setLightMode] = useState();

  const lightTheme = {
    lightMode,
    setLightMode,
    lightBg: {
      backgroundColor: "#586284",
    },
    lightBtn: {
      backgroundColor: "#c7cee4",
    },
  };

  return (
    <LightModeContext.Provider value={lightTheme}>
      {Children}
    </LightModeContext.Provider>
  );
};

export default LightModeProvider;
