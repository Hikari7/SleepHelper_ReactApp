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
      <div className="h-full">
        {/* <div className="h-full pointer-events-none"> */}
        {/* <iframe src="https://giphy.com/embed/M9kzInOzNxFs68P3fH"> */}
        <ReactPlayer
          url={videoSrc}
          config={{
            youtube: {
              playerVars: {
                color: "white",
                modestbranding: true,
                showinfo: 1,
              },
            },
          }}
          volume={0.2}
          playing={true}
          height="50vh"
          width="50wh"
          style={{ opacity: "1" }}
          playIcon={
            <div
              className="play-icon"
              role="button"
              tabIndex={0}
              style={{ outline: "none" }}
            >
              {" "}
              <img src="/images/play.png" alt="" />
            </div>
          }
          light={"https://giphy.com/embed/M9kzInOzNxFs68P3fH"}
        />{" "}
        {/* </iframe> */}
      </div>
    </>
  );
}

export default VideoItem;
