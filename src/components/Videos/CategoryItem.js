import React from "react";

function CategoryItem({ categoryName, handleVideo }) {
  return (
    <>
      <ul>
        <li>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 my-6"
            type="button"
            onClick={() => handleVideo(categoryName)}
          >
            {categoryName}
          </button>
        </li>
      </ul>
    </>
  );
}

export default VideoItem;
