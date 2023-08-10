import Appbody from "./components/Appbody";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";

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
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}>
          <Appbody />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
