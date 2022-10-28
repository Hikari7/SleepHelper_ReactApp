import React, { useState } from "react";
import Header from "../Header";
import Categories from "./Categories";
import Video from "./Video";
import DefaultImg from "../DefaultImg";

//video pageの1番の親

function VideosMain() {
  const [video, setVideo] = useState([]);

  // if (!!video) {
  //   return <DefaultImg />;
  // }

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
