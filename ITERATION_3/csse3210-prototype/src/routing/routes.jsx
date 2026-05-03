import { createBrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";

// Import all the pages here
import Layout from "../components/layout/LayoutComponent";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            
        ]
    }
])

export default routes;