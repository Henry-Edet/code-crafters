import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AppRoute from "./AppRoute";

const router = createBrowserRouter(
    [
        {
            element: <AppRoute/>,
            children: [
                {
                    path: "/",
                    element: <Home/>

                }
            ]
               
        }
    ]
)
export default router