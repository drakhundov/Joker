import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="name-container">
        <span id="name" style={{ marginRight: "0" }}>
          Abdül
        </span>
        <span id="surname">Ahundzade</span>
      </div>
      <div className="desc">
        <a href="https://github.com/drakhundov">
          <img className="link-icon" src="icons/github-icon.svg" />
        </a>
        <a href="https://www.linkedin.com/in/abdul-akhundzadeh/">
          <img className="link-icon" src="icons/linkedin-icon.svg" />
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
