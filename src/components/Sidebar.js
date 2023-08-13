import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="text-sm shadow col-span-1">
      <div className=" p-2  ">
        <div className="  ">
          <ul className="flex  flex-col justify-evenly min-h-screen  mx-3 items-center ">
            <Link to={"/"} className="hover:border border-slate-500">
              <img
                className="w-8 justify-center  "
                src="https://img.icons8.com/?size=512&id=i6fZC6wuprSu&format=png"
                alt="home"
              />
              <li className="">Home</li>
            </Link>
            <Link to={"shorts/"} className="hover:border border-slate-500">
              <img
                className="w-8 justify-center  "
                src="https://img.icons8.com/?size=512&id=EIImZoYOHFX6&format=png"
                alt=""
              />
              <li className="">Shorts</li>
            </Link>
            <Link to={"/"} className=" hover:border border-slate-500">
              <img
                className="w-8 justify-center  "
                src="https://img.icons8.com/?size=512&id=9qDAqQd4klEv&format=png"
                alt=""
              />
              <li className="">Library</li>
            </Link>
          </ul>
        </div>

        {/* <hr className="my-2" />
        <h1 className="font-bold pt-2">Subscription</h1>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Gamming</li>
        </ul>
        <hr className="my-2" />
        <h1 className="font-bold pt-2">Watch latter</h1>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Motivation</li>
          <li>Coding</li>
        </ul>
        <hr className="my-2" />
        <h1 className="font-bold pt-2">Explore</h1>
        <ul>
          <li>Shopping </li>
          <li>Treanding</li>
          <li>News </li>
          <li>Coding</li>
          <li>Sports</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
