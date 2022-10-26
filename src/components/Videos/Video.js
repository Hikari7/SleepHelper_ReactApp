import React from "react";
import VideoItem from "./VideoItem";

//Categoriesで、setVideoがすでに更新されているので、videoのpropsをここで使う

const Video = ({ video }) => {
  let randomNum = Math.floor(Math.random() * 11);
  const renderedVideo = video.map((videoItem, index) => {
    return (
      <div>
        <VideoItem
          videoItem={videoItem}
          // key={videoItem.data.items[randomNum].videoId}
          key={index}
        />
      </div>
    );
  });

  return <>{renderedVideo}</>;
};

//Categoriesを押したら、videoが表示される

export default Video;
