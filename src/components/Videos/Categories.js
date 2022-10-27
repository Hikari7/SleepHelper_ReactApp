import React, { useState } from "react";
import youtube from "../../apis/youtube";
import CategoryItem from "./CategoryItem";
import Search from "./Search";

function Categories({ setVideo }) {
  const categoryNames = [
    "Rain drops",
    "Ocean waves",
    "Forest nature",
    "City trafic sounds",
    "Relaxing music",
    "ASMR",
    "Whitenoise",
    "Cat purring",
    "Bed time stroy",
    "Ghibli",
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleVideo = async (genre) => {
    const data = await youtube.get("/search", {
      params: {
        q: "sleep" + genre,
        maxResults: 10,
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
        return (
          <div
            key={index}
            // className="sm:container md:container lg:container  mx-auto w-16"
            className="sm:container md:container lg:container  mx-auto w-16"
          >
            <CategoryItem
              handleVideo={handleVideo}
              categoryName={categoryName}
            />
          </div>
        );
      })}
    </>
  );
}

export default Categories;
