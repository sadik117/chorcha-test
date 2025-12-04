import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/MainLayout";
import { Home } from "../components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { 
        index: true,
         element: <Home></Home>
        }
    ],
  },
]);

export default router;
