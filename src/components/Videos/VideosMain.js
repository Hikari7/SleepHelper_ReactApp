import React, { useState, useContext } from "react";
import Header from "../Header";
import Categories from "./Categories";
import Video from "./Video";
// import LightModeContext from "../../";
import LightModeContext from "../../contexts/LightMode-context";

function VideosMain() {
  // const lightTheme = useContext(LightModeContext);
  const { lightMode } = useContext(LightModeContext);
  const [video, setVideo] = useState([]);

  return (
    <>
      <div className={`${lightMode ? "main-bg-light" : "main-bg"} main-font`}>
        <Header />
        <Video video={video} />
        <Categories setVideo={setVideo} />
      </div>
    </>
  );
}

export default VideosMain;
