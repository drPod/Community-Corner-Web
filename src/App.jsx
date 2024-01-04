import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Opinion from "./pages/Opinion";
import Culture from "./pages/Culture";
import Conference from "./pages/Conference";
import Podcast from "./pages/Podcast";
import Login from "./pages/Login";
import MastHead from "./pages/MastHead";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "culture",
          element: <Culture />,
        },
        {
          path: "podcast",
          element: <Podcast />,
        },
        {
          path: "opinion",
          element: <Opinion />,
        },
        {
          path: "conference",
          element: <Conference />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "masthead",
          element: <MastHead />,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
}

export default App;
