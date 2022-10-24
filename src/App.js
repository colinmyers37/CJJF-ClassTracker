import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import React from "react";

import GlobalNavbar from "./components/layout/GlobalNavbar";
import LandingPage from "./components/main/LandingPage";
import LoginForm from "./components/auth/LoginForm";
import InsightsPage from "./components/user/InsightsPage";
import AboutUs from "./components/user/AboutUs";
import Techniques from "./components/user/Techniques";

function App() {
  // const token = useSelector((state) => state.auth.token);
  // console.log(save);

  return (
    <>
      <GlobalNavbar />
      <main className="main-styles">
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginForm />} />

          <>
            <Route path="/insights" element={<InsightsPage />} />
          </>
          <>
            <Route path="/aboutus" element={<AboutUs />} />
          </>
          <>
            <Route path="/techniques" element={<Techniques />} />
          </>
        </Routes>
      </main>
    </>
  );
}

export default App;
