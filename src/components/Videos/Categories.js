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
    "Whitenoise",
    "Cat purring",
    "Meditaion",
    "Relaxing music",
    "Piano",
    "Ghibli",
    "Disney",
    "Lofi",
    "ASMR whispering",
    "ASMR tapping",
    "ASMR keyboard typing",
    "ASMR cooking",
    "Relaxing bed time stroy",
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
      <div className="main-bg main-font ">
        <Search
          categoryNames={categoryNames}
          setSearchQuery={setSearchQuery}
          handleVideo={handleVideo}
        />
        <div className="md:container lg:container  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 content-center">
          {inputValue.map((categoryName, index) => {
            return (
              <div key={index} className="">
                <CategoryItem
                  handleVideo={handleVideo}
                  categoryName={categoryName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
