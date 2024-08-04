import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AppRoute from "./AppRoute";
import { Signup } from "../pages/auth/auth";
import AuthRoute from "./AuthRoute";

const router = createBrowserRouter([
  {
    element: <AppRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/auth",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
