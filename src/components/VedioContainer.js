import { useEffect, useState } from "react";
import { YT_VIDEO_URL } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YT_VIDEO_URL);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        // <VideoCard key={video.id} info={video} />
        <Link to={`/watch?v=${video.id}`}>
          {" "}
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
