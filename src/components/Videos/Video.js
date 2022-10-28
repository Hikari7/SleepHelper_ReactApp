import React from "react";
import VideoItem from "./VideoItem";

//Categoriesで、setVideoがすでに更新されているので、videoのpropsをここで使う

const Video = ({ video }) => {
  const renderedVideo = video.map((videoItem, index) => {
    return (
      <div key={index} className="">
        <VideoItem videoItem={videoItem} />
      </div>
    );
  });

  return <>{renderedVideo}</>;
};

export default Video;
