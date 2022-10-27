import React from "react";

function CategoryItem({ categoryName, handleVideo }) {
  return (
    <>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3"> */}
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/12"> */}
      <div className="">
        <button
          className="rounded-2xl p-2 text-sm bg-indigo-300 hover:bg-indigo-400 opacity-9 text-zinc-500 hover:text-pink-100 mt-6 transition duration-0 hover:duration-700 ease-in "
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
