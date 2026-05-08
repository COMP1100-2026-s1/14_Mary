import { createBrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";

// Import all the pages here
import Layout from "../components/layout/LayoutComponent";
import CourseTemplate from "../pages/courses/courseTemplate";
import DegreeSearch from "../pages/degrees/DegreeSearch";
import DegreeTemplate from "../pages/degrees/DegreeTemplate";
import HomePage from "../pages/HomePage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        redirect: "/home",
        children: [
            { path: '/home', element: <HomePage />},
            { path: '/courses', element: <CourseTemplate />},
            { path: '/degrees', element: <DegreeSearch />},
            { path: '/degrees/id/:id', element: <DegreeTemplate />},
        ]
    }
])

export default routes;