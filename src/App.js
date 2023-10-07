import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding";
import LoginNav from "./components/LoginNav";
import LoginPage from "./components/loginPage";
import SignUpNav from "./components/signUpNav";
import SignUpPage from "./components/signUpPage";
import MainNav from "./components/mainNav";
import Home from "./components/home";
import {
  AppointmentNavbar,
  UpcomingAppointments,
  CompletedAppointments,
  CancelledAppointments,
} from "./components/appointment";
import {
  Medications,
  MedicationNav,
  MedicationDetailsNav,
  MedicationDetails,
  AddMedication,
  AddMedicationNav,
  EditMedication,
  EditMedicationNav,
} from "./components/medications";
import { ReportNav, Reports } from "./components/reports";
import { createContext, useEffect, useState } from "react";
import Specialist from "./components/specialist";
export const app = createContext();

const App = () => {
  const [blurredBackgroundOverlayStatus, setBlurredBackgroundOverlayStatus] =
    useState("hidden");
  const [currentAppointmentPage, setCurrentAppointmentPage] =
    useState("Upcoming");
  const [currentPage, setCurrentPage] = useState("Home");
  const [SK, setSk] = useState("1234567891011");
  const instantScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

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
  const [popUpStatus, setPopUpStatus] = useState("none");
useEffect(()=>{
  const currentUrl = window.location.href
  console.log("currentUrl",currentUrl)
})
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
        setCurrentAppointmentPage: setCurrentAppointmentPage,
        currentAppointmentPage: currentAppointmentPage,
        instantScrollToTop: instantScrollToTop,
        setSk: setSk,
        SK: SK,
        setPopUpStatus: setPopUpStatus,
        popUpStatus: popUpStatus,
      }}
    >
      <div id="App">
        <BrowserRouter>
          <Routes>
            <Route path="welcome" element={<Onboarding />} />
            <Route path="Login" element={<LoginNav />}>
              <Route index element={<LoginPage />} />
            </Route>
            <Route path="SignUp" element={<SignUpNav />}>
              <Route index element={<SignUpPage />} />
            </Route>
            <Route path="/" element={<MainNav />}>
              <Route index element={<Home />} />
              <Route path="/Reports" element={<ReportNav />}>
                <Route index element={<Reports />} />
              </Route>
              <Route path="Appointments" element={<AppointmentNavbar />}>
                <Route
                  path="/Appointments/Upcoming"
                  element={<UpcomingAppointments />}
                />
                <Route
                  path="/Appointments/Complete"
                  element={<CompletedAppointments />}
                />
                <Route
                  path="/Appointments/Cancelled"
                  element={<CancelledAppointments />}
                />
              </Route>
            </Route>
            <Route path="/Specialist" element={<Specialist />} />
            <Route path="/Medications" element={<MedicationNav />}>
              <Route index element={<Medications />} />
            </Route>
            <Route path="/MedicationDetails" element={<MedicationDetailsNav />}>
              <Route index element={<MedicationDetails />} />
            </Route>
            <Route path="/AddMedication" element={<AddMedicationNav />}>
              <Route index element={<AddMedication />} />
            </Route>
            <Route path="/EditMedication" element={<EditMedicationNav />}>
              <Route index element={<EditMedication />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </app.Provider>
  );
};

export default App;
