import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalNavbar from "./components/layout/GlobalNavbar";
import LandingPage from "./components/main/LandingPage";
import LoginForm from "./components/auth/LoginForm";
import InsightsPage from "./components/user/InsightsPage";
import AboutUs from "./components/user/AboutUs";
import Techniques from "./components/user/Techniques";

import { save } from "./store/locationSlice";
function App() {
  // const token = useSelector((state) => state.auth.token);
  // console.log(save);
  const [locationName, setLocationName] = useState("");
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state);
  const handleData = (e) => {
    setLocationName(e.target.value);
  };
  const handleSave = () => {
    const ifPrestent = location.includes(locationName);
    if (locationName !== undefined && !ifPrestent) {
      dispatch(save(locationName));
      setLocationName("");
    } else {
      setLocationName("");
    }
  };
  useEffect(() => {
    handleSave();
  });
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
