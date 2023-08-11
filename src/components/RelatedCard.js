import React from "react";
import ButtonBar from "./ButtonBar";

const RelatedCard = ({results}) => {
  // console.log(results)
  return (
    <div className="overflow-x-auto ">
      <div>
        <div className=" w-56 m-2 p-1 shadow rounded-md cursor-pointer">
          <img
            // src={thumbnails.medium.url}
            alt="thumbnail"
            className="w-24 rounded-md"
          />
          <ul className=" m-1">
            {/* <img src="" alt="" /> */}
            {/* <li className="font-bold text-sm truncate ">{title}</li>
            <li className="text font-light ">{channelTitle}</li>
            <div className="flex text-xs ">
              <li className=" font-extralight ">{viewCount} views</li>
              <li className=" font-extralight ml-2 list-disc list-inside ">
                {" "}
                {timeAgo(publishedAt)}
              </li> 
            </div>*/}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
