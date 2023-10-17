import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Error from "../pages/Error";

import { consolidateWorks } from "./works";

const routesConfig = (works, skills) => {
  return [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: () => consolidateWorks(works, skills)
        },
        {
          path: "/projects",
          element: <Projects />,
          loader: () => consolidateWorks(works, skills)
        }
      ]
    }
  ];
};

export default routesConfig;
