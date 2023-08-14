import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/Appslice";
import { useEffect, useState } from "react";
import { YT_SUGGESTIONS } from "../Utils/Constants";
import { cacheResults } from "../Utils/SearchSlice";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [searchresults, setSerachresults] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false); // onFocus / onBlur

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //api call
    console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSerachresults(searchCache[searchQuery]);
      } else {
        getSearchSuggetion();
      }
      
    }, 200); // debouncing

    return () => {
      clearTimeout(timer);
    };
    // after every key strock
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YT_SUGGESTIONS+ process.env.REACT_APP_API_KEY + searchQuery);
    const json = await data.json();
    setSerachresults(json[1]);
    console.log("apicall", json[1]);

    // update Cashe
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
        // pass dummy data for testing
        // iphone:[1,2,3,]
      })
    );
  };

  const toggleMemuHandle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow p-3">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMemuHandle()}
          className="h-6 mr-4 m-1 cursor-pointer hover:border border-slate-500 "
          src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
          alt="hamberger"
        />
        <a href="/">
          <img
            className="h-8 w-18 "
            src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg"
            alt="yt logo"
          />
        </a>
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
          className="h-7 justify-end cursor-pointer"
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
