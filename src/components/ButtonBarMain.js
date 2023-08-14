import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchBtnBar } from "../Utils/SearchSlice";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
const ButtonBarMain = () => {
  const [inputValue, setInputValue] = useState("coding");
  const [videos, setvideos] = useState([]);
  const dispatch = useDispatch();

  const buttons = [
    "All",
    "Live",
    "Music",
    "trending",
    "AI",
    "Motivation",
    "Coding",
    "commedy",
    "chatgpt",
    "chandrayan-3",
  ];

  useEffect(() => {
    dispatch(searchBtnBar(inputValue));
    getByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const getByCategory = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputValue}&key=${process.env.REACT_APP_API_KEY}`
      );

      const data = await response.json();
      console.log(data.items);
      setvideos(data.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleButtonClick = (button) => {
    setInputValue(button);
    console.log(button);
  };

  if (!videos) {
    return null;
  }
  return (
    <>
      <div className="mt-2 ml-5">
        {buttons.map((button, index) => {
          return (
            <button
              className="m-1 p-1 px-2 mx-2 bg-slate-200 rounded-md text-xs"
              key={button}
              onClick={() => handleButtonClick(button)}
              // result={result}
            >
              {button}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap ml-5">
        {videos &&
          videos.map((video) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default ButtonBarMain;

//["All", "Live", "Music", "trending", "AI", "Motivation","Coding","All", "Live", "Music", "trending", "AI"];
