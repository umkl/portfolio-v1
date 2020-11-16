import React from "react";
import "./registration.scss";

const Registration = () => {
  return (
    <div className="ug-registration">
      {/* <div className="ug-login-u">U</div> */}
      {/* <div className="ug-foyer-shadow"></div> */}
      <div className="ug-registration-box">
        <div className="ug-registration-name">register</div>
        <form className="ug-registration-form">
          {/* <div className="ug-login-form-input">username</div> */}
          {/* <label for="ug-login-form-input">f name</label> */}
          <input className="ug-registration-form-input" placeholder="username" name="kladsjfö"  type="text" />
          <br />
          {/* <label for="ug-login-form-input">f2 name</label> */}
          <input className="ug-registration-form-input" placeholder="password" type="password" />
        </form>
      </div>
      <div className="ug-registration-name">

      </div>
    </div>
  );
};

export default Registration;
