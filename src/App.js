// ******TRIAL OF USESTATE*********

// function App() {
//   const [state, setState] = useState({count:0,theme:'blue'})
//   const count = state.count
//   const theme = state.theme 

// function incrementCounter() {
//   setState(prevState => {
//     return{...prevState, count: prevState.count -1}
//   })
// }

//   return (
//     <div>
//       <button >-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incrementCounter}>+</button>
//     </div>
//   )
// }

// export default App

//Just a test

// *********************NEW LOGIN PAGE************************
import React, { useState } from "react";
import CustomerLogin from "./components/Login";

import "./index.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="title">Sign In</div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <button>{CustomerLogin}</button>
    </div>
  );

  const homepage = (
    <div className="homepage">
      Welcome !!
    </div>
  )

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? homepage : renderForm}
      </div>
    </div>
  );
}

export default App
