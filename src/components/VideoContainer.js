import VideoPlayer from "./VideoPlayer";
import LiveVideo from "./LiveVideo";
import Upcoming from "./Upcoming";
const VideoContainer = ({ video }) => {
  if (video.state == "live") {
    return <LiveVideo video={video} />;
  }
  if (video.state == "upcoming") {
    return <Upcoming video={video} />;
  }
  return (
    <div className="bg-zinc-950">
      <div className="flex justify-center flex-row h-[calc(100%-56px)]">
        <div className=")] xl:w-[calc(100%-400px)] y-auto">
          <VideoPlayer video={video} />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
