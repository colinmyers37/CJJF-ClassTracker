import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";

const AddTechnique = () => {
  const handleSubmit = async (values) => {
    const body = {
      name: values.name,
    };
    axios.post("/technique", body);
  };
  return (
    <div className="">
      <h1>Add Technique</h1>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({ values: "" });
        }}
      >
        <Form className="">
          <div className="">
            <label className="" htmlFor="name">
              Technique Name
            </label>
            <Field type="text" name="name"></Field>
          </div>
          <Button type={"submit"}>Add Technique</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTechnique;
