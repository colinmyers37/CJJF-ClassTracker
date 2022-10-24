import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";

import { authActions } from "../../store/authSlice.js";

// console.log(authSlice);
const LoginForm = () => {
  const [error, setError] = useState("");
  const register = useSelector((state) => state.isRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        register ? `/api/signup` : `/api/login`,
        values
      );
      const data = response.data;
      console.log(data);

      dispatch(
        authActions.login({
          token: data.token,
          sessionExp: data.expirationTime,
          userId: data.userId,
          userName: data.username,
        })
      );
      navigate("/insights");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
      if (register) {
        setTimeout(() => {
          setError("");
        }, 8000);
      } else {
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }
  };

  return (
    <div className="">
      <h1>{!register ? "Login" : "Register for an account"}</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({ values: "" });
        }}
      >
        {({ isSubmitting, dirty }) => (
          <Form className="">
            <div className="">
              <label className="" htmlFor="username">
                Username
              </label>
              <Field
                className=""
                name="username"
                placeholder="Email or username"
              />
              <label className="" htmlFor="password">
                Password
              </label>
              <Field
                className=""
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="">
              <p className="">{register ? "Need to log in?" : "No Account?"}</p>
              <Button
                className=""
                type="button"
                onClick={() => dispatch(authActions.toggleRegister())}
              >
                {register ? "Login here." : "Register here."}
              </Button>
            </div>
            <Button disabled={!dirty} type={"submit"}>
              {!register ? "Login" : "Register"}
            </Button>
          </Form>
        )}
      </Formik>
      {/* <p className=''>{error}</p> */}
    </div>
  );
};

export default LoginForm;
