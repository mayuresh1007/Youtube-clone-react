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
      <div className="m-2 p-2 text-center">
        <h1 className="font-bold">Home</h1>
        <ul>
          <Link to={"/"}> <li>Home</li></Link>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
        <hr className="my-2" />
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
