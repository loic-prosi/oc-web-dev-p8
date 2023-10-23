import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import About from "../pages/About";
import Error from "../pages/Error";
import ApiDoc from "../pages/ApiDoc";

import { consolidateWorks, findWork, findApiDoc } from "./works";

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
        },
        {
          path: "/projects",
          element: <Projects />,
          loader: () => consolidateWorks(works, skills)
        },
        {
          path: "/projects/:id",
          element: <Project />,
          loader: ({ params }) => findWork(params, works, skills)
        },
        {
          path: "/projects/:id/api",
          element: <ApiDoc />,
          loader: ({ params }) => findApiDoc(params, works)
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    }
  ];
};

export default routesConfig;
