import React, { useState } from 'react';
import AddSession from '../main/AddSession/AddSession';
import SessionCard from '../main/SessionCard/SessionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSessionModal from '../main/AddSessionModal/AddSessionModal';

const InsightsPage = () => {
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
      <h2 style={{ fontSize: '30px', color: 'white' }}>Insights</h2>
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
          {/* <AddSession /> */}
          <button
            data-target="#myModal"
            data-toggle="modal"
            id="MainNavHelp"
            href="#"
            style={{
              color: '#A11F22',
              textDecoration: 'none',
              marginTop: '10px',
              border: 'none',
              padding: '0px',
              backgroundColor: 'white',
            }}
            onClick={modalHandler}
          >
            Add Session
          </button>
          {modalOpen && <AddSessionModal closeModal={setModalOpen} />}
          <SessionCard />
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
