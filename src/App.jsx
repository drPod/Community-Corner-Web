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
import Searcher from "./pages/Searcher";
import ContactUs from "./pages/ContactUs";
import WriteForUs from "./pages/WriteForUs";
import DiversityInclusion from "./pages/DiversityInclusion";
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
          path: "/about",
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
          path: "searcher",
          element: <Searcher />,
        },
        {
          path: "diversity and inclusion",
          element: <DiversityInclusion />,
        },
        {
          path: "contact us",
          element: <ContactUs />,
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
          path: "write for us",
          element: <WriteForUs />,
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
