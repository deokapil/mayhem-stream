import React from "react";
import Image from "next/image";

export function Thumbnail({ video }) {
  const thumbImage = video.video_thumb
    ? video.video_thumb
    : "/thumbnail_default.png";
  return (
    <div className=" relative inset-0 h-0 w-full pb-[50%]">
      <Image
        src={thumbImage}
        alt="Alternative"
        fill
        className="absolute inset-0 left-0 top-0 rounded-2xl"
      />
      <>
        {video.state == "live" ? (
          <Image
            src="/live.png"
            alt="live"
            width={40}
            height={20}
            className="absolute top-2 left-2 z-20"
          />
        ) : null}
      </>
      <>
        {video.thumb ? null : (
          <div className="absolute bottom-14 left-4 z-20 text-3xl font-bold text-cyan-100">
            {video.title}
          </div>
        )}
      </>
    </div>
  );
}
