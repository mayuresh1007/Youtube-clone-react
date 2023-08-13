import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/Appslice";
import { useSearchParams } from "react-router-dom";
import { YT_BY_ID, API_KEY } from "../Utils/Constants";
import { timeAgo } from "../Utils/helper";
import CommentsSection from "./CommentsSection";
import WatchSider from "./WatchSider";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  const VideoId = searchParams.get("v");

  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    const data = await fetch(YT_BY_ID + VideoId + "&key=" + API_KEY);
    const json = await data.json();
    // console.log(json);
    setVideoInfo(json.items[0]);
  };

  const { snippet, statistics } = videoInfo;
  // console.log(videoInfo)

  return (
    <>
      <div className=" mt-2 ml-16  ">
        <iframe
          width="650"
          height="350"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className=" px-2 w-[650px] rounded">
          <ul className=" mt-2 ">
            <li className="font-bold text-lg w-[650px]">{snippet?.title}</li>
            <li className="text font-semibold ">{snippet?.channelTitle}</li>
            <div className="flex  ">
              <li className=" font-extralight ">
                {statistics?.viewCount} views
              </li>
              <li className=" font-extralight ml-2 list-disc list-inside ">
                {" "}
                {timeAgo(snippet?.publishedAt)}
              </li>
            </div>
          </ul>
        </div>

        {/* <hr /> */}
        <div className="rounded-lg bg-gray-100 p-3 w-[650px] ">
          <h1 className="font-bold">Description</h1>
          <h1 className="fornt italic text-xs text-ellipsis overflow-hidden  max-h-40">
            {snippet?.description}
          </h1>
        </div>
        <div className="m-1">
          <h1 className="font-bold">{statistics?.commentCount} Comments</h1>
        </div>

        <CommentsSection VideoId={VideoId} />
      </div>
      <div>
        <WatchSider />
      </div>
    </>
  );
};

export default WatchPage;
