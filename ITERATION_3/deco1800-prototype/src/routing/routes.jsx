import { createBrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";

// Import all the pages here
import Layout from "../components/layout/LayoutComponent";

import DegreeSearch from "../pages/degrees/DegreeSearch";
import DegreeTemplate from "../pages/degrees/DegreeTemplate";
import CourseTemplate from "../pages/courses/CourseTemplate";
import CourseSelectTemplate from "../pages/courses/CourseSelectTemplate"
import HomePage from "../pages/HomePage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        redirect: "/home",
        children: [
            { path: '/home', element: <HomePage />},
            { path: '/degrees', element: <DegreeSearch />},
            { path: '/degree-plans', element: <DegreeTemplate />},
            { path: '/courses', element: <CourseSelectTemplate />},
            { path: '/courses-select', element: <CourseSelectTemplate /> }
        ]
    }
])

export default routes;