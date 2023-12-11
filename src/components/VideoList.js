"use client";
import CardList from "./CardList";
import Hero from "./Hero";

const VideoList = ({ videoList }) => {
  const videosLive = videoList.filter((video) => video.state == "live");
  const videosPlaying = videoList.filter((video) => video.state == "playing");
  const videosScheduled = videoList.filter(
    (video) => video.state == "scheduled"
  );
  return (
    <>
      <Hero videoList={videosLive} />
      <div>
        {videosPlaying && (
          <CardList videos={videosPlaying} title="Playing Now" />
        )}
      </div>
      <div>
        {videosScheduled && (
          <CardList videos={videosScheduled} title="Comming up later ..." />
        )}
      </div>
    </>
  );
};

export default VideoList;
