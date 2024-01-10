import VideoPlayer from "./VideoPlayer";
import LiveVideo from "./LiveVideo";
const VideoContainer = ({ video }) => {
  return (
    <div className="bg-zinc-950">
      {video.state == "live" ? (
        <LiveVideo video={video} />
      ) : (
        <div className="flex justify-center flex-row h-[calc(100%-56px)]">
          <div className=")] xl:w-[calc(100%-400px)] y-auto">
            <VideoPlayer video={video} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
