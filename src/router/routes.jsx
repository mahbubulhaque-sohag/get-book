import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children : [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])