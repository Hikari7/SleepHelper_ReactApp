import "./App.css";
import Home from "./components/Home";
import VideosMain from "./components/Videos/VideosMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LightModeProvider from "./contexts/LightModeProvider";

// export const LightThemeContext = createContext();

function App() {
  return (
    <div>
      <LightModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sound" element={<VideosMain />} />
          </Routes>
        </Router>
      </LightModeProvider>
    </div>
  );
}

export default App;
// const [lightMode, setLightMode] = useState({});

// const lightCheck = {
//   lightMode,
//   setLightMode,
//   lightBg: {
//     backgroundColor: "#586284",
//   },
//   lightBtn: {
//     backgroundColor: "#c7cee4",
//   },
// };

// const lightTheme = {
//   lightBg: {
//     backgroundColor: "#586284",
//   },
//   lightBtn: {
//     backgroundColor: "#c7cee4",
//   },
// };

//valueで渡された値がグローバルになってどこのコンポーネントにも呼び出せるようになる
