import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/main-layout";
import LoadingPage from "../page/loading";

const Loadable = (Component) => (props) => {
    return <Suspense fallback={<LoadingPage/>}>
        <Component {...props}/>
    </Suspense>
}

// page
const HomeLoadable = Loadable(lazy(()=> import("../page/home")))
const AboutLoadable = Loadable(lazy(()=> import("../page/about")))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage >
            <HomeLoadable />
        </MainPage>
    },
    {
        path: "/home",
        element: <MainPage >
            <HomeLoadable />
        </MainPage>
    },
    {
        path: "/about",
        element: <MainPage >
            <AboutLoadable />
        </MainPage>
    }
]);

