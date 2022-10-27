import React from "react";
import VideoItem from "./VideoItem";

//Categoriesで、setVideoがすでに更新されているので、videoのpropsをここで使う

const Video = ({ video }) => {
  const renderedVideo = video.map((videoItem, index) => {
    return (
      <div key={index}>
        <VideoItem videoItem={videoItem} />
      </div>
    );
  });

  return <>{renderedVideo}</>;
};

//Categoriesを押したら、videoが表示される

export default Video;
