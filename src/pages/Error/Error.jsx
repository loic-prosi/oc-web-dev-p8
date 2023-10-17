import { useRouteError, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Error = () => {
  const error = useRouteError();
  console.log("error: ", error);
  return (
    <div className="layout">
      <div className="layout__container">
        <Navbar />
        <main className="error">
          <div className="error__code-container">
            <h2 className="error__code">
              {error.status ? error.status : "???"}
            </h2>
          </div>
          <div className="error__message-container">
            <p className="error__message">Oups ! Une erreur est survenue.</p>
            <p className="error__infos">
              Vous pouvez retourner sur la page d'accueil en cliquant sur le
              bouton ci-dessous.
            </p>
            <Link className="error__home-button" to="/">
              Retour sur la page d'accueil
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
