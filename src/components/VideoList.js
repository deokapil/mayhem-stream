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
      <div className="mt-20">
        {videosPlaying && (
          <CardList videos={videosPlaying} title="Watch & Play Now ..." />
        )}
      </div>
      <div className="mt-20">
        {videosScheduled && (
          <CardList videos={videosScheduled} title="Future Broadcasts ..." />
        )}
      </div>
    </>
  );
};

export default VideoList;
