import VideoPlayer from "./VideoPlayer";
import LiveVideo from "./LiveVideo";
const VideoContainer = ({ video }) => {
  return (
    <div className="bg-zinc-950">
      <div className="text-xl text-center py-2 my-2">{video.title}</div>
      <div className="flex justify-center flex-row h-[calc(100%-56px)]">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          {video.state == "live" ? (
            <LiveVideo video={video} />
          ) : (
            <VideoPlayer video={video} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
