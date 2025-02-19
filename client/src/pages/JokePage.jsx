import React, { useRef, useState } from "react";
import "./JokePage.scss";

// TODO: add cache to avoid repetitive jokes.

const JokePage = () => {
  const [joke, setJoke] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [jokeTypes, setJokeTypes] = useState({
    dark: false,
    programming: false,
    spooky: false,
  });
  const handleJokeTypesChange = (e) => {
    const { name, checked } = e.target;
    setJokeTypes((prevTypes) => ({
      ...prevTypes,
      [name]: checked,
    }));
  };
  const fetchJokeFromServer = async (e) => {
    e.preventDefault();
    const selectedTypes = Object.keys(jokeTypes).filter(
      (type) => jokeTypes[type]
    );
    if (selectedTypes.length == 0) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
    const URL = `http://localhost:4040/getJoke?${selectedTypes.join("&")}`;
    console.log(`[LOG] Fetching from ${URL}`);
    const response = await fetch(URL);
    const data = await response.json();
    setJoke(data);
  };
  const jokeTypeSelector = useRef(null);
  const toggleJokeTypeSelector = (flag) => {
    jokeTypeSelector.current.style.visibility = flag ? "visible" : "hidden";
    setShowWarning(false);
  };
  return (
    <div className="centering-container">
      <div className="content-container">
        <div className="fetched-joke" style={{ minHeight: "50px" }}>
          {joke && (
            <React.Fragment>
              <div className="joke-setup">{joke.setup}</div>
              {joke.punchline && (
                <div className="joke-punchline">{joke.punchline}</div>
              )}
            </React.Fragment>
          )}
        </div>
        <p className="warning-msg" style={{ minHeight: "25px" }}>
          {showWarning && (
            <span>
              First, you need to choose some filters or apply &apos;Any&apos;.
            </span>
          )}
        </p>
        <form className="joke-selector" onSubmit={fetchJokeFromServer}>
          <div className="row-container" style={{ gap: "3vw" }}>
            <div className="radio-group">
              <label>
                <input
                  name="general-type"
                  type="radio"
                  defaultChecked
                  onChange={() => toggleJokeTypeSelector(false)}
                  className="type-selection"
                />
                Any
              </label>
              <label>
                <input
                  name="general-type"
                  type="radio"
                  onChange={() => toggleJokeTypeSelector(true)}
                  className="type-selection"
                />
                Custom
              </label>
            </div>
            <button className="submit-btn" type="submit">
              Get A Joke!
            </button>
          </div>
          <div
            ref={jokeTypeSelector}
            style={{ visibility: "hidden" }}
            className="column-container"
          >
            <label>
              <input
                name="Dark"
                type="checkbox"
                onChange={handleJokeTypesChange}
                className="type-selection"
              />
              Dark
            </label>
            <label>
              <input
                name="Programming"
                type="checkbox"
                onChange={handleJokeTypesChange}
                className="type-selection"
              />
              Programming
            </label>
            <label>
              <input
                name="Spooky"
                type="checkbox"
                onChange={handleJokeTypesChange}
                className="type-selection"
              />
              Spooky
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JokePage;
