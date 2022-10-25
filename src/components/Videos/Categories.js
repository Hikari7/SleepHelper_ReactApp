import React, { useState } from "react";
import youtube from "../../apis/youtube";
import CategoryItem from "./CategoryItem";
// import Iframe from "react-iframe";

function Categories({ setVideo }) {
  //handleVideo("rain")の引数がgenre
  const handleVideo = async (genre) => {
    const data = await youtube.get("/search", {
      params: {
        q: genre,
      },
    });

    setVideo([data]);
  };

  const categoryNames = ["raindrops", "waves", "ghibli"];
  return (
    <>
      {categoryNames.map((categoryName, index) => {
        return (
          <CategoryItem
            handleVideo={handleVideo}
            categoryName={categoryName}
           key={index}
          />
        );
      })}
    </>
  );
}

export default Categories;