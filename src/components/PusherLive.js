"use client";
import { useEffect, useState } from "react";
import VideoJsPlayer from "./VideoJsPlayer";
import { pusherClient } from "@/lib/pusher";
import NotPlaying from "./NotPlaying";

const PusherLive = ({ video, permission }) => {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    if (permission.canConnect) {
      pusherClient.subscribe(`channel-video-${video.id}`);
      setConnected(true);
    }
    return () => {
      if (connected) {
        pusherClient.unsubscribe(`channel-video-${video.id}`);
        pusherClient.disconnect();
      }
    };
  }, []);

  return (
    <>
      {connected ? (
        <VideoJsPlayer url={video.video_url} videoId={video.id} />
      ) : (
        <NotPlaying message="Too many connections" />
      )}
    </>
  );
};

export default PusherLive;
