import React from "react";
import DefaultImg from "../DefaultImg";
import VideoItem from "./VideoItem";

//Categoriesで、setVideoがすでに更新されているので、videoのpropsをここで使う

const Video = ({ video }) => {
  const renderedVideo = video.map((videoItem, index) => {
    // if (!!videoItem) {
    //   return <DefaultImg />;
    // }

    return (
      <div key={index} className="">
        <VideoItem videoItem={videoItem} />
      </div>
    );
  });

  //if [].length===0;
  if (video.length === 0) {
    return <DefaultImg />;
  }
  return <>{renderedVideo}</>;
};

export default Video;

// const DefaultImg = () => {
// if (!video) {
//   return (
//     <div>
//       aaa
//       <DefaultImg />
//     </div>
//   );
// }
// };

// if (!!videoItem) {
//   return <div>Loading...</div>;
// }
