import Layout from "../pages/Layout";
import Home from "../pages/Home";

const routesConfig = (works, skills) => {
  return [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ];
};

export default routesConfig;
