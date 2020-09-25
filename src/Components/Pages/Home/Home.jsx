import React from "react";
import Quote from "./Quote";

function Home(props) {
  return (
    <div className={props.isDark ? "darkMode" : "lightMode"}>
      <div className="home-page">
        <Quote isDark={props.isDark} />
      </div>
    </div>
  );
}

export default Home;
