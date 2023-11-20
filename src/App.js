import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Onboarding from "./components/onboarding";
import LoginNav from "./components/LoginNav";
import LoginPage from "./components/loginPage";
import SignUpNav from "./components/signUpNav";
import SignUpPage from "./components/signUpPage";
import MainNav from "./components/mainNav";
import Home from "./components/home";
import { mockApi } from "./components/mockApi";
import { Notification, NotificationNav } from "./components/notification";
import {
  AppointmentNavbar,
  UpcomingAppointments,
  CompletedAppointments,
  CancelledAppointments,
  BookedAppointmentNav,
  BookedAppointment,
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
import {
  Settings,
  SettingsNav,
  EditProfileNav,
  EditProfile,
} from "./components/settings";
import { ReportNav, Reports } from "./components/reports";
import { createContext, useContext, useEffect, useState } from "react";
import Specialist from "./components/specialist";
import {
  ArticleNav,
  Article,
  TabbedArticle,
  Bookmark,
  BookmarkNav,
} from "./components/article";
export const app = createContext();

const App = () => {
  const Api = useContext(mockApi);
  const [blurredBackgroundOverlayStatus, setBlurredBackgroundOverlayStatus] =
    useState("hidden");
  const [currentAppointmentPage, setCurrentAppointmentPage] =
    useState("Upcoming");
  const [status, setStatus] = useState("pending");

  const [trendingArticles, setTrendingArticles] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [bookmark, setBookmark] = useState({});
  const [currentPage, setCurrentPage] = useState("Home");
  const [SK, setSk] = useState("6789114502311");

  const [latestMedication, setLatestMedication] = useState([]);

  const [dayReporting, setDayReporting] = useState("Mon");
  const [filteredReports, setFilteredReports] = useState([]);
  const instantScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN !== undefined) {
      setStatus("loggedOut");
    } else {
      setStatus("loggedIn");
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
  const [popUpStatus, setPopUpStatus] = useState("none");
  const [user, setUser] = useState([
    {
      Name: "Anna",
      Email: "xapic@gmail.com",
      Password: "12345",
      Gender: "",
      DOB: "",
      Country: "",
    },
  ]);
  useEffect(() => {
    const trendingArticle = Api.articles.filter((value) => {
      return value.status === "trending";
    });
    setTrendingArticles(trendingArticle);
    const relatedArticle = Api.articles.filter((value) => {
      return value.status === "related";
    });
    setRelatedArticles(relatedArticle);
  }, [Api.articles]);
  useEffect(() => {
    const bookmarkedArticles = Api.articles.filter((value) => {
      return value.bookMarked === true;
    });
    setBookmark(bookmarkedArticles[0]);
  }, [Api.articles]);

  useEffect(() => {
    const LatestMedication = Api.medications.filter((value, index) => {
      return index === Api.medications.length - 1;
    });
    setLatestMedication(LatestMedication);
  }, []);

  useEffect(() => {
    setFilteredReports(() => {
      const filteredReport = Api.weeklyActivities.filter((val, ind) => {
        return val.Day === dayReporting;
      });
      console.log(filteredReport);
      console.log(dayReporting);
      return filteredReport;
    });
  }, [dayReporting]);

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
        user: user,
        setUser: setUser,
        setStatus: setStatus,
        status: status,

        setBookmark: setBookmark,
        bookmark: bookmark,
        relatedArticles: relatedArticles,
        setRelatedArticles: setRelatedArticles,
        trendingArticles: trendingArticles,
        setTrendingArticles: setTrendingArticles,
        latestMedication: latestMedication,
        setLatestMedication: setLatestMedication,
        dayReporting: dayReporting,
        setDayReporting: setDayReporting,
        filteredReports: filteredReports,
        setFilteredReports: setFilteredReports,
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
              <Route path="/Article" element={<ArticleNav />}>
                <Route index element={<Article />} />
              </Route>

              <Route path="/Article/Tabbed" element={<TabbedArticle />} />
              <Route path="/Bookmark" element={<BookmarkNav />}>
                <Route index element={<Bookmark />} />
              </Route>
              <Route
                path="/BookedAppointment"
                element={<BookedAppointmentNav />}
              >
                <Route index element={<BookedAppointment />} />
              </Route>
            </Route>
            <Route path="/Settings" element={<SettingsNav />}>
              <Route index element={<Settings />} />
            </Route>
            <Route path="/EditProfile" element={<EditProfileNav />}>
              <Route index element={<EditProfile />} />
            </Route>
            <Route path="/Notification" element={<NotificationNav />}>
              <Route index element={<Notification />} />
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
