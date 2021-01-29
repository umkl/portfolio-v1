import React, { useEffect, useState, useContext } from "react";
import "./login.scss";
import { useSpring, animated as a, config } from "react-spring";
import useForm from "./../../utils/useForm.jsx";
import { BlurContext } from "./../../context/BlurContext.js";
import {Link} from "react-router-dom";
// import { filter } from "lodash";

const Login = () => {
  const [blur, setBlur] = useContext(BlurContext);
  const [blurString, setBlurString] = useState("none");
  const [loaded, setLoaded] = useState(false);
  const {
    handleChange,
    handleSubmit,
    values,
    loginStatus,
    setLoginStatus,
  } = useForm();

  const loginSpring = useSpring({
    marginTop: loaded ? "0px" : "500px",
    // filter: "blur(" + blur + ")"
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  useEffect(() => {
    if(blur != null){
      console.log("Blur is not null");
      setBlurString(`blur(${blur}px)`);
    }else{
      console.log("Blur is null");
      setBlurString("none");
    }
  }, [blur]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // useEffect(()=>{
  //   if(loginStatus!=null){
  //     setBlur("4px");
  //   }else{
  //     setBlur(null);
  //   }

  // },[loginStatus])

  const blurMethod = {
    filter: blurString,
  };

  const contactSpring = useSpring({
    to: { opacity: 1, marginLeft: "0px" },
    from: { opacity: 0, marginLeft: "-400px" },
    config: config.stable,
  });

  const blurSpring = useSpring({
    filter: blur == null ? "blur(0px)" : `blur(${blur}px)`,
  })

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
              
              {loginStatus == "success" ? 
                (<div className="ug-contact-mailStatus-box-success">
                  This account is not registered yet. 
                  Please <span ><button className="ug-contact-mailStatus-box-success-contact" onClick={()=>{setBlur(null)}}><Link to="/contact" >contact</Link></button></span> me to request an account.
                </div>):
                (<div className="ug-contact-mailStatus-box-error">
                  err
                </div>)
              }

              <button
                className="ug-contact-mailStatus-box-button"
                onClick={() => {
                  setLoginStatus(null);
                  setBlur(null);
                }}
              >
                OK
              </button>
            </a.div>
          }
        </div>
      ) : null}
      <a.div style={loginSpring} className="ug-login">
        <a.div className="ug-login-box" style={blurSpring}>
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
        </a.div>
        <div className="ug-login-name"></div>
      </a.div>
    </React.Fragment>
  );
};

export default Login;
