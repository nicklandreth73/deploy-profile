import React from "react";
import Form from "./Form";

function Contact(props) {
  return (
    <div className={props.isDark ? "darkMode" : "lightMode"}>
      <Form isDark={props.isDark} />
    </div>
  );
}

export default Contact;
