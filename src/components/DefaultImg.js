import React from "react";

const DefaultImg = () => {
  const mainImg = "https://source.unsplash.com/random/?night";
  return (
    <>
      <img
        src={mainImg}
        alt="picture"
        className="h-screen w-screen z-20 bg-no-repeat opacity-50 object-cover"
      />
    </>
  );
};

export default DefaultImg;
