import React from "react";
import Quote from "./Quote";

function Home(props) {
  return (
    <div className={props.isDark ? "darkMode" : "lightMode"}>
      <Quote isDark={props.isDark} />
    </div>
  );
}

export default Home;
