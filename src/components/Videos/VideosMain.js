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
      {/* <div className="flex item-center justify-center h-screen w-screen"> */}
      <Categories setVideo={setVideo} />
      {/* <Link to="/">
          <button className="rounded-2xl p-4 btn-color hover:bg-indigo-300  text-zinc-500 hover:text-pink-100 transition duration-0 hover:duration-700 ease-in flex justify-centers my-9 m-auto ">
            Back
          </button>
        </Link> */}
      {/* </div> */}
    </div>
  );
}

export default VideosMain;
