import React, { useState } from "react";
import "../CSS/Forms.css"

function Forms() {
  let [inputData, changeInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  let [formError, setError] = useState({});
  let [formSubmit, setSubmit] = useState(false);

  const handleInput = (e) => {
    let { name, value } = e.target;
    changeInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = validate(inputData);
    setError(error);
    console.log(error)
    console.log(inputData)

    let errorKeys = Object.keys(error);

    if (errorKeys.length == 0) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};
    if (data.firstName.trim() === "") {
      error.firstName = "Please enter the first name";
    }
    if (data.lastName.trim() === "") {
      error.lastName = "Please enter the last name";
    }
    if (data.email.trim() === "") {
      error.email = "Please enter the email";
    }
    if (data.phoneNumber.trim() === "" || data.phoneNumber.trim().length != 10) {
      error.phoneNumber = "Please enter a valid phone number";
    }
    return error;
  };
  
  return (
    <div className="parent">
      <form onSubmit={handleSubmit}>
        <div>{formSubmit && <p>Registration Successuful</p>}</div>
        <label htmlFor="firstName">Enter Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name Here"
          onChange={handleInput}
        />
        {formError.firstName ? <p>{formError.firstName}</p> : null}

        <label htmlFor="lastName">Enter Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name Here"
          onChange={handleInput}
        />
        {formError.lastName ? <p>{formError.lastName}</p> : null}


        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          name="email"
          placeholder=" Email here"
          onChange={handleInput}
        />
        {formError.email ? <p>{formError.email}</p> : null}

        <label htmlFor="phoneNumber">Enter Contact</label>
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number Here"
          onChange={handleInput}
        />
        {formError.phoneNumber != "" ? <p>{formError.phoneNumber}</p> : null}

        <input type="submit" value={"Register"} className="btn"/>
      </form>
    </div>
  );
}

export default Forms;