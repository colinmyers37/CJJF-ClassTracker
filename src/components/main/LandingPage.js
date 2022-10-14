import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./LandingPage.module.css";

import authActions from "../../store/authSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startingHandler = () => {
    dispatch(authActions.setRegister(true));
    navigate("/login");
  };

  return (
    <main className={classes["main"]}>
      <section className={classes["text-section"]}>
        <h1 className={classes.heading}>CJJF Tracker</h1>
        <h3 className={classes.sub}>Track Your Jiu Jitsu</h3>
        <button
          className="btn btn-danger btn-lg"
          type={"button"}
          onClick={startingHandler}
        >
          Signup
        </button>
        <p className={classes["bot-text"]}>
          Already have an account?{" "}
          <button
            className={classes["bot-link"]}
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
