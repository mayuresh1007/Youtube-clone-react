import { useEffect, useState } from "react";
import { YT_VIDEO_URL } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getVideos = async () => {
    console.log(process.env.REACT_APP_API_KEY)
    const data = await fetch(YT_VIDEO_URL + process.env.REACT_APP_API_KEY);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
    console.log(videos);
  };
  return (
    <div className="flex flex-wrap ml-5">
      {videos &&
        videos.map((video) => (
          // <VideoCard key={video.id} info={video} />
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VedioContainer;
