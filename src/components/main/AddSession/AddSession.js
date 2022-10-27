import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { useSelector } from "react-redux";

const AddSession = () => {
  const { auth } = useSelector((state) => state);
  let lessonPlan;

  const handleSubmit = async (values) => {
    console.log(values.date);

    const body = {
      ...values,
      lesson: lessonPlan,
      userId: auth.userId,
    };
    axios.post("/session", body);
    window.location.reload();
  };
  const [techniques, setTechniques] = useState([]);

  const options = techniques.map((tech) => {
    return { value: tech.name, label: tech.name };
  });

  useEffect(() => {
    axios.get("/technique").then((res) => setTechniques(res.data));
  }, []);
  // console.log(techniques);
  const handleChange = (selectedOption) => {
    lessonPlan = selectedOption.map((option) => option.value).join("->");
    // console.log(selectedOption.map((option) => option.value).join(","));
  };
  return (
    <div
      style={{
        backgroundColor: "#D3D3D3",
        width: "75vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: "2px solid",
        margin: "30px",
      }}
    >
      <h2>Add Session</h2>
      <Formik
        initialValues={{
          date: "",
          time: null,
          userId: auth.userId,
          lesson: null,
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({ values: "" });
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="">
            <label className="" htmlFor="Date">
              Date
            </label>
            <Field type="date" name="date" style={{ width: "60vw" }}></Field>
          </div>
          <Select
            options={options}
            isMulti={true}
            onChange={handleChange}
            htmlFor="lesson"
            name="lesson"
          />
          <div
            style={{
              width: "60vw",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              type={"submit"}
              style={{ width: "40vw", backgroundColor: "#A11F22" }}
            >
              Add Session
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddSession;
