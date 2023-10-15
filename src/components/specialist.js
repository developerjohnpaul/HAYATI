import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import { app } from "../App";
import { IoIosArrowBack } from "react-icons/io";
import { mockApi } from "./mockApi";
const Specialist = () => {
  const Api = useContext(mockApi);
  const App = useContext(app);
  const location = useLocation();
  const Navigate = useNavigate();
  useEffect(() => {
    App.setCurrentPage("Specialist");
  }, []);
  const [specialist, setSpecialist] = useState({});
  const [experience, setExperience] = useState("");
  const [patients, setPatients] = useState("");
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN == undefined) {
      Navigate("/Welcome");
    }
  }, []);
  const [newMonth, setNewMonth] = useState(
    Api.appointment[Api.appointment.length - 1].month
  );
  const [pendingAppointment, setPendingAppointment] = useState(false);
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#0893A5");
  }, []);

  useEffect(() => {
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );

    const filteredSpecialist = Api.specialist.filter((value) => {
      return value.id == decryptedSID;
    });
    setSpecialist(filteredSpecialist[0]);
    if (filteredSpecialist[0].Patients <= 100) {
      setPatients(filteredSpecialist[0].Patients);
    } else {
      setPatients("100+");
    }
    if (filteredSpecialist[0].experience <= 50) {
      setExperience(filteredSpecialist[0].experience);
    } else {
      setExperience("50+");
    }
  }, []);
  const bookAppointment = () => {
    setPendingAppointment(true);
    const Appointment = Api.appointment;
    const lastAppointment = Appointment[Appointment.length - 1];
    var newdate;
    var newYear;
    if (lastAppointment.date > 29) {
      setNewDate(1);
      newdate = 1;
      if (lastAppointment.month == "january") {
        setNewMonth("february");
      } else if (lastAppointment.month == "february") {
        setNewMonth("march");
      } else if (lastAppointment.month == "march") {
        setNewMonth("april");
      } else if (lastAppointment.month == "april") {
        setNewMonth("may");
      } else if (lastAppointment.month == "may") {
        setNewMonth("june");
      } else if (lastAppointment.month == "june") {
        setNewMonth("july");
      } else if (lastAppointment.month == "july") {
        setNewMonth("august");
      } else if (lastAppointment.month == "august") {
        setNewMonth("september");
      } else if (lastAppointment.month == "september") {
        setNewMonth("october");
      } else if (lastAppointment.month == "october") {
        setNewMonth("november");
      } else if (lastAppointment.month == "november") {
        setNewMonth("december");
      } else if (lastAppointment.month == "december") {
        setNewMonth("january");
        newYear = lastAppointment.year + 1;
      }
    } else {
      setNewDate(() => {
        return lastAppointment.date + 1;
      });
      newdate = lastAppointment.date + 1;
    }
    const newAppointment = {
      date: newdate,
      month: newMonth,
      year: 2020,
      title: `Meeting with  ${specialist.specialistName}`,
      appointee: `${specialist.specialistName}`,
      appointeesImg: specialist.SpeacialistProfileImg,
      appointeesProffession: ` ${specialist.specialty}`,
      startTime: "12:43am",
      endTime: " 5:00pm",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      specialistId: lastAppointment.specialistId + 1,
      appointmentId: lastAppointment.appointmentId + 1,
    };
    Appointment.push(newAppointment);

    setTimeout(() => {
      setPendingAppointment(false);
      Navigate(
        `/BookedAppointment#${CryptoJS.AES.encrypt(
          JSON.stringify(lastAppointment.appointmentId + 1),
          App.SK
        ).toString()}`
      );
      App.instantScrollToTop();
    }, 1000);
  };
  return (
    <>
      <div id="SpecialistPage">
        <div id="spere1">
          <div className="flexStart fixed-top" id="spre14">
            <button
              id="spere2"
              type="button"
              onClick={() => {
                Navigate("/");
              }}
            >
              <IoIosArrowBack />
            </button>
            <small id="spere3"> Doctor's Detail</small>
          </div>
          <div className="flexCenter">
            {" "}
            <div id="spere4">
              <div className="flexColumnCenter" id="spre10">
                <div id="spre5">
                  <small id="spre8">{specialist.specialistName}</small>
                  <small id="spre9">
                    {specialist.specialty} -{specialist.stateOfResidence}
                  </small>
                </div>
              </div>
              <div id="spre6">
                <img src={specialist.SpeacialistProfileImg} id="spre7" />
              </div>
            </div>
          </div>
        </div>

        <div id="spre11">
          <div className="flexStart">
            <div id="spre12">
              <small id="spre13">Patients</small>
              <small id="spre15">{patients}</small>
            </div>
            <div id="spre12">
              {" "}
              <small id="spre13">Experience</small>
              <small id="spre15">{experience} Yrs</small>
            </div>
            <div id="spre12">
              <small id="spre13">Rating</small>
              <small id="spre15">4.0</small>
            </div>
          </div>

          <div id="spre16">
            <h5 id="spre17">About Doctor</h5>
            <p id="spre18">{specialist.about}</p>
          </div>

          <div className="flexSpaceBetween" id="spre19">
            <small id="spre17">Location</small>
            <a href={specialist.gMapLocationRLink}>
              {" "}
              <button id="spre20" type="button">
                View map
              </button>
            </a>
          </div>
          <div id="spre21">
            <iframe
              src={specialist.gMapLocationDLink}
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flexCenter">
            {" "}
            <button type="button" id="spre22" onClick={bookAppointment}>
              {!pendingAppointment && <span>Book Appointment</span>}
              {pendingAppointment && (
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
export default Specialist;
