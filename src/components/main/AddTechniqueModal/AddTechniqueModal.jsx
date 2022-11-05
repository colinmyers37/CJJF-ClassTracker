import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './AddTechniqueModal.module.css';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

const AddTechniqueModal = ({ closeModal }) => {
  const closeModalHandler = () => {
    closeModal(false);
  };

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
    axios.post('/technique', body);
    window.location.reload();
  };
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
            name: '',
            category: '',
          }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm({ values: '' });
          }}
        >
          <Form className="">
            <div className={styles['form-container']}>
              <h1>Add Technique</h1>
              <label className="" htmlFor="name" style={{ fontWeight: 'bold' }}>
                Technique Name
              </label>
              <Field
                type="text"
                name="name"
                className={styles['technique-field']}
              ></Field>
              <label htmlFor="category" style={{ fontWeight: 'bold' }}>
                Technique Category
              </label>
              <select
                name="category"
                className={styles['technique-select']}
                onChange={handleChange}
              >
                <option selected>Select Category</option>
                <option>Position</option>
                <option>Guard Pass</option>
                <option>Bottom Guard</option>
              </select>
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
              <button onClick={closeModalHandler} className={styles['modal-a']}>
                Back
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddTechniqueModal;
