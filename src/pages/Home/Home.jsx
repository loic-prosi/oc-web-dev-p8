import Article from "../../components/Article";
import SideContent from "../../components/SideContent";

const Home = () => {
  return (
    <main className="page page--home">
      <section className="section section--home">
        <SideContent icon="logo" size="300px" />
        <Article
          title="Développeur web front-end"
          text="Passionné par le développement web depuis quelques années, j'utilise
          mon expertise dans la conception d'interfaces."
          links={[
            {
              name: "Github",
              url: "https://github.com/loic-prosi",
              icon: "fa github",
              iconSize: "0.8em"
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/lo%C3%AFc-prosi-03954a172/",
              icon: "fa linkedin",
              iconSize: "0.8em"
            }
          ]}
        />
      </section>
      <div className="greetings">
        <span className="greetings__title">Bienvenue</span>
        <div className="greetings__separator"></div>
      </div>
    </main>
  );
};

export default Home;
