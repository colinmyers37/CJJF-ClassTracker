import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import authActions from "../../store/authSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startingHandler = () => {
    dispatch(authActions.setRegister(true));
    navigate("/login");
  };

  return (
    <main className="">
      <section className="">
        <h1 className="">Welcome to CJJF Tracker</h1>
        <h3 className="">Jiu Jitsu Tracker App</h3>
        <button className="" type={"button"} onClick={startingHandler}>
          Get Started
        </button>
        <p className="">
          Already have an account?{" "}
          <button
            className=""
            onClick={() => {
              dispatch(authActions.setRegister(false));
              navigate("/login");
            }}
          >
            Login here.
          </button>
        </p>
      </section>
    </main>
  );
};

export default LandingPage;
