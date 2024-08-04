import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AppRoute from "./AppRoute";
import { Signup } from "../pages/auth/auth";

const router = createBrowserRouter([
  {
    element: <AppRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
