import React from "react";
import ReactPlayer from "react-player/youtube";
import mainImg from "../Videos/img/andriyko-podilnyk-keF8JuEFJww-unsplash.jpg";

function VideoItem({ videoItem }) {
  if (!videoItem) {
    return <div>Loading...</div>;
  }

  let randomNum = Math.floor(Math.random() * 11);
  const videoSrc = `https://www.youtube.com/embed/${videoItem.data.items[randomNum].id.videoId}`;

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   playing = !playing;
  //   if (playing) {
  //     playing = true;
  //   } else {
  //     playing = false;
  //   }
  // };

  return (
    <>
      <div className="h-full w-full">
        <img src={mainImg} />

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
          volume={0.5}
          height="100vh"
          width="100wh"
          style={{ opacity: "0" }}
        />
      </div>
    </>
  );
}

export default VideoItem;
