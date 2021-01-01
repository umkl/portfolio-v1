import React, {useEffect, useState} from "react";
import "./login.scss";
import {useSpring, animated as a } from "react-spring"

const Login = () => {
  const [loaded, setLoaded] = useState(false);

  const loginSpring = useSpring({
    marginTop: loaded ? "0px" : "500px"
  });

  useEffect(()=>{
    setLoaded(true);
  },[])

  return (
    <a.div style={loginSpring} className="ug-login">
      <div className="ug-login-box">
        <div className="ug-login-name">login</div>
        <form className="ug-login-form">
          <input
            type="email"
            name="user_email"
            className="ug-login-form-input"
            placeholder="enter email"
          />
          <br />
          <input
            className="ug-login-form-input"
            placeholder="password"
            type="password"
          />
        </form>
      </div>
      <div className="ug-login-name"></div>
    </a.div>
  );
};

export default Login;
