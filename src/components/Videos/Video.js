import React from "react";
import VideoItem from "./VideoItem";

//Categoriesで、setVideoがすでに更新されているので、videoのpropsをここで使う

const Video = ({ video }) => {
  // console.log(video);
  // console.log(video.data.items.snippet.description);
  // {video.snippet}

  const renderedVideo = video.map((videoItem) => {
    return (
      <div>
        <VideoItem
          videoItem={videoItem}
          key={videoItem.data.items[0].videoId}
        />
      </div>
    );
  });

  //mapを書く
  return <>{renderedVideo}</>;
};

//Categoriesを押したら、videoが表示される

export default Video;