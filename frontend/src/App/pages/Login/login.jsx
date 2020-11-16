import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="ug-login">
      {/* <div className="ug-login-u">U</div> */}
      {/* <div className="ug-foyer-shadow"></div> */}
      <div className="ug-login-box">
        <div className="ug-login-name">login</div>
        <form className="ug-login-form">
          {/* <div className="ug-login-form-input">username</div> */}
          {/* <label for="ug-login-form-input">f name</label> */}
          <input className="ug-login-form-input" placeholder="username" name="kladsjfö"  type="text" />
          <br />
          {/* <label for="ug-login-form-input">f2 name</label> */}
          <input className="ug-login-form-input" placeholder="password" type="password" />
        </form>
      </div>
      <div className="ug-login-name">

      </div>
    </div>
  );
};

export default Login;
