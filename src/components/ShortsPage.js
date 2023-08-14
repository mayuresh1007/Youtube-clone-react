import React, { useEffect, useState } from "react";
import { YT_VIDEO_URL } from "../Utils/Constants";
const ShortsPage = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
    getshorts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getVideos = async () => {
    const data = await fetch(YT_VIDEO_URL + process.env.REACT_APP_APPI_KEY);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
    console.log(videos);
  };
  const getshorts = async () => {
    if (videos === true) {
      const data = await fetch(
        "https://yt.lemnoslife.com/videos?part=short&id=" + videos.id
        //   "https://yt.lemnoslife.com/videos?part=short&id=SCBH4gqZy8s"
      );
      // const data = await fetch("https://www.youtube.com/shorts/SCBH4gqZy8s");
      const json = await data.json();
      console.log(json);
    }
  };
  return (
    <div className="col-span-11 flex">
      <div className="justify-center ml-80 my-2 ">
        {videos &&
          videos.map((video) => (
            <iframe
              key={videos.id}
              className="rounded-3xl h-full"
              width="320"
              height="560"
              src="https://www.youtube.com/embed/SCBH4gqZy8s"
              title="How Fogg (the deodorant) used a Simple Marketing Strategy to beat brand AXE?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        <iframe
          key={videos.id}
          className="rounded-3xl h-full"
          width="320"
          height="560"
          src="https://www.youtube.com/embed/SCBH4gqZy8s"
          title="How Fogg (the deodorant) used a Simple Marketing Strategy to beat brand AXE?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        ;
      </div>
      <div className="flex-col flex justify-around ml-7">
        <button className="border border-slate-900 m-2 p-4 mt-8 rounded-full ">
          {" "}
          ↑{" "}
        </button>
        <button className="border border-slate-900 m-2 p-4 rounded-full ">
          {" "}
          ↓{" "}
        </button>
      </div>
    </div>
  );
};

export default ShortsPage;

// {
//   /* <Link to={`/watch?v=${video.id}`} key={video.id}>
//             <VideoCard info={video} />
//           </Link> */
// }
