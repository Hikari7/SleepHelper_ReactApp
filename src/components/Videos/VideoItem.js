import React from "react";

function VideoItem({ videoItem }) {
  if (!videoItem) {
    return <div>Loading...</div>;
  }

  //   console.log(videoItem.data.items[0].snippet.channelTitle);
  console.log(videoItem.data.items[0].snippet);
  const test = videoItem.data.items[0].snippet.channelTitle;

  return <div>{test}</div>;
}

export default VideoItem;
