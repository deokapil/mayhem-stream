import { getVideoPermission } from "@/app/_actions";
import PusherLive from "./PusherLive";

// check permission
// subscribe to pusher
// load video
const LiveVideo = async ({ video }) => {
  const permission = await getVideoPermission(video.id);

  return (
    <div>
      <PusherLive video={video} permission={permission} />
    </div>
  );
};

export default LiveVideo;
