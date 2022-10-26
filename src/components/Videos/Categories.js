import React, { useState } from "react";
import youtube from "../../apis/youtube";
import CategoryItem from "./CategoryItem";
import Search from "./Search";


// import Iframe from "react-iframe";

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
          <>
            <CategoryItem
              handleVideo={handleVideo}
              categoryName={categoryName}
              key={index}
            />
          </>
        );
      })}
    </>
  );
}

export default Categories;
