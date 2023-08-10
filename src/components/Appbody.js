import Sidebar from "./Sidebar";
// import Maincontainer from "./Maincontainer";
import { Outlet } from "react-router-dom";

const Appbody = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      {/* <Maincontainer /> */}
    </div>
  );
};

export default Appbody;
