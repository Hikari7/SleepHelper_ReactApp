import React, { useState } from "react";
import youtube from "../../apis/youtube";
import CategoryItem from "./CategoryItem";
// import Iframe from "react-iframe";

// function Categories({ setVideo }) {
//   const handleVideo = async (categoryName) => {
//     const data = await youtube.get("/search", {
//       params: {
//         q: categoryName,
//       },
//     });

//     setVideo([data]);
//   };

//   return (
//     <>
//       <CategoryItem handleVideo={handleVideo} categoryName="raindrops" />
//       <CategoryItem handleVideo={handleVideo} categoryName="waves" />
//       <CategoryItem handleVideo={handleVideo} categoryName="white noise" />
//       <CategoryItem handleVideo={handleVideo} categoryName="cat purring" />
//       <CategoryItem handleVideo={handleVideo} categoryName="forest" />
//       <CategoryItem handleVideo={handleVideo} categoryName="ghibli" />
//     </>
//   );
// }

function Categories({ setVideo }) {
  const handleVideo = (genre) => {
    const data = youtube.get("/search", {
      params: {
        q: genre,
      },
    });

    setVideo(data);
  };

  return (
    <>
      <ul>
        <li>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 my-6"
            type="button"
            onClick={() => handleVideo("rain")}
          >
            Rain
          </button>
        </li>
        <li>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 my-6"
            type="button"
            onClick={() => handleVideo("ocean")}
          >
            Ocian waves
          </button>
        </li>
      </ul>
    </>
  );
}

export default Categories;
