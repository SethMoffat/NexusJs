import React from 'react';
import { useFormik } from 'formik';

function Login() {
  const initialValues = {
    userName: "",
    passWord: "",
  };
  const onSubmit = (values) => {
    console.log("submit clicked");
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
      <h2>Login Page</h2>
      <form onSubmit={formik.handleSubmit}>
          <input 
          type={"text"}
          name= "userName"
          onChange={formik.handleChange}
          value= {formik.values.userName}
          placeholder='UserName'
          />
          <input 
          type={"password"}
          name= "password"
          onChange={formik.handleChange}
          value= {formik.values.password}
          placeholder='password'
          />
          <br></br>
          <br></br>
          <button type ='submit' disabled={!formik.isValid}> Submit</button>
      </form>
    </div>
  );
}

export default Login;
