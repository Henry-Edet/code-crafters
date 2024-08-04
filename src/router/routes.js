import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const Signup = lazy(() => import("../pages/auth/Signup"));

export { Home, Signup };
