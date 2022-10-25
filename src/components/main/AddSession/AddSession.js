import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";
import { DatePickerField } from "../../UI/DatePicker";

const AddSession = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const url = `"/session/:userId"`;
  };
  return (
    <div className="">
      <h1>Add Session</h1>
      <Formik
        initialValues={{
          date: "",
          time: "",
          userId: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({ values: "" });
        }}
      >
        {({ isSubmitting, dirty }) => (
          <Form className="">
            <div className="">
              <label className="" htmlFor="Date">
                Date
              </label>
              <DatePickerField name="date" />
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
    </div>
  );
};

export default AddSession;
