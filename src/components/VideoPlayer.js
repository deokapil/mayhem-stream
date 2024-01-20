"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video }) => {
  const [isPlayerAvailable, setIsPlayerAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPlayerAvailable(true);
    }
  }, []);
  const videoUrl = video.state == "live" ? video.video_url : video.video_cdn;
  return (
    <div className="py-4">
      {isPlayerAvailable && (
        <ReactPlayer
          url={videoUrl}
          // url={url1}
          controls={true}
          style={{ borderRadius: "1 rem", overflow: "hidden" }}
          className="bg-dark overflow-hidden"
          width={"100%"}
          height={"50%"}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
