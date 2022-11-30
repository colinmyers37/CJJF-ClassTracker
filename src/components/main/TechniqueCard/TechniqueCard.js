import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

const TechniqueCard = () => {
  const [techniques, setTechniques] = useState([]);
  useEffect(() => {
    axios.get(`/technique`).then((res) => setTechniques(res.data));
  }, []);
  console.log(techniques);
  return (
    <div
      className="d-flex align-center p-3 table-wrapper"
      style={{
        width: '85vw',
      }}
    >
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Technique</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {techniques.map((technique) => (
            <tr>
              <td>{technique.name}</td>
              <td>{technique.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechniqueCard;
