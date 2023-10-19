import { useRouteError } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Article from "../../components/Article";

const Error = () => {
  const error = useRouteError();
  const errorMessage =
    error.status && error.status === 404
      ? "Cette page n'existe pas."
      : "Une erreur est survenue.";

  return (
    <div className="layout">
      <div className="layout__container">
        <Navbar />
        <main className="page page--error">
          <section className="section section--error">
            <div className="error__code-container">
              <span className="error__code">
                {error.status ? error.status : "???"}
              </span>
            </div>
            <Article
              title={`Oups ! ${errorMessage}`}
              text="Vous pouvez retourner sur la page d'accueil en cliquant sur le
              lien ci-dessous."
              links={[
                {
                  size: "large",
                  name: "Retour sur la page d'accueil",
                  url: "/"
                }
              ]}
            />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
