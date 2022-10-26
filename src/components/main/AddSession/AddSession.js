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
  };
  const [techniques, setTechniques] = useState([]);

  const options = techniques.map((tech) => {
    return { value: tech.name, label: tech.name };
  });

  useEffect(() => {
    axios.get("/technique").then((res) => setTechniques(res.data));
  }, []);
  console.log(techniques);
  const handleChange = (selectedOption) => {
    lessonPlan = selectedOption;
    // console.log("handleChange", selectedOption);
  };
  return (
    <div className="">
      <h1>Add Session</h1>
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
        <Form className="">
          <div className="">
            <label className="" htmlFor="Date">
              Date
            </label>
            <Field type="date" name="date"></Field>
          </div>
          <Select
            options={options}
            isMulti={true}
            onChange={handleChange}
            htmlFor="lesson"
            name="lesson"
          />
          <Button type={"submit"}>Add Session</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddSession;
