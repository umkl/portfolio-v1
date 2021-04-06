import { useState, useEffect, useContext} from "react";
import axios from "axios";
import {BlurContext} from "./../context/BlurContext.js";

const useForm = () => {
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
    e.preventDefault();

    const params = new URLSearchParams()
    params.append("email", values.email);
    params.append("password", values.password);
    
    axios
      .post("http://localhost:8080/login",params, config)
      .then((response) => {
        setLoginStatus("success");
      })
      .catch((error) => { 
        setLoginStatus("error");
      });
  };

  return {handleChange, handleSubmit, values, loginStatus, setLoginStatus};
};
export default useForm;
