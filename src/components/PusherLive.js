"use client";
import { useEffect, useState } from "react";
import { pusherClient } from "@/lib/pusher";
import NotPlaying from "./NotPlaying";
import VideoPlayer from "./VideoPlayer";

const PusherLive = ({ video, permission }) => {
  const [connected, setConnected] = useState(true);
  // useEffect(() => {
  //   if (permission.canConnect) {
  //     pusherClient.subscribe(`channel-video-${video.id}`);
  //     setConnected(true);
  //   }
  //   return () => {
  //     if (connected) {
  //       pusherClient.unsubscribe(`channel-video-${video.id}`);
  //       pusherClient.disconnect();
  //     }
  //   };
  // }, []);

  return (
    <>
      {connected ? (
        <VideoPlayer video={video} />
      ) : (
        <NotPlaying message="Too many connections" />
      )}
    </>
  );
};

export default PusherLive;
