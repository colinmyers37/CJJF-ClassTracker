import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";

const SignupForm = () => {
  const [error, setError] = useState("");
  const register = useSelector((state) => state.isRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const url = `/api/signup`;

    try {
      const response = await axios.post(url, values);

      const data = response.data;

      navigate("/login");
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
      <h1>Signup</h1>
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

            <Button type={"submit"}>Signup</Button>
          </Form>
        )}
      </Formik>
      <p className="">{error}</p>
    </div>
  );
};

export default SignupForm;
