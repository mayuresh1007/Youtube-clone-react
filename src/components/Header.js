import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/Appslice";
import { useEffect, useState } from "react";
import { YT_SUGGESTIONS } from "../Utils/Constants";
import SuggetionSearchCard from "./SuggetionSearchCard";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [searchresults, setSerachresults] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    //api call
    console.log(searchQuery);
    const timer = setTimeout(() => getSearchSuggetion(), 200);

    return () => {
      clearTimeout(timer);
    };
    // after every key strock
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YT_SUGGESTIONS + searchQuery);
    const json = await data.json();
    setSerachresults(json[1]);
    console.log(json[1]);
  };
  const toggleMemuHandle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow p-2">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMemuHandle()}
          className="h-6 mr-4 m-1 cursor-pointer"
          src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-11.jpg"
          alt="hamberger"
        />
        <img
          className="h-8 w-18"
          src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg"
          alt="yt logo"
        />
      </div>

      <div className=" col-span-10 px-10  ">
        <div className="">
          <input
            value={searchQuery}
            onChange={(e) => setSerachQuery(e.target.value)}
            onFocus={() => setShowSuggetion(true)}
            onBlur={() => setShowSuggetion(false)}
            className="rounded-l-full border h-8 border-gray-500 w-1/2 p-3"
            type="text"
            placeholder="Search"
          />
          <button className="rounded-r-full border h-8 border-gray-500 px-3">
            {/* <img
              className=" h-8 w-8 cursor-pointer rounded-r-full border border-gray-500 p-1 "
              src="https://icon-library.com/images/search-for-icon/search-for-icon-1.jpg"
              alt=""
            /> */}
            🔍
          </button>
        </div>

        {showSuggetion && (
          <div className="mt-1 px-2 w-96 absolute rounded-xl bg-slate-50">
            {searchresults.map((result, index) => {
              return (
                <ul key={index}>
                  <li className="bg-slate-50 border  hover:bg-slate-200 rounded-xl px-2 py-1">
                    {" "}
                    🔍 {result}
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>

      {/* <div>
        <SuggetionSearchCard />
      </div> */}
      <div className="col-span-1">
        <img
          className="h-8 justify-end cursor-pointer"
          src="https://icon-library.com/images/user-icon-free/user-icon-free-28.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;

/**
 *
 */
