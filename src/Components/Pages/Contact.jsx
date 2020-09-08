import React from "react";

function Contact(props) {
  return (
    <div className={props.isDark ? "darkMode" : "lightMode"}>
      <h1 className={props.isDark ? "lightText" : "darkText"}>
        Holla at me yo!
      </h1>
    </div>
  );
}

export default Contact;
