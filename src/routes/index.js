import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/main-layout";
import Home from "../page/home";
import About from "../page/about";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage >
            <Home />
        </MainPage>
    },
    {
        path: "/home",
        element: <MainPage >
            <Home />
        </MainPage>
    },
    {
        path: "/about",
        element: <MainPage >
            <About />
        </MainPage>
    }
]);

