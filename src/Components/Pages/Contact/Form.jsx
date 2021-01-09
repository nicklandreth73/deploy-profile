import React, { useState } from "react";
import emailjs from "emailjs-com";
import InputField from "./InputField"

function Form({isDark}) {
  const [formInput, setFormInput] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });

  //Email function
  function handleSubmit(e) {
    alert("Submitted");
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "gmail",
        "template_p5sgq4k",
        e.target,
        "user_TLXygmes6KegCbj2RGdPc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormInput({
      fName: "",
      lName: "",
      email: "",
      phone: "",
      message: "",
    });
    console.log(formInput);
  }
  //state management
  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((prevValue) => {
      if (name === "fName")
      return {...prevValue, fName: value};
      else if (name === "lName")
        return {...prevValue, lName: value};
      else if (name === "email")
      return {...prevValue, email: value};
      else if (name === "phone")
      return {...prevValue, phone: value};
      else if (name === "message")
      return {...prevValue, message: value};
    });
  }
  // Actual JSX code
  return (
    <div className={isDark ? "lightText" : "darkText"}>
      <div className="formContainer">
        <h1>
          Hello {formInput.fName} {formInput.lName}
        </h1>
        <form onSubmit={handleSubmit}>
        {Object.keys(formInput).map((field, fieldValue) => <InputField fieldName={field} formInput={fieldValue} handleChange={handleChange} />)}
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
