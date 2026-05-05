import { createBrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";

// Import all the pages here
import Layout from "../components/layout/LayoutComponent";
import CourseTemplate from "../pages/courses/courseTemplate";
import HomePage from "../pages/HomePage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: '/home', element: <HomePage />},
            { path: '/courses', element: <CourseTemplate />},
        ]
    }
])

export default routes;