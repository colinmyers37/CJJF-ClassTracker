import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

const SessionCard = () => {
  const { auth } = useSelector((state) => state);
  const userId = auth.userId;
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    axios.get(`session/${userId}`).then((res) => setSessions(res.data));
  }, []);
  //   console.log(sessions);

  return (
    <div>
      {sessions.map((session) => {
        return (
          <div
            style={{
              backgroundColor: "#D3D3D3",
              width: "65vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
              borderRadius: "10px",
              border: "2px solid",
              margin: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                width: "25vw",
                height: "10vh",
                backgroundColor: "#A11F22",
                borderRadius: "5px",
                margin: "0px",
                padding: "0px",
              }}
            >
              <h3 style={{ color: "white" }}>Class Date</h3>
              <h3 style={{ color: "white" }}>
                {moment(session.date).format("LL")}
              </h3>
            </div>
            <div
              style={{
                width: "40vw",

                display: "flex",
                flexDirection: "column",

                textAlign: "center",
              }}
            >
              <h2>Techniques Learned</h2>
              <h4>{session.lesson}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SessionCard;
