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
    <div style={{ display: "flex" }}>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label className="" htmlFor="name" style={{ fontWeight: "bold" }}>
              Technique Name
            </label>
            <Field type="text" name="name"></Field>
            <Button
              className="btn-danger"
              type={"submit"}
              style={{
                width: "15vw",
                backgroundColor: "#A11F22",
                padding: "0px",
                margin: "0px",
              }}
            >
              Add Technique
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTechnique;
