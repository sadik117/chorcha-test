import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/MainLayout";
import { Home } from "../components/pages/Home";
import Checkout from "../components/pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

export default router;
