import React from 'react'

export default function FormInput({fieldName ,formInput, handleChange}) {
  let fields = {} 
  
  
  switch(fieldName){
   case "fName":
    fields = 
    {
      className:"form-child",
      placeholder:"First Name",
      name:"fName",
      type:"text"
    }
    break
    case "lName":
    fields = {
    className:"form-child",
    placeholder:"Last Name",
    name:"lName",
    type:"text"
  }
  break
  case "email":
    fields = {
    className:"form-child",
    placeholder:"Email",
    name:"email",
    type:"text"
  }
break
  case "phone":
  fields = 
  {
  className:"form-child",
  placeholder:"Phone",
  name:"phone",
  type:"tel",
     }
break
     case "message":
       {
      return <textarea
        className="form-child"
        name="message"
        placeholder="How can I help you?"
        value={formInput.message}
        onChange={handleChange}
      />
      break
       } 
    }

  
  return (
        <input
        {...fields}
        value={formInput[{fieldName}]}
        onChange={handleChange}
      />
    )
}
