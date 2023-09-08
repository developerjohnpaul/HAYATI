import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding";
import LoginNav from "./components/LoginNav";
import LoginPage from "./components/loginPage";
import SignUpNav from "./components/signUpNav";
import SignUpPage from "./components/signUpPage";
import MainNav from "./components/mainNav";
import Home from "./components/home";
import { createContext, useState } from "react";

export const app = createContext();

function App() {
  const [blurredBackgroundOverlayStatus, setBlurredBackgroundOverlayStatus] =
    useState("hidden");

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
      }}
    >
      <div id="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/Login" element={<LoginNav />}>
              <Route index element={<LoginPage />} />
            </Route>
            <Route path="/SignUp" element={<SignUpNav />}>
              <Route index element={<SignUpPage />} />
            </Route>
            <Route path="/Home" element={<MainNav />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </app.Provider>
  );
}

export default App;
