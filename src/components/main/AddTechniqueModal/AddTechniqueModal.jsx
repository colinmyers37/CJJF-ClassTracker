import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './AddTechniqueModal.module.css';

const AddTechniqueModal = ({ closeModal }) => {
  const closeModalHandler = () => {
    closeModal(false);
  };
  return (
    <div className={styles['modalBackground']}>
      <div className={styles['modalContainer']}>
        <div>
          <Button onClick={closeModalHandler}>Close Modal</Button>
        </div>
        <h1>This is the modal</h1>
      </div>
    </div>
  );
};

export default AddTechniqueModal;
