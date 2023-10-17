import Icon from "../../components/Icon";

const Home = () => {
  return (
    <main className="home">
      <section className="introduction">
        <div className="introduction__left-container">
          <Icon className="navbar__logo" name="logo" size="300px" />
        </div>
        <article className="introduction__right-container">
          <h2 className="introduction__title">Développeur web front-end</h2>
          <p className="introduction__text">
            Passionné par le développement web depuis quelques années, j'utilise
            mon expertise dans la conception d'interfaces.
          </p>
          <nav className="introduction__navigation">
            <ul className="introduction__links">
              <li>
                <a
                  className="introduction__link"
                  href="https://github.com/loic-prosi"
                >
                  <Icon name="fa github" size="0.8em" />
                  Github
                </a>
              </li>
              <li>
                <a
                  className="introduction__link"
                  href="https://www.linkedin.com/in/lo%C3%AFc-prosi-03954a172/"
                >
                  <Icon name="fa linkedin" size="0.8em" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </section>
      <div className="greetings">
        <span className="greetings__title">Bienvenue</span>
        <div className="greetings__separator"></div>
      </div>
    </main>
  );
};

export default Home;
