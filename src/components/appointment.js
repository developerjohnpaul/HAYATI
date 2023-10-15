import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PiCalendarFill, PiClockLight } from "react-icons/pi";
import { app } from "../App";
import { mockApi } from "./mockApi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
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
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  useEffect(() => {
    const upcomingAppointment = Api.appointment.filter((value) => {
      return value.status == "Upcoming";
    });
    setUpcomingAppointments(upcomingAppointment);
  }, [Api.appointment]);

  useEffect(() => {
    App.setCurrentAppointmentPage("Upcoming");
    Navigate(`/Appointments/Upcoming`);
  }, []);
  return (
    <>
      <div id="AppointmentPage">
        {upcomingAppointments == 0 && (
          <>
            <img
              src={require("../images/emptyAppointmentAnimation.jpg")}
              id="apre19"
            />
            <p id="apre20">oops you dont have any upcoming appointments </p>
          </>
        )}
        {Api.appointment.toReversed().map((value, index) => (
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
                        <span>
                          {value.date},{value.month} {value.year}
                        </span>
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
                      Api.setAppointment((valu) => {
                        return valu.map((val, ind) => {
                          if (val.appointmentId === value.appointmentId) {
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
                  <button
                    id="apre13"
                    onClick={() => {
                      Navigate(
                        `/BookedAppointment#${CryptoJS.AES.encrypt(
                          JSON.stringify(value.appointmentId),
                          App.SK
                        ).toString()}`
                      );
                      App.instantScrollToTop();
                    }}
                  >
                    Reschedule
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
                        <span>
                          {" "}
                          {value.date},{value.month} {value.year}
                        </span>
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
                        <span>
                          {" "}
                          {value.date},{value.month} {value.year}
                        </span>
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

export const BookedAppointmentNav = () => {
  useEffect(() => {
    App.setCurrentPage("BookedAppointment");
  }, []);
  const Navigate = useNavigate();
  const App = useContext(app);
  return (
    <>
      <div id="rere4">
        {" "}
        {App.popUpStatus == "save" && <div id="ge2"></div>}
        <div id="rere1">
          <div className="flexStart">
            <button
              type="button"
              id="rere2"
              onClick={() => {
                Navigate("/");
              }}
            >
              <IoIosArrowBack />
            </button>{" "}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export const BookedAppointment = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  const location = useLocation();
  const [appointmentId, setAppointmentId] = useState("");
  const [tabbedAppointment, setTabbedAppointment] = useState({});
  const [AbortingAppointment, setAbortingAppointment] = useState(false);
  useEffect(() => {
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );
    const filteredAppointment = Api.appointment.filter((value) => {
      return Number(value.appointmentId) == Number(decryptedSID);
    });
    setTabbedAppointment(filteredAppointment[0]);
  }, []);
  const cancelAppointment = () => {
    setAbortingAppointment(true);
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );
    const filteredAppointment = Api.appointment.filter((value) => {
      return Number(value.appointmentId) !== Number(decryptedSID);
    });
    Api.setAppointment(filteredAppointment);
    setTimeout(() => {
      setAbortingAppointment(false);
      Navigate(`/`);
      App.instantScrollToTop();
    }, 1000);
  };
  return (
    <>
      <div className="flexCenter">
        {" "}
        <div id="ge3">
          <div id="bare2">
            <img
              src={require("../images/bookedAppointmentAnimation.png")}
              id="bare1"
            />
          </div>{" "}
          <div className="flexCenter">
            <p id="bare3">
              Your Appointment has been successfully booked. You will get a
              notification now
            </p>
          </div>
          <div className="flexCenter">
            <div id="bare4">
              <div id="bare5">
                <p>{tabbedAppointment.title}</p>
              </div>
              <div id="bare6">
                <div id="bare7">
                  <li id="bare8">{tabbedAppointment.appointeesProffession}</li>
                  <li id="bare9">{tabbedAppointment.appointee}</li>
                </div>
                <div id="bare7">
                  <li id="bare8">Date</li>
                  <li id="bare9">
                    {tabbedAppointment.date},{tabbedAppointment.month}{" "}
                    {tabbedAppointment.year}
                  </li>
                </div>{" "}
                <div id="bare7">
                  <li id="bare8">Time</li>
                  <li id="bare9">{tabbedAppointment.startTime}</li>
                </div>
              </div>
            </div>
          </div>
          <div id="bare12">
            <button type="button" id="bare11" onClick={cancelAppointment}>
              {!AbortingAppointment && <span> Cancel consultation</span>}
              {AbortingAppointment && (
                <span
                  className="spinner-border"
                  id="spre23"
                  role="status"
                ></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
