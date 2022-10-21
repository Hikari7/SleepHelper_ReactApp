import React from "react";
import CategoriesVideo from "./CategoriesVideo";
// import Iframe from "react-iframe";

//CategoriesがCategoriesVideoの親であると私は認識しているよ

function Categories({}) {
  const handleVideo = () => {
    console.log("clicked");
  };

  return (
    <>
      <ul>
        <li>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
            onClick={() => handleVideo()}
          >
            Rain
          </button>
        </li>
        {/* <li>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
          >
            Rain
          </button>
        </li>
        <li>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
          >
            Rain
          </button>
        </li> */}
      </ul>
    </>
  );
}

export default Categories;
