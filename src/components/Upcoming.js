import Image from "next/image";
import React from "react";
import { Thumbnail } from "./Tumbnail";

const Upcoming = ({ video }) => {
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)]">
      <div className=")] xl:w-[calc(100%-400px)] y-auto">
        <div className="py-4">
          <Thumbnail video={video} />
          <div className="my-2 text-4xl font-bold text-center">
            Coming up soon ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
