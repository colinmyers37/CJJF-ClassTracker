import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import authActions from "../../store/authSlice";

import axios from "axios";

const LoginForm = () => {
  const [error, setError] = useState("");
  const register = useSelector((state) => state.isRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = "http://localhost:4000";

  const formInitialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        register ? `${url}/register` : `${url}/login`,
        values
      );
      const data = response.data;
      dispatch(
        authActions.login({
          token: data.token,
          sessionExp: data.expirationTime,
          userId: data.userId,
        })
      );
      navigate("/dashboard");
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
        initialValues={formInitialValues}
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
              <button
                className=""
                type="button"
                onClick={() => dispatch(authActions.toggleRegister())}
              >
                {register ? "Login here." : "Register here."}
              </button>
            </div>
            <button loading={isSubmitting} disabled={!dirty} type={"submit"}>
              {!register ? "Login" : "Register"}
            </button>
          </Form>
        )}
      </Formik>
      <p className="">{error}</p>
    </div>
  );
};

export default LoginForm;
