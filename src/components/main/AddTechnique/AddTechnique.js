import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTechnique = () => {
  let category;

  const handleChange = (option) => {
    category = option.target.value;
    // console.log(option.target.value);
  };

  const handleSubmit = async (values) => {
    const body = {
      name: values.name,
      category: category,
    };
    axios.post("/technique", body);
    window.location.reload();
  };
  return (
    <div style={{ display: "flex" }}>
      <Formik
        initialValues={{
          name: "",
          category: "",
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
            <select
              name="category"
              className="form-select"
              onChange={handleChange}
            >
              <option selected>Select Category</option>
              <option>Position</option>
              <option>Guard Pass</option>
              <option>Bottom Guard</option>
            </select>
            <Button
              className="btn-danger"
              type={"submit"}
              style={{
                width: "150px",
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
