import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PiCalendarFill, PiClockLight } from "react-icons/pi";
import { app } from "../App";
import { mockApi } from "../mockApi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const AppointmentNavbar = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  useEffect(() => {
    const CAP = localStorage.getItem("CAP");
    if (CAP == undefined || CAP == "" || CAP == "Upcoming") {
      App.setCurrentAppointmentPage("Upcoming");
      Navigate("/Appointments/Upcoming");
    } else {
      App.setCurrentAppointmentPage(CAP);
      Navigate(`/Appointments/${CAP}`);
    }
  }, []);
  return (
    <>
      <div className="flexCenter">
        <h1 id="apre2">Appointment</h1>
      </div>
      <div id="apre1" className="sticky-top">
        <div id="AppointmentNav">
          {App.currentAppointmentPage == "Upcoming" && (
            <button
              id="activeAppointmentNavBtn"
              onClick={() => {
                App.setCurrentAppointmentPage("Upcoming");
                Navigate("/Appointments/Upcoming");
                App.instantScrollToTop();
                localStorage.setItem("CAP", "Upcoming");
              }}
            >
              Upcoming
            </button>
          )}
          {App.currentAppointmentPage != "Upcoming" && (
            <button
              id="appointmentNavBtn"
              onClick={() => {
                App.setCurrentAppointmentPage("Upcoming");
                Navigate("/Appointments/Upcoming");
                App.instantScrollToTop();
                localStorage.setItem("CAP", "Upcoming");
              }}
            >
              Upcoming
            </button>
          )}
          {App.currentAppointmentPage == "Complete" && (
            <button
              id="activeAppointmentNavBtn"
              onClick={() => {
                App.setCurrentAppointmentPage("Complete");
                Navigate("/Appointments/Complete");
                App.instantScrollToTop();
                localStorage.setItem("CAP", "Complete");
              }}
            >
              Complete
            </button>
          )}
          {App.currentAppointmentPage != "Complete" && (
            <button
              id="appointmentNavBtn"
              onClick={() => {
                App.setCurrentAppointmentPage("Complete");
                Navigate("/Appointments/Complete");
                App.instantScrollToTop();
                localStorage.setItem("CAP", "Complete");
              }}
            >
              Complete
            </button>
          )}
          {App.currentAppointmentPage == "Cancelled" && (
            <button
              id="activeAppointmentNavBtn"
              onClick={() => {
                App.setCurrentAppointmentPage("Cancelled");
                Navigate("/Appointments/Cancelled");
                App.instantScrollToTop();
                localStorage.setItem("CAP", "Cancelled");
              }}
            >
              Cancelled
            </button>
          )}
          {App.currentAppointmentPage != "Cancelled" && (
            <button
              id="appointmentNavBtn"
              onClick={() => {
                App.setCurrentAppointmentPage("Cancelled");
                Navigate("/Appointments/Cancelled");
                App.instantScrollToTop();
                localStorage.setItem("CAP", "Cancelled");
              }}
            >
              Cancelled
            </button>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export const UpcomingAppointments = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const navigator = (e) => {
    App.setCurrentAppointmentPage(e);
  };

  return (
    <>
      <div id="AppointmentPage">
        {Api.appointment.map((value, index) => (
          <div key={index} id="apre14">
            {" "}
            {value.status == "Upcoming" && (
              <div id="appointments">
                <div className="flexStart">
                  <div id="apre3">
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
                  <button id="apre12">Cancel</button>
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
  const navigator = (e) => {
    App.setCurrentAppointmentPage(e);
  };

  return (
    <>
      <div id="AppointmentPage">
        {Api.appointment.map((value, index) => (
          <div key={index} id="apre14">
            {" "}
            {value.status == "Completed" && (
              <div id="appointments">
                <div className="flexStart">
                  <div id="apre3">
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
  const navigator = (e) => {
    App.setCurrentAppointmentPage(e);
  };

  return (
    <>
      <div id="AppointmentPage">
        {Api.appointment.map((value, index) => (
          <div key={index} id="apre14">
            {" "}
            {value.status == "Cancelled" && (
              <div id="appointments">
                <div className="flexStart">
                  <div id="apre3">
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
