import { useEffect, useState } from "react";
import { API_KEY } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { searchBtnBar } from "../Utils/Appslice";

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
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${inputValue}&key=${API_KEY}`
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
    <div className="mt-2 ">
      {buttons.map((button, index) => {
        return (
          <button
            className="m-1 p-1 px-2 mx-2 bg-slate-200 rounded-md text-xs"
            key={button}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonBar;

//["All", "Live", "Music", "trending", "AI", "Motivation","Coding","All", "Live", "Music", "trending", "AI"];
