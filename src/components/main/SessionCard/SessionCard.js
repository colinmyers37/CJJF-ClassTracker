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
      <h1>Session Card</h1>

      {sessions.map((session) => {
        return (
          <div>
            <h2>{moment(session.date).format("LL")}</h2>
            <h3>{session.lesson}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default SessionCard;
