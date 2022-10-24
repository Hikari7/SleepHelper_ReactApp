import React from "react";

//Categoriesで、setVideoがすでに更新されているので、videoのpropsをここで使う

const Video = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  // console.log(video);

  // console.log(video.data.items.snippet.description);

  //mapを書く
  return (
    <>
      {video.map((videoItem) => {
        return <div>{videoItem.snippet.title}</div>;
      })}
    </>
  );
};

//Categoriesを押したら、videoが表示される

export default Video;
