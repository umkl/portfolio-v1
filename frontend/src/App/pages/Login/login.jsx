import React, { useEffect, useState } from "react";
import "./login.scss";
import { useSpring, animated as a } from "react-spring";

const Login = () => {
  const [loaded, setLoaded] = useState(false);
  const [loginData, setLoginData] = useState([]);

  const loginSpring = useSpring({
    marginTop: loaded ? "0px" : "500px",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const sendLogin = (event) => {
    alert(loginData);
    event.preventDefault(); 
    // console.log(loginData)
    // console.log("hellow")
    // console.log(e);
  };

  const handleLoginChange = (event) =>{
    setLoginData(e);
    // event.preventDefault()

  }

  return (
    <a.div style={loginSpring} className="ug-login">
      <div className="ug-login-box">
        <div className="ug-login-name">login</div>
        <form onSubmit={sendLogin} className="ug-login-form">
          <input
            onChange={handleLoginChange}
            type="email"
            name="user_email"
            className="ug-login-form-input"
            placeholder="enter email"
          />
          <br />
          <input
            onChange={handleLoginChange}
            className="ug-login-form-input"
            placeholder="password"
            type="password"
            autoComplete="on"
            name="user_password"
          />
          <input type="submit" value="OK" className="ug-login-form-submit" />
        </form>
      </div>
      <div className="ug-login-name"></div>
    </a.div>
  );
};

export default Login;
