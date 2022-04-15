import React from 'react'
import {useFormik} from 'formik'


function Register() {
  const initialValues = {
    userName: "",
    Name:"",
    passWord: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    console.log("submited");
  };

  const validate = (values) => {
    console.log("validation");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={formik.handleSubmit}></form>

    </div>
  )
}

export default Register