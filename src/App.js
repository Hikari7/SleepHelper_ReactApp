import "./App.css";
import Home from "./components/Home";
import VideosMain from "./components/Videos/VideosMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sound" element={<VideosMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;