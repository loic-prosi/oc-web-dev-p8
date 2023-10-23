import { useLoaderData } from "react-router-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import apiDocP7 from "../../assets/apiDocs/oc-web-dev-p7.yml";

const ApiDoc = () => {
  const { work } = useLoaderData();

  const apiDocs = {
    "oc-web-dev-p7": apiDocP7
  };

  return (
    <div id="api-doc" className="page">
      <SwaggerUI url={apiDocs[work.id]} />
    </div>
  );
};

export default ApiDoc;
