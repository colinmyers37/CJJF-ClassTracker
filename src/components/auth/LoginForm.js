import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

import { authActions } from "../../store/authSlice.js";

// console.log(authSlice);
const LoginForm = () => {
  const [error, setError] = useState("");
  const register = useSelector((state) => state.isRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const url = register ? `/api/signup` : `/api/login`;

    try {
      const response = await axios.post(
        // register ? `/api/signup` : `/api/login`,
        url,
        values
      );

      const data = response.data;

      dispatch(
        authActions.login({
          token: data.token,
          sessionExp: data.expirationTime,
          userId: data.userId,
          userName: data.username,
        })
      );
      navigate("/aboutus");
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
    <div className="login-main">
      <section className="login-card">
        <div className="card-body py-5 px-md-5 text-center">
          <h1>Login</h1>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm({ values: "" });
            }}
            className="login-help"
          >
            {({ isSubmitting, dirty }) => (
              <Form className="align-items-center d-flex flex-column">
                <div className="form-outline mb-4">
                  <Field
                    className="form-control"
                    name="username"
                    placeholder="Email or username"
                  />
                </div>
                <div className="form-outline mb-4">
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <Button type={"submit"} className="btn btn-danger w-50">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <p className="">{error}</p>
          <Link to="/signup" className="login-link">
            signup here
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
