import React from "react";
import { timeAgo } from "../Utils/helper";
const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className=" w-60 m-2 p-1 shadow rounded-md cursor-pointer">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="w-60 rounded-md"
      />
      <ul className=" m-1">
        {/* <img src="" alt="" /> */}
        <li className="font-bold text-sm truncate ">{title}</li>
        <li className="text font-light ">{channelTitle}</li>
        <div className="flex text-xs ">
          <li className=" font-extralight ">{viewCount} views</li>
          <li className=" font-extralight ml-2 list-disc list-inside "> {timeAgo(publishedAt)}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
