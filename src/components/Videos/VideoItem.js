// import React from "react";

// function VideoItem({ videoItem }) {
//   if (!videoItem) {
//     return <div>Loading...</div>;
//   }

//   //   console.log(videoItem.data.items[0].snippet.thumbnails.medium.url);

//   const title = videoItem.data.items[0].snippet.channelTitle;
//   //   const thumbnail = videoItem.data.items[0].snippet.thumbnails.medium.url;
//   const videoSrc = `https://www.youtube.com/embed/${videoItem.data.items[0].id.videoId}`;

//   return (
//     <div>
//       {title}
//       {/* <img src={thumbnail} /> */}

//       <iframe
//         src={videoSrc}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       />
//     </div>
//   );
// }

// export default VideoItem;

import React from "react";

function VideoItem({ videoItem }) {
  if (!videoItem) {
    return <div>Loading...</div>;
  }

  //   console.log(videoItem.data.items[0].snippet.thumbnails.medium.url);

  const title = videoItem.data.items[0].snippet.channelTitle;
  //   const thumbnail = videoItem.data.items[0].snippet.thumbnails.medium.url;
  const videoSrc = `https://www.youtube.com/embed/${videoItem.data.items[0].id.videoId}`;

  return (
    <div>
      {title}
      {/* <img src={thumbnail} /> */}

      <iframe
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}

export default VideoItem;
