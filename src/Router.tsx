import { useEffect } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

function ScrollToTop({ children }: any): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <>{children}</>;
}

function AppRouter() {
  const AppRouters = [
    {
      path: "/",
      element: (
        <ScrollToTop>
          <Home />
        </ScrollToTop>
      ),
    },
    {
      path: "/a",
      element: (
        <ScrollToTop>
          <h1>Hello a</h1>
        </ScrollToTop>
      ),
    },
    {
      path: "/b",
      element: (
        <ScrollToTop>
          <h1>Hello b</h1>
        </ScrollToTop>
      ),
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ScrollToTop>
          <App />
        </ScrollToTop>
      ),
      children: AppRouters,
    },
    // { path: "/", element: "" },
    { path: "*", element: <Navigate to={"/"} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
