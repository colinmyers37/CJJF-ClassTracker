import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styles from './AddSessionModal.module.css';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const AddSessionModal = ({ closeModal }) => {
  const { auth } = useSelector((state) => state);
  let lessonPlan;

  const closeModalHandler = () => {
    closeModal(false);
  };

  let category;

  const handleChange = (selectedOption) => {
    lessonPlan = selectedOption.map((option) => option.value).join(' - ');
    // console.log(selectedOption.map((option) => option.value).join(","));
  };

  const handleSubmit = async (values) => {
    const body = {
      ...values,
      lesson: lessonPlan,
      userId: auth.userId,
    };
    axios.post('/session', body);
    window.location.reload();
  };

  const [techniques, setTechniques] = useState([]);

  const options = techniques.map((tech) => {
    return { value: tech.name, label: tech.name };
  });

  useEffect(() => {
    axios.get('/technique').then((res) => setTechniques(res.data));
  }, []);
  return (
    <div className={styles['modalBackground']}>
      {/* <div
        onClick={closeModalHandler}
        className={styles['modalBackground']}
      ></div> */}
      <div className={styles['modalContainer']}>
        {/* <div>
          <Button onClick={closeModalHandler}>Close Modal</Button>
        </div> */}
        <Formik
          initialValues={{
            date: '',
            time: null,
            userId: auth.userId,
            lesson: null,
          }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm({ values: '' });
          }}
        >
          <Form className="">
            <div className={styles['form-container']}>
              <h1>Add Session</h1>
              <div className={styles['column-wrapper']}>
                <label
                  className=""
                  htmlFor="date"
                  style={{ fontWeight: 'bold' }}
                >
                  Session Date
                </label>
                <Field
                  type="date"
                  name="date"
                  className={styles['technique-field']}
                ></Field>
              </div>
              <div className={styles['column-wrapper']}>
                <label htmlFor="" style={{ fontWeight: 'bold' }}>
                  Techniques Learned
                </label>
                <Select
                  options={options}
                  isMulti={true}
                  onChange={handleChange}
                  htmlFor="lesson"
                  name="lesson"
                  className={styles['technique-field']}
                />
              </div>
              <div className={styles['column-wrapper']}>
                <Button
                  className="btn-danger"
                  type={'submit'}
                  style={{
                    width: '150px',
                    height: '35px',
                    backgroundColor: '#A11F22',
                    padding: '0px',
                    margin: '10px',
                  }}
                >
                  Add Technique
                </Button>
                <button
                  onClick={closeModalHandler}
                  className={styles['modal-a']}
                >
                  Back
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddSessionModal;
