import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Form(props) {
  const [formInput, setFormInput] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((prevValue) => {
      if (name === "fName")
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      else if (name === "lName")
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      else if (name === "email")
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      else if (name === "phone")
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: value,
          message: prevValue.message,
        };
      else if (name === "message")
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: prevValue.phone,
          message: value,
        };
    });
  }

  return (
    <div className={props.isDark ? "lightText" : "darkText"}>
      <div className="formContainer">
        <h1>
          Hello {formInput.fName} {formInput.lName}
        </h1>
        <form>
          <input
            className="form-child"
            placeholder="First Name"
            name="fName"
            type="text"
            value={formInput.fName}
            onChange={handleChange}
          />
          <input
            className="form-child"
            placeholder="Last Name"
            name="lName"
            type="text"
            value={formInput.lName}
            onChange={handleChange}
          />
          <input
            className="form-child"
            placeholder="Email"
            name="email"
            type="email"
            value={formInput.email}
            onChange={handleChange}
          />
          <input
            className="form-child"
            placeholder="Phone"
            name="phone"
            type="tel"
            value={formInput.phone}
            onChange={handleChange}
          />
          <textarea
            className="form-child"
            name="message"
            placeholder="How can I help you?"
            value={formInput.message}
            onChange={handleChange}
          />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
