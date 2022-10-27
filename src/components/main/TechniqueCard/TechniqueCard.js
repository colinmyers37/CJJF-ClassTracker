import React, { useState, useEffect } from "react";
import axios from "axios";

const TechniqueCard = () => {
  const [techniques, setTechniques] = useState([]);
  useEffect(() => {
    axios.get(`/technique`).then((res) => setTechniques(res.data));
  }, []);
  console.log(techniques);
  return (
    <div>
      <table class="table" style={{ width: "80vw", textAlign: "center" }}>
        <thead class="thead-light">
          <tr>
            <th scope="col">Added Techniques</th>
          </tr>
        </thead>
        <tbody>
          {techniques.map((item) => {
            return [
              <tr>
                <td style={{ fontSize: "2rem" }}>{item.name}</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
      {/* {techniques.map((technique) => {
        return <h2>{technique.name}</h2>;
      })} */}
    </div>
  );
};

export default TechniqueCard;
