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
import NewsView from "./pages/NewsView";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//remove this later
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

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
          path: "/news/:id",
          element: <NewsView />,
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
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Toaster position="top-center" />
      <RouterProvider router={BrowserRouter}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
