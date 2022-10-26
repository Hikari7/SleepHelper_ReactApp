import React from "react";

function VideoItem({ videoItem }) {
  if (!videoItem) {
    return <div>Loading...</div>;
  }

  let randomNum = Math.floor(Math.random() * 11);

  // const title = videoItem.data.items[randomNum].snippet.channelTitle;
  const videoSrc = `https://www.youtube.com/embed/${videoItem.data.items[randomNum].id.videoId}`;

  return (
    <>
      {/* {title} */}
      <iframe
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </>
  );
}

export default VideoItem;
