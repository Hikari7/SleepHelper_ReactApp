import React, { useState } from "react";
import Header from "../Header";
import Categories from "./Categories";
import Video from "./Video";
import { Link } from "react-router-dom";

//video pageの1番の親

function VideosMain() {
  const [video, setVideo] = useState([]);

  return (
    <>
      <div className="">
        {/* <Header /> */}
        <Video video={video} />
        <Categories setVideo={setVideo} />
        <Link to="/">
          <button className="bg-transparent hover:bg-pink-200 text-pink-300 font-semibold hover:text-white py-1 px-4 border border-pink-400 hover:border-transparent rounded mt-5">
            Back
          </button>
        </Link>
      </div>
    </>
  );
}

export default VideosMain;
