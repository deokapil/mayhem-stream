import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { AiFillPlayCircle } from "react-icons/ai";
import { VideoDescription } from "./VideoComponents";

const Hero = ({ videoList }) => {
  let video = null;
  if (videoList.length > 0) {
    video = videoList[0];
  }

  const thumbImage = video.thumb ? video.video_thumb : "/background.jpg";
  return (
    <Link href={`watch?video=${video.id}`}>
      <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 border-2 rounded-lg  border-zinc-300">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            {video.title}
          </h1>
          {video.state == "live" ? (
            <Image src="/live.png" alt="live" width={40} height={20} />
          ) : null}
          {video.state === "upcoming" ? (
            <h2>Starts Streaming on </h2>
          ) : (
            <button className="btn btn-success">
              <AiFillPlayCircle />
              Watch Now
            </button>
          )}
          <div>
            <VideoDescription description={video.description} />
          </div>

          <div className="mt-1 flex max-h-6 items-start overflow-hidden text-lg">
            <p className=" text-gray-50 ">
              {video.schedule &&
                moment(video.schedule).format("MMMM Do YYYY, h:mm a")}
            </p>
          </div>
        </div>
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image src={thumbImage} alt="anime" fill className="object-contain" />
        </div>
      </header>
    </Link>
  );
};

export default Hero;
