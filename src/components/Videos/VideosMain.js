import React, { useState } from "react";
import Header from "../Header";
import Categories from "./Categories";
import Video from "./Video";
import { Link } from "react-router-dom";

//video pageの1番の親

function VideosMain() {
  const [video, setVideo] = useState([]);

  return (
    <div className="main-bg main-font h-screen ">
      <Header />
      <Video video={video} />
      <Categories setVideo={setVideo} />
    </div>
  );
}

export default VideosMain;
