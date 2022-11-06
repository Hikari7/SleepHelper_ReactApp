import React, { useContext } from "react";
import LightModeContext from "../../contexts/LightMode-context";
import "../../App.css";

function CategoryItem({ categoryName, handleVideo }) {
  const { lightMode } = useContext(LightModeContext);
  //console.log(lightMode);
  return (
    <>
      <div className="flex items-center justify-center mt-5 auto-cols-auto">
        <button
          className={`${
            lightMode ? "btn-color-light" : "btn-color"
          } rounded-2xl p-2 text-sm hover:bg-indigo-300  text-zinc-500 hover:text-pink-100 transition duration-0 hover:duration-700 ease-in w-4/12 md:w-6/12 h-12`}
          type="button"
          onClick={() => handleVideo(categoryName)}
        >
          {categoryName}
        </button>
      </div>
    </>
  );
}

export default CategoryItem;

//inspectで見ても、toggleはされているけどlightだけ反映させようとしても色が変わらない
