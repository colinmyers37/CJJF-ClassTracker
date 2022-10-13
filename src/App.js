import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

import GlobalNavbar from "./components/layout/GlobalNavbar";
import LandingPage from "./components/main/LandingPage";
import LoginForm from "./components/auth/LoginForm";
// import InsightsPage from "./components/user/InsightsPage";

function App() {
  // const token = useSelector((state) => state.auth.token);

  return (
    <>
      <GlobalNavbar />
      <main className="main-styles">
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginForm />} />
          {/* {token && (
            <>
              <Route path="/dashboard" element={<InsightsPage />} />
            </>
          )} */}
        </Routes>
      </main>
    </>
  );
}

export default App;
