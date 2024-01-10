"use client";
import CardList from "./CardList";
import Hero from "./Hero";

const VideoList = ({ videoList }) => {
  const videosFeatured = videoList.filter((video) => video.is_featured);
  const videosPlaying = videoList.filter(
    (video) => video.state == "playing" || video.state == "live"
  );
  const videosScheduled = videoList.filter(
    (video) => video.state == "upcoming"
  );
  return (
    <>
      {videosFeatured.length > 0 ? <Hero videoList={videosFeatured} /> : null}
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
