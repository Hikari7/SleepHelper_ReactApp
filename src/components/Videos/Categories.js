import React, { useState } from "react";
import youtube from "../../apis/youtube";
import CategoryItem from "./CategoryItem";
// import Iframe from "react-iframe";

function Categories({ setVideo }) {
  const handleVideo = async (genre) => {
    const data = await youtube.get("/search", {
      params: {
        q: genre,
      },
    });

    setVideo([data]);
  };

  //mapで回す？
  const categoryName = ["rain", "waves"];

  return (
    <>
      <CategoryItem
        CategoryItem={CategoryItem}
        handleVideo={handleVideo}
        categoryName={categoryName}
      />
    </>
  );
}

export default Categories;