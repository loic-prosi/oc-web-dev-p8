import Layout from "../pages/Layout";
import Home from "../pages/Home";
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
          loader: async () => {
            const worksConsolidated = consolidateWorks(works, skills);
            return { works: worksConsolidated };
          }
        }
      ]
    }
  ];
};

export default routesConfig;
