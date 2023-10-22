import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/main-layout";
import LoadingPage from "../page/loading";
import { PATH } from "./path";
import { element } from "prop-types";

const Loadable = (Component) => (props) => {
    return <Suspense fallback={<LoadingPage />}>
        <Component {...props} />
    </Suspense>
}

// page
const HomeLoadable = Loadable(lazy(() => import("../page/home")))
const AboutLoadable = Loadable(lazy(() => import("../page/about")))
const ProjectAllLoadable = Loadable(lazy(() => import("../page/project/all")))
const ProjectRecentLoadable = Loadable(lazy(() => import("../page/project/recent")))
const ProjectCreateLoadable = Loadable(lazy(() => import("../page/project/create")))
const TaskLoadable = Loadable(lazy(() => import("../page/task")))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage >
            <HomeLoadable />
        </MainPage>
    },
    {
        path: PATH.home,
        element: <MainPage >
            <HomeLoadable />
        </MainPage>
    },
    {
        path: PATH.task,
        element: <MainPage >
            <TaskLoadable />
        </MainPage>
    },
    {
        children: [
            {
                path: PATH.project.all,
                element: <MainPage >
                    <ProjectAllLoadable />
                </MainPage>
            },
            {
                path: PATH.project.recent,
                element: <MainPage >
                    <ProjectRecentLoadable />
                </MainPage>
            },
            {
                path: PATH.project.create,
                element: <MainPage >
                    <ProjectCreateLoadable />
                </MainPage>
            },
        ],
    },
    {
        path: PATH.about,
        element: <MainPage >
            <AboutLoadable />
        </MainPage>
    }
]);

