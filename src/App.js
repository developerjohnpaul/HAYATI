import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./onboarding";
import LoginNav from "./LoginNav";
import LoginPage from "./loginPage";
import SignUpNav from "./signUpNav";
import SignUpPage from "./signUpPage";
import MainNav from "./mainNav";
import Home from "./home";
import { createContext, useEffect, useState } from "react";

export const app = createContext();

const App = () => {
 
  const [blurredBackgroundOverlayStatus, setBlurredBackgroundOverlayStatus] =
    useState("hidden");
  const [currentPage, setCurrentPage] = useState("Home");
  useEffect(() => {
    if (localStorage.getItem("CUP") == undefined) {
      setCurrentPage("Home");
    } else {
      setCurrentPage(localStorage.getItem("CUP"));
    }
  });
  const [logInDetails, setlogInDetails] = useState([
    {
      Email: "",
      Password: "",
    },
  ]);
  const [signUpDetails, setSignUpDetails] = useState([
    {
      Email: "",
      Password: "",
      confirmPassword: "",
    },
  ]);

  return (
    <app.Provider
      value={{
        setBlurredBackgroundOverlayStatus: setBlurredBackgroundOverlayStatus,
        blurredBackgroundOverlayStatus: blurredBackgroundOverlayStatus,
        logInDetails: logInDetails,
        setlogInDetails: setlogInDetails,
        setSignUpDetails: setSignUpDetails,
        signUpDetails: signUpDetails,
        setCurrentPage: setCurrentPage,
        currentPage: currentPage,
      }}
    >
      <div id="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="Login" element={<LoginNav />}>
              <Route index element={<LoginPage />} />
            </Route>
            <Route path="SignUp" element={<SignUpNav />}>
              <Route index element={<SignUpPage />} />
            </Route>
            <Route path="Home" element={<MainNav />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </app.Provider>
  );
};

export default App;
