import { useEffect, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
// fast
// import Home from "./pages/Home";
// slow
const Home = lazy(() => import("./pages/Home"));

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
          <h1 style={{ height: "100rem" }}>A</h1>
        </ScrollToTop>
      ),
    },
    {
      path: "/b",
      element: (
        <ScrollToTop>
          <h1 style={{ height: "100rem" }}>B</h1>
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
