import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

function AppRouter() {
  // const routers = [];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ path: "/", element: <Home /> }],
    },
    // { path: "/", element: "" },
    { path: "*", element: <Navigate to={"/"} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
