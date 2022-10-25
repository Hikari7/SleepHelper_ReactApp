import React, { useState } from "react";
import Header from "../Header";
import Categories from "./Categories";
import Video from "./Video";
import Search from "./Search";

//video pageの1番の親

function VideosMain() {
  const [video, setVideo] = useState([]);

  return (
    <>
      <div className="">
        <Header />
        <Video video={video}/>
        <Search />
        <Categories setVideo={setVideo}  />
      </div>
    </>
  );
}

export default VideosMain;