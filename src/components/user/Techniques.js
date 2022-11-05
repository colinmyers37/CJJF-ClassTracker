import React, { useState } from 'react';
import AddTechnique from '../main/AddTechnique/AddTechnique';
import TechniqueCard from '../main/TechniqueCard/TechniqueCard';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTechniqueModal from '../main/AddTechniqueModal/AddTechniqueModal';

const Techniques = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(true);
  };

  return (
    <div
      style={{
        backgroundColor: '#A11F22',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 style={{ fontSize: '30px', color: 'white' }}>Techniques</h2>
      <div
        style={{
          backgroundColor: 'white',
          width: '95vw',
          height: '95vh',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <AddTechnique /> */}
          <a
            data-target="#myModal"
            data-toggle="modal"
            id="MainNavHelp"
            href="#"
            style={{
              color: '#A11F22',
              textDecoration: 'none',
              marginTop: '5px',
            }}
            onClick={modalHandler}
          >
            Add Technique
          </a>
          {modalOpen && <AddTechniqueModal closeModal={setModalOpen} />}
          <TechniqueCard />
        </div>
      </div>
    </div>
  );
};

export default Techniques;
