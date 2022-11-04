import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import Light from "./components/Lightmode";
//import Styles from "./App.css";

//valueをglobalで使うためにここで宣言(appの方がいいんかな？)
//あーー今でもデフォルトでダークにしてるけど、ダーク用で作ったがいいんかな

// const lightTheme = {
//   //css??

//   lightBg: {
//     backgroundColor: "#586284",
//   },
//   lightBtn: {
//     backgroundColor: "#c7cee4",
//   },
//   //style={lightTheme}
// };

//const LightThemeContext = createContext(lightTheme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<LightThemeContext.Provider value={lightTheme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </LightThemeContext.Provider>
);

//export default LightThemeContext;
