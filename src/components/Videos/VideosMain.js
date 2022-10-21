import React, { useState } from "react";
import Header from "../Header";
import Categories from "./Categories";
import CategoriesVideo from "./CategoriesVideo";
import Search from "./Search";

//video pageの1番の親

function VideosMain() {
  const [video, setVideo] = useState(null);

  return (
    <>
      <div className="mx-auto items-center justify-center">
        <Header />
        <CategoriesVideo setVideo={setVideo} />
        <Search />
        <Categories />
      </div>
    </>
  );
}

export default VideosMain;
