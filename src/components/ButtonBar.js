import { useEffect, useState } from "react";
import { API_KEY } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { searchBtnBar } from "../Utils/SearchSlice";
import { timeAgo } from "../Utils/helper";
import RelatedCard from "./RelatedCard";

const ButtonBar = () => {
  const [inputValue, setInputValue] = useState("trending");
  const [result, setResult] = useState([]);
  // const searchBtn = useSelector((store) => store.app.searchBtn);
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
  }, [inputValue]);

  const getByCategory = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${inputValue}&key=${API_KEY}`
      );

      const data = await response.json();
      console.log(data.items);
      setResult(data.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleButtonClick = (button) => {
    setInputValue(button);
    console.log(button);
  };

  if (!result) {
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
      {result && <RelatedCard results={result} />}
    </>
  );
};

export default ButtonBar;

//["All", "Live", "Music", "trending", "AI", "Motivation","Coding","All", "Live", "Music", "trending", "AI"];

{
  /* <div className="overflow-x-auto ml-5">
        <div>
          {result.map((item) => (
            <div
              key={item.id.videoId}
              className=" w-48 m-2 p-1 shadow rounded-md cursor-pointer"
            >
              <div className="flex  ">
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt="thumbnail"
                  className="w-48 rounded-md"
                />
                <ul className=" m-1  ">
                  
                  <li className="font-bold text-sm truncate w-52 ">
                    {item.snippet.title}
                  </li>
                  <li className="text font-light ">{result.channelTitle}</li>
                  <div className="flex text-xs ">
                    <li className=" font-extralight ">
                      {result.viewCount} views
                    </li>
                    <li className=" font-extralight ml-2 list-disc list-inside ">
                      {" "}
                      {timeAgo(item.snippet.publishedAt)}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div> */
}
