import { BsArrowLeftCircleFill } from "react-icons/bs";
import NotPlaying from "@/components/NotPlaying";
import VideoContainer from "@/components/VideoContainer";
import Link from "next/link";
import { getVideoById } from "../_actions";

const Watch = async ({ searchParams }) => {
  const { video } = searchParams;
  const res = await getVideoById(video);

  return (
    <div className="container mx-auto bg-black p-6 mb-12 ">
      <div className="nav">
        <Link href="/">
          <button className="btn">
            <BsArrowLeftCircleFill />
          </button>
        </Link>
      </div>
      <div className="my-2">
        {res.state != "finished" ? (
          <VideoContainer video={res} />
        ) : (
          <NotPlaying />
        )}
      </div>
    </div>
  );
};

export default Watch;
