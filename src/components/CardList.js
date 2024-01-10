import React from "react";
import Title from "./Title";
import { BsCollectionFill } from "react-icons/bs";
import Link from "next/link";
import { Thumbnail } from "./Tumbnail";
import { UserImage, VideoDescription, VideoTitle } from "./VideoComponents";
import moment from "moment";
const CardList = ({ videos, title }) => {
  return (
    <>
      <Title title={title} Icon={BsCollectionFill} />
      <div className=" mx-auto grid grid-cols-1 gap-x-4 gap-y-8 md:mx-0 md:max-w-none md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:max-w-none xl:grid-cols-3 2xl:mx-0 2xl:max-w-none 2xl:grid-cols-3">
        {videos.map((video) => {
          return (
            <Link
              href={`/watch?video=${video.id}`}
              className="flex flex-col items-start justify-between hover:bg-gray-900"
              key={video.id}
            >
              <div className="relative w-full pb-2">
                <Thumbnail video={video} />
                <div className="max-w-xl">
                  <div className="items-top relative mt-4 pl-2 flex gap-x-4 ">
                    <UserImage />
                    <div className="w-full">
                      <VideoTitle title={video.title} limitHeight={true} />
                      <div className="mt-1 flex max-h-6 items-start overflow-hidden text-sm">
                        <p className=" text-gray-600">
                          {video.schedule &&
                            moment(video.schedule).format(
                              "MMMM Do YYYY, h:mm a"
                            )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
