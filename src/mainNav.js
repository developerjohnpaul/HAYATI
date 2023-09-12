import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { PiHouseFill, PiHouseBold, PiUsersThreeBold } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { HiCalendar } from "react-icons/hi";
import { app } from "./App";
import { useContext, useEffect } from "react";

const MainNav = () => {
  const App = useContext(app);
  const Navigate = useNavigate();
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#047E8E");
  }, []);
  const navigatePage = (page) => {
    App.setCurrentPage(page);
    scrollToTop();
    localStorage.setItem("CUP", page);
  };
  return (
    <>
      <div id="mainNav" className="fixed-bottom">
        <div className="flexCenter">
          {App.currentPage == "Home" && (
            <button id="activeMainNavBtn" onClick={() => navigatePage("home")}>
              <span id="mainNavBtnIcon">
                <PiHouseFill />
              </span>
              <small id="mainNavBtnText">Home</small>
            </button>
          )}
          {App.currentPage != "Home" && (
            <button
              id="inActiveMainNavBtn"
              onClick={() => navigatePage("Home")}
            >
              <span id="mainNavBtnIcon">
                <PiHouseFill />
              </span>
              <small id="mainNavBtnText">Home</small>
            </button>
          )}
          {App.currentPage == "Report" && (
            <button
              id="activeMainNavBtn"
              onClick={() => navigatePage("Report")}
            >
              <span id="mainNavBtnIcon">
                <TbReport />
              </span>
              <small id="mainNavBtnText">Report</small>
            </button>
          )}
          {App.currentPage != "Report" && (
            <button
              id="inActiveMainNavBtn"
              onClick={() => navigatePage("Report")}
            >
              <span id="mainNavBtnIcon">
                <TbReport />
              </span>
              <small id="mainNavBtnText">Report</small>
            </button>
          )}
          {App.currentPage == "Appointment" && (
            <button
              id="activeMainNavBtn"
              onClick={() => navigatePage("Appointment")}
            >
              <span id="mainNavBtnIcon">
                <HiCalendar />
              </span>
              <small id="mainNavBtnText">Appointment</small>
            </button>
          )}
          {App.currentPage != "Appointment" && (
            <button
              id="inActiveMainNavBtn"
              onClick={() => navigatePage("Appointment")}
            >
              <span id="mainNavBtnIcon">
                <HiCalendar />
              </span>
              <small id="mainNavBtnText">Appointment</small>
            </button>
          )}
          {App.currentPage == "Community" && (
            <button
              id="activeMainNavBtn"
              onClick={() => navigatePage("Community")}
            >
              <span id="mainNavBtnIcon">
                <PiUsersThreeBold />
              </span>
              <small id="mainNavBtnText">Community</small>
            </button>
          )}
          {App.currentPage != "Community" && (
            <button
              id="inActiveMainNavBtn"
              onClick={() => navigatePage("Community")}
            >
              <span id="mainNavBtnIcon">
                <PiUsersThreeBold />
              </span>
              <small id="mainNavBtnText">Community</small>
            </button>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MainNav;
