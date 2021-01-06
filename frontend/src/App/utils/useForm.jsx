import { useState, useEffect } from "react";
import axios from "axios";

const useForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

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
    // values.map((value)=>{
    //   params.append(value);
    // })
    axios
      .post("http://localhost:8080/login",params, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { handleChange, handleSubmit, values };
};
export default useForm;
