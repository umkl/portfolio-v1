import React, { useEffect, useState } from "react";
import "./login.scss";
import { useSpring, animated as a } from "react-spring";
import useForm from './../../utils/useForm.jsx';

const Login = () => {
  const [loaded, setLoaded] = useState(false);
  const {handleChange, handleSubmit, values} = useForm();
  const loginSpring = useSpring({
    marginTop: loaded ? "0px" : "500px",
  });

  useEffect(()=>{
    console.log(values);
  },[values])


  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <a.div style={loginSpring} className="ug-login">
      <div className="ug-login-box">
        <div className="ug-login-name">login</div>
        <form onSubmit={handleSubmit} className="ug-login-form">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="ug-login-form-input"
            placeholder="enter email"
            value={values.email}
          />
          <br />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="ug-login-form-input"
            placeholder="password"
            value={values.password}
            autoComplete="on"
          />
          <input type="submit" value="OK" className="ug-login-form-submit" />
        </form>
      </div>
      <div className="ug-login-name"></div>
    </a.div>
  );
};

export default Login;
