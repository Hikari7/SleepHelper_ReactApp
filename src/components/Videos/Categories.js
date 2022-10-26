import React, { useState } from "react";
import youtube from "../../apis/youtube";
import CategoryItem from "./CategoryItem";
import Search from "./Search";

function Categories({ setVideo }) {
  const categoryNames = [
    "Rain drops",
    "Ocean waves",
    "Forest",
    "City trafic sounds",
    "Relaxing music",
    "ASMR",
    "Whitenoise",
    "Cat purring",
    "Bed time stroy",
    "Ghibli",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  // const [result, setResult] = useState(false)

  const handleVideo = async (genre) => {
    const data = await youtube.get("/search", {
      params: {
        q: "sleep" + genre,
        maxResults: 5,
      },
    });
    setVideo([data]);
  };

  const inputValue = categoryNames.filter((filteredItem) => {
    return filteredItem.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Search categoryNames={categoryNames} setSearchQuery={setSearchQuery} />
      {inputValue.map((categoryName, index) => {
        // let isResult = true;
        return (
          <div key={index}>
            <CategoryItem
              handleVideo={handleVideo}
              categoryName={categoryName}
            />
          </div>

          // <div>
          //   {isResult ? (
          //     <div key={index}>
          //       <CategoryItem
          //         handleVideo={handleVideo}
          //         categoryName={categoryName}
          //       />
          //     </div>
          //   ) : (
          //     <span>There is no result</span>
          //   )}
          // </div>
        );
      })}
    </>
  );
}

export default Categories;
