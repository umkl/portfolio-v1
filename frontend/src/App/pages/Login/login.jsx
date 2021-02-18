import React, { useEffect, useState, useContext } from "react";
import "./login.scss";
import { useSpring, animated as a, config } from "react-spring";
import useForm from "./../../utils/useForm.jsx";
import { BlurContext } from "./../../context/BlurContext.js";
import { Link } from "react-router-dom";
import Logo from "./../../assets/UNGAR_NEW_LOGO.svg";

const Login = () => {
  // const [blur, setBlur] = useContext(BlurContext);
  // const [blur, setBlur] = useState(null);
  // const [blurString, setBlurString] = useState("none");
  // const [depp, setDepp] = useState(3);
  const [loaded, setLoaded] = useState(false);

  const {
    handleChange,
    handleSubmit,
    values,
    loginStatus,
    setLoginStatus,
  } = useForm();

  
  // useEffect(
  //   ()=>{
  //     console.log(depp);
  //   }
  //   ,[depp])

  // setDepp(2)

  const loginSpring = useSpring({
    marginTop: loaded ? "0px" : "500px",
  });

  const logoSpring = useSpring({
    marginTop: loaded? "0px": "-500px",
  })

  useEffect(() => {
    setLoaded(true);
  }, []);

  // const blurSpring = useSpring({
  //   filter: blur == null ? "blur(0px)" : `blur(${blur}px)`,
  //   config: { duration: 20 },
  // });

  const mailStatusSpring = useSpring({
    to: { opacity: 1, marginLeft: "0px" },
    from: { opacity: 0, marginLeft: "-400px" },
    config: config.stable,
  });

  return (
    <React.Fragment>
      {loginStatus != null ? ( //setting this to login to validate if login has been sent or valid
        <div className="ug-contact-mailStatus">
          {
            <a.div
              style={mailStatusSpring}
              className="ug-contact-mailStatus-box"
            >
              {loginStatus == "success" ? (
                <div className="ug-contact-mailStatus-box-success" >
                  This account is not registered yet. Please contact me to
                  request an account.
                </div>
              ) : (
                <div className="ug-contact-mailStatus-box-error">
                  There was a connection problem with the server.
                </div>
              )}

              <div className="ug-contact-mailStatus-box-buttons">
                <button
                  className="ug-contact-mailStatus-box-success-contact"
                  style={{ color: "white" }}
                  onClick={() => {
                    // setBlur(null);
                  }}
                >
                  <Link to="/contact">contact</Link>
                </button>
                <button
                  className="ug-contact-mailStatus-box-button"
                  onClick={() => {
                    setLoginStatus(null);
                    // setBlur(null);
                  }}
                >
                  OK
                </button>
              </div>
            </a.div>
          }
        </div>
      ) : null}
      <a.div className="ug-login">
        <div className="ug-login-elements">
        <a.div className="ug-login-logo" style={logoSpring}>
          <Link className="ug-login-logo-link" to="/">
            <Logo height="120px" width="120px" />
          </Link>
        </a.div>
        <a.div className="ug-login-box" style={loginSpring}>
          <div className="ug-login-name">login</div>
          <form onSubmit={handleSubmit} className="ug-login-form">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="ug-login-form-input"
              placeholder="email"
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
            <div
              className="ug-login-form-button_wrapper">
              {/* <div className="Login-Back"><Link to="/content">go back</Link></div> */}
              <input
                type="submit"
                value="OK"
                // onClick={
                //   // setBlur(2)
                // }
                className="ug-login-form-submit"
              />
            </div>
          </form>
        </a.div>
        <div className="ug-login-name"></div>
        </div>
      </a.div>
    </React.Fragment>
  );
};

export default Login;
