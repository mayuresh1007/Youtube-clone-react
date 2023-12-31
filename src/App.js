import Appbody from "./components/Appbody";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import ShortsPage from "./components/ShortsPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Appbody />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "shorts",
        element: <ShortsPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter}>
          <Appbody />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
