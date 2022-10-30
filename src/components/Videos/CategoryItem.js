import React from "react";

function CategoryItem({ categoryName, handleVideo }) {
  return (
    <>
      {/* <div className="my-10"> */}
        <div className="flex items-center justify-center mt-5 auto-cols-auto">
          <button
            className="rounded-2xl p-2 text-sm btn-color hover:bg-indigo-300  text-zinc-500 hover:text-pink-100 transition duration-0 hover:duration-700 ease-in w-4/12 md:w-6/12 h-12"
            type="button"
            onClick={() => handleVideo(categoryName)}
          >
            {categoryName}
          </button>
        </div>
      {/* </div> */}
    </>
  );
}

export default CategoryItem;
