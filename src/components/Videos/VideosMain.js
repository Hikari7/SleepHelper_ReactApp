import React, { useState } from "react";
import Header from "../Header";
import Categories from "./Categories";
import Video from "./Video";

function VideosMain() {
  const [video, setVideo] = useState([]);

  return (
    <>
      <div className="main-font main-bg">
        <Header />
        <Video video={video} />
        <Categories setVideo={setVideo} />
      </div>
    </>
  );
}

export default VideosMain;
