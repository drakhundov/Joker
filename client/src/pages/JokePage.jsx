import { useRef, useState } from "react";
import "./JokePage.scss";

const JokePage = () => {
  const [joke, setJoke] = useState(null);
  const [jokeTypes, setJokeTypes] = useState({
    dark: false,
  });
  const jokeTypeSelectorRef = useRef(null);
  const handleJokeTypesChange = (e) => {
    const { name, checked } = e.target;
    setJokeTypes((prevTypes) => ({
      ...prevTypes,
      [name]: checked,
    }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const selectedTypes = Object.keys(jokeTypes).filter(
      (type) => jokeTypes[type]
    );
    const APIURL = `http://localhost:4040/getJoke?${selectedTypes.join("&")}`;
    console.log(`[LOG] Fetching from ${APIURL}`);
    const response = await fetch(APIURL);
    const data = await response.json();
    setJoke(data);
  };
  const jokeTypeSelectorDisplay = (flag) => {
    if (flag) {
      jokeTypeSelectorRef.current.style.display = "block";
    } else {
      jokeTypeSelectorRef.current.style.display = "none";
    }
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          <input
            name="general-type"
            type="radio"
            defaultChecked
            onChange={(e) => {
              e.preventDefault();
              jokeTypeSelectorDisplay(false);
            }}
          />
          Any
        </label>
        <label>
          <input
            name="general-type"
            type="radio"
            onChange={(e) => {
              e.preventDefault();
              jokeTypeSelectorDisplay(true);
            }}
          />
          Custom
        </label>
        <div ref={jokeTypeSelectorRef} style={{ display: "none" }}>
          <label>
            <input
              onChange={handleJokeTypesChange}
              name="Dark"
              type="checkbox"
            />
            Dark
          </label>
          <label>
            <input
              onChange={handleJokeTypesChange}
              name="Programming"
              type="checkbox"
            />
            Programming
          </label>
          <label>
            <input
              onChange={handleJokeTypesChange}
              name="Spooky"
              type="checkbox"
            />
            Spooky
          </label>
        </div>
        <button type="submit">Get A Joke!</button>
      </form>
      {joke && (
        <div className="joke">
          <div className="joke-setup">{joke.setup}</div>
          <div className="joke-punchline">{joke.punchline}</div>
        </div>
      )}
    </>
  );
};

export default JokePage;
