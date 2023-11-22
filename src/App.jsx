import { createBrowserRouter, RouterProvider, Router } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import News from "./pages/News"
import Opinion from "./pages/Opinion"
import Culture from "./pages/Culture"
import Conference from "./pages/Conference"
import Podcast from "./pages/Podcast"
import Login from "./pages/Login"

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "home",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "news",
      element: <News />
    },
    {
      path: "culture",
      element: <Culture />
    },
    {
      path: "podcast",
      element: <Podcast />
    },
    {
      path: "opinion",
      element: <Opinion />
    },
    {
      path: "conference",
      element: <Conference />
    },
    {
      path: "login",
      element: <Login />
    },
  ])

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App


App.js
