import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { PiHouseFill, PiHouseBold, PiUsersThreeBold } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { HiCalendar } from "react-icons/hi";
import { app } from "../App";
import { useContext, useEffect } from "react";

const MainNav = () => {
  const App = useContext(app);
  const Navigate = useNavigate();
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#FFFFFF");
  }, []);

  return (
    <>
      <div id="mainNav" className="fixed-bottom">
        <div className="flexCenter">
          {App.currentPage == "Home" && (
            <button
              id="activeMainNavBtn"
              onClick={() => {
                App.setCurrentPage("Home");
                localStorage.setItem("CUP", "Home");
                Navigate("/");
                App.instantScrollToTop();
              }}
            >
              <span id="mainNavBtnIcon">
                <PiHouseFill />
              </span>
              <small id="mainNavBtnText">Home</small>
            </button>
          )}
          {App.currentPage != "Home" && (
            <button
              id="inActiveMainNavBtn"
              onClick={() => {
                App.setCurrentPage("Home");
                localStorage.setItem("CUP", "Home");
                Navigate("/");
                App.instantScrollToTop();
              }}
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
              onClick={() => {
                App.setCurrentPage("Report");
                localStorage.setItem("CUP", "Report");

                App.instantScrollToTop();
              }}
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
              onClick={() => {
                App.setCurrentPage("Report");
                localStorage.setItem("CUP", "Report");

                App.instantScrollToTop();
              }}
            >
              <span id="mainNavBtnIcon">
                <TbReport />
              </span>
              <small id="mainNavBtnText">Report</small>
            </button>
          )}
          {App.currentPage == "Appointments" && (
            <button
              id="activeMainNavBtn"
              onClick={() => {
                App.setCurrentPage("Appointments");
                localStorage.setItem("CUP", "Appointments");
                Navigate("/Appointments");
                App.instantScrollToTop();
              }}
            >
              <span id="mainNavBtnIcon">
                <HiCalendar />
              </span>
              <small id="mainNavBtnText">Appointments</small>
            </button>
          )}
          {App.currentPage != "Appointments" && (
            <button
              id="inActiveMainNavBtn"
              onClick={() => {
                App.setCurrentPage("Appointments");
                localStorage.setItem("CUP", "Appointments");
                Navigate("/Appointments");
                App.instantScrollToTop();
              }}
            >
              <span id="mainNavBtnIcon">
                <HiCalendar />
              </span>
              <small id="mainNavBtnText">Appointments</small>
            </button>
          )}
          {App.currentPage == "Community" && (
            <button
              id="activeMainNavBtn"
              onClick={() => {
                App.setCurrentPage("Community");
                localStorage.setItem("CUP", "Community");

                App.instantScrollToTop();
              }}
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
              onClick={() => {
                App.setCurrentPage("Community");
                localStorage.setItem("CUP", "Community");

                App.instantScrollToTop();
              }}
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
