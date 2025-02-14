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
      <span
        id="desc"
        style={{
          fontWeight: "300",
          fontSize: "4rem",
          letterSpacing: "20px",
          alignSelf: "center",
        }}
      >
        İletişim için
      </span>
      <div className="desc">
        <h2 className="contact-info">
          <ul>
            <li>
              <a href="github.com">GitHub</a>
              <a href="linkedin.com">LinkedIn</a>
            </li>
          </ul>
        </h2>
      </div>
      {/* TODO: Add links to GH and LinkedIn*/}
    </div>
  );
};

export default AboutPage;
