import React from "react";
import ReactPlayer from "react-player/youtube";

function VideoItem({ videoItem }) {
  if (!videoItem) {
    return <div>Loading...</div>;
  }

  let randomNum = Math.floor(Math.random() * 11);
  const videoSrc = `https://www.youtube.com/embed/${videoItem.data.items[randomNum].id.videoId}`;

  return (
    <>
      {/* <div style={{ height: "100vh", opacity: "0" }}> */}
      <ReactPlayer
        style={{ opacity: "1" }}
        // controls={false}
        light={true}
        // playing={playing}
        url={videoSrc}
        height="300px"
        width="300px"
        volume={0.101}
        loop={true}
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      {/* </div> */}
    </>
  );
}

export default VideoItem;
