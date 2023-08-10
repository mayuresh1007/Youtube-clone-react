import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/Appslice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMemuHandle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  shadow p-2">
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
      <div className="flex h-8 justify-center  col-span-10">
        <input
          className="rounded-l-full border border-gray-500 w-1/2 p-3"
          type="text"
          placeholder="Search"
        />
        <img
          className=" px-3 p-1 rounded-r-full border border-gray-500 cursor-pointer"
          src="https://icon-library.com/images/search-for-icon/search-for-icon-1.jpg"
          alt=""
        />
      </div>
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
