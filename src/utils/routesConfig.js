import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";

const routesConfig = (works, skills) => {
  return [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
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
