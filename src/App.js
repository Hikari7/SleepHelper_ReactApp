import "./App.css";
import Home from "./components/Home";
import VideosMain from "./components/Videos/VideosMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext } from "react";

import "./App.css";

function App() {
  //フラグを使う
  const [light, setLight] = useState(false);
  const toggleLight = () => {
    setLight(!light);
  };

  const LightThemeContext = createContext();
  const lightTheme = {
    lightBg: {
      backgroundColor: "#586284",
    },
    lightBtn: {
      backgroundColor: "#c7cee4",
    },
    //style={lightTheme}
  };

  return (
    <div>
      <LightThemeContext.Provider value={(lightTheme, toggleLight)}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sound" element={<VideosMain />} />
          </Routes>
        </Router>
      </LightThemeContext.Provider>
    </div>
  );
}

export default App;
