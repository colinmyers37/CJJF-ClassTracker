import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';

const SessionCard = () => {
  const { auth } = useSelector((state) => state);
  const userId = auth.userId;
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    axios.get(`session/${userId}`).then((res) => setSessions(res.data));
  }, []);
  //   console.log(sessions);

  return (
    // <div>
    //   {sessions.map((session) => {
    //     return (
    //       <div
    //         style={{
    //           backgroundColor: '#D3D3D3',
    //           width: '65vw',
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'left',
    //           alignItems: 'center',
    //           borderRadius: '10px',
    //           border: '2px solid',
    //           margin: '30px',
    //         }}
    //       >
    //         <div
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'column',
    //             justifyContent: 'center',
    //             textAlign: 'center',
    //             alignItems: 'center',
    //             width: '25vw',
    //             height: '10vh',
    //             backgroundColor: '#A11F22',
    //             borderRadius: '5px',
    //             margin: '0px',
    //             padding: '0px',
    //           }}
    //         >
    //           <h3 style={{ color: 'white' }}>Class Date</h3>
    //           <h3 style={{ color: 'white' }}>
    //             {moment(session.date).format('LL')}
    //           </h3>
    //         </div>
    //         <div
    //           style={{
    //             width: '40vw',

    //             display: 'flex',
    //             flexDirection: 'column',

    //             textAlign: 'center',
    //           }}
    //         >
    //           <h4>Techniques Learned</h4>
    //           <h3>{session.lesson}</h3>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="d-flex align-center p-3">
      <div className="container mt-4">
        <div className="row">
          {sessions.map((session) => {
            return (
              <div className="col-auto mb-3">
                <Card>
                  <Card.Header
                    className="text-center"
                    style={{
                      backgroundColor: '#A11F22',
                    }}
                  >
                    <h4
                      style={{
                        color: 'white',
                      }}
                    >
                      Adult Jiu Jitsu
                    </h4>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Class Date: {moment(session.date).format('LL')}
                    </Card.Title>

                    <Card.Text className="text-center">
                      Techniqes Learned:
                    </Card.Text>
                    <Card.Text className="text-center">
                      {session.lesson}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
