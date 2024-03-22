import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/home/home.page";

const routeConfig: RouteObject[] = [
  {
    path: "",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
];
const Route = () => {
  const router = createBrowserRouter(routeConfig, {
    basename: "/ped-ro-remake",
  });
  return <RouterProvider router={router} />;
};

export default Route;
