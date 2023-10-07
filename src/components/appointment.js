import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PiCalendarFill, PiClockLight } from "react-icons/pi";
import { app } from "../App";
import { mockApi } from "./mockApi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import CryptoJS from "crypto-js";

export const AppointmentNavbar = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  useEffect(() => {
    App.setCurrentPage("Appointments");
  }, []);
  const [fixedNav, setFixedNav] = useState(false);
  const test = () => {
    if (
      document.documentElement.scrollTop == 155 ||
      document.documentElement.scrollTop > 155
    ) {

      setFixedNav(true);
    } else {
 
      setFixedNav(false);
    }
  };
  window.addEventListener("scroll", test);
  return (
    <>
      <div className="flexCenter">
        <h1 id="apre2">Appointment</h1>
      </div>
      <AppointmentNavCodeBase />
      {fixedNav && (
        <div className="fixed-top" id="apre18">
          <AppointmentNavCodeBase />
        </div>
      )}
      <Outlet />
    </>
  );
};

export const AppointmentNavCodeBase = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  return (
    <>
      <div id="apre1">
        <div id="AppointmentNav">
          {App.currentAppointmentPage == "Upcoming" && (
            <button
              id="activeAppointmentNavBtn"
              onClick={() => {
                Navigate("/Appointments/Upcoming");
                App.instantScrollToTop();
              }}
            >
              Upcoming
            </button>
          )}
          {App.currentAppointmentPage != "Upcoming" && (
            <button
              id="appointmentNavBtn"
              onClick={() => {
                Navigate("/Appointments/Upcoming");
                App.instantScrollToTop();
              }}
            >
              Upcoming
            </button>
          )}
          {App.currentAppointmentPage == "Complete" && (
            <button
              id="activeAppointmentNavBtn"
              onClick={() => {
                Navigate("/Appointments/Complete");
                App.instantScrollToTop();
              }}
            >
              Complete
            </button>
          )}
          {App.currentAppointmentPage != "Complete" && (
            <button
              id="appointmentNavBtn"
              onClick={() => {
                Navigate("/Appointments/Complete");
                App.instantScrollToTop();
              }}
            >
              Complete
            </button>
          )}
          {App.currentAppointmentPage == "Cancelled" && (
            <button
              id="activeAppointmentNavBtn"
              onClick={() => {
                Navigate("/Appointments/Cancelled");
                App.instantScrollToTop();
              }}
            >
              Cancelled
            </button>
          )}
          {App.currentAppointmentPage != "Cancelled" && (
            <button
              id="appointmentNavBtn"
              onClick={() => {
                Navigate("/Appointments/Cancelled");
                App.instantScrollToTop();
              }}
            >
              Cancelled
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export const UpcomingAppointments = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  useEffect(() => {
    App.setCurrentAppointmentPage("Upcoming");
    Navigate(`/Appointments/Upcoming`);
  }, []);
  return (
    <>
      <div id="AppointmentPage">
        {Api.appointment.map((value, index) => (
          <div key={index} id="apre14">
            {" "}
            {value.status == "Upcoming" && (
              <div id="appointments">
                <div className="flexStart">
                  <div
                    id="apre3"
                    onClick={() => {
                      Navigate(
                        `/Specialist/#${CryptoJS.AES.encrypt(
                          JSON.stringify(value.specialistId),
                          App.SK
                        ).toString()}`
                      );
                      App.instantScrollToTop();
                    }}
                  >
                    <img src={value.appointeesImg} id="apre4" />
                  </div>
                  <div id="apre5">
                    <h1 id="apre6">{value.appointee}</h1>
                    <small>{value.appointeesProffession}</small>
                  </div>
                </div>
                <div id="apre7">
                  <div id="apre8">
                    <>
                      <span id="apre9">
                        {" "}
                        <span id="apre10">
                          {" "}
                          <PiCalendarFill />
                        </span>{" "}
                        <span>Monday, June 28</span>
                      </span>
                    </>
                    <>
                      <span id="apre9">
                        {" "}
                        <span id="apre10">
                          {" "}
                          <PiClockLight />{" "}
                        </span>
                        <span>
                          {value.startTime}-{value.endTime} GMT
                        </span>
                      </span>
                    </>
                  </div>
                </div>
                <div id="apre11">
                  <button
                    id="apre12"
                    onClick={() => {
                      Api.setAppointment((value) => {
                        return value.map((val, ind) => {
                          if (ind === index) {
                            return {
                              ...val,
                              status: "Cancelled",
                            };
                          } else {
                            return val;
                          }
                        });
                      });
                    }}
                  >
                    Cancel
                  </button>
                  <button id="apre13">Reschedule</button>
                </div>
              </div>
            )}{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export const CompletedAppointments = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  useEffect(() => {
    App.setCurrentAppointmentPage("Complete");
    Navigate(`/Appointments/Complete`);
  }, []);
  return (
    <>
      <div id="AppointmentPage">
        {Api.appointment.map((value, index) => (
          <div key={index} id="apre14">
            {" "}
            {value.status == "Completed" && (
              <div id="appointments">
                <div className="flexStart">
                  <div
                    id="apre3"
                    onClick={() => {
                      Navigate(
                        `/Specialist/#${CryptoJS.AES.encrypt(
                          JSON.stringify(value.specialistId),
                          App.SK
                        ).toString()}`
                      );
                      App.instantScrollToTop();
                    }}
                  >
                    <img src={value.appointeesImg} id="apre4" />
                  </div>
                  <div id="apre5">
                    <h1 id="apre6">{value.appointee}</h1>
                    <small>{value.appointeesProffession}</small>
                  </div>
                </div>
                <div id="apre7">
                  <div id="apre8">
                    <>
                      <span id="apre9">
                        {" "}
                        <span id="apre10">
                          {" "}
                          <PiCalendarFill />
                        </span>{" "}
                        <span>Monday, June 28</span>
                      </span>
                    </>
                    <>
                      <span id="apre9">
                        {" "}
                        <span id="apre10">
                          {" "}
                          <PiClockLight />{" "}
                        </span>
                        <span>
                          {value.startTime}-{value.endTime} GMT
                        </span>
                      </span>
                    </>
                  </div>
                </div>
                <div id="apre15">
                  <button id="apre16">
                    <BsFillCheckCircleFill />
                  </button>
                </div>
              </div>
            )}{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export const CancelledAppointments = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  useEffect(() => {
    App.setCurrentAppointmentPage("Cancelled");
    Navigate(`/Appointments/Cancelled`);
  }, []);
  return (
    <>
      <div id="AppointmentPage">
        {Api.appointment.map((value, index) => (
          <div key={index} id="apre14">
            {" "}
            {value.status == "Cancelled" && (
              <div id="appointments">
                <div className="flexStart">
                  <div
                    id="apre3"
                    onClick={() => {
                      Navigate(
                        `/Specialist/#${CryptoJS.AES.encrypt(
                          JSON.stringify(value.specialistId),
                          App.SK
                        ).toString()}`
                      );
                      App.instantScrollToTop();
                    }}
                  >
                    <img src={value.appointeesImg} id="apre4" />
                  </div>
                  <div id="apre5">
                    <h1 id="apre6">{value.appointee}</h1>
                    <small>{value.appointeesProffession}</small>
                  </div>
                </div>
                <div id="apre7">
                  <div id="apre8">
                    <>
                      <span id="apre9">
                        {" "}
                        <span id="apre10">
                          {" "}
                          <PiCalendarFill />
                        </span>{" "}
                        <span>Monday, June 28</span>
                      </span>
                    </>
                    <>
                      <span id="apre9">
                        {" "}
                        <span id="apre10">
                          {" "}
                          <PiClockLight />{" "}
                        </span>
                        <span>
                          {value.startTime}-{value.endTime} GMT
                        </span>
                      </span>
                    </>
                  </div>
                </div>
                <div id="apre15">
                  <button id="apre17">
                    <AiFillCloseCircle />
                  </button>
                </div>
              </div>
            )}{" "}
          </div>
        ))}
      </div>
    </>
  );
};
