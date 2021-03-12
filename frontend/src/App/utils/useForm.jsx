import { useState, useEffect, useContext} from "react";
import axios from "axios";
import {BlurContext} from "./../context/BlurContext.js";

const useForm = () => {
  // const [blur, setBlur] = useContext(BlurContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState(null);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // params.append("email", "mixlunga@mix.com");
    e.preventDefault();

    const params = new URLSearchParams()

    params.append("email", values.email);
    params.append("password", values.password);
    
    axios
      .post("http://10.0.0.11:8080/login",params, config)
      .then((response) => {
        // console.log(response);
        // setBlur("4px");
        setLoginStatus("success");
      })
      .catch((error) => {
        // console.log(error);
        // setBlur("4px");
        setLoginStatus("error");
      });
  };

  return {handleChange, handleSubmit, values, loginStatus, setLoginStatus};
};
export default useForm;
