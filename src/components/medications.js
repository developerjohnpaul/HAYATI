import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { FaRegClock, FaBell } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import { app } from "../App";
import { mockApi } from "./mockApi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const MedicationNav = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN == undefined) {
      Navigate("/Welcome");
    }
  }, []);
  return (
    <>
      <div id="mere15">
        <div id="mere1">
          <div className="flexStart">
            <button
              type="button"
              id="mere2"
              onClick={() => {
                Navigate("/");
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="mere3">Medications</li>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export const Medications = () => {
  const Api = useContext(mockApi);
  const App = useContext(app);
  const Navigate = useNavigate();

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "white");
  }, []);

  return (
    <>
      <div className="flexColumnStart">
        {" "}
        <div id="ge3">
          {Api.medications.map((value, index) => (
            <div
              id="mere5"
              key={index}
              className="flexSpaceBetween"
              onClick={() => {
                Navigate(
                  `/MedicationDetails#${CryptoJS.AES.encrypt(
                    JSON.stringify(index),
                    App.SK
                  ).toString()}`
                );
                App.instantScrollToTop();
              }}
            >
              <div className="flexStart">
                <div className="flexCenter" id="mere6">
                  <img src={value.img} id="mere7" />
                </div>
                <div>
                  <li id="mere9">{value.name}</li>
                  <li id="mere8">{value.dosage}</li>
                  <li id="mere10" className="flexStart">
                    <b id="mere11">
                      <FaRegClock />{" "}
                    </b>
                    <span>
                      {" "}
                      {value.time.map((val, ind) => (
                        <span key={ind}>{ind == 0 && <span>{val}</span>}</span>
                      ))}
                    </span>
                  </li>
                </div>
              </div>

              <div className="flexColumnSpaceBetween">
                <li id="mere12">
                  <FaBell />{" "}
                </li>
                <li id="mere13">
                  <MdNavigateNext />
                </li>
              </div>
            </div>
          ))}
        </div>
        <div className="flexCenter">
          <button
            id="mere16"
            onClick={() => {
              Navigate("/AddMedication");
              App.instantScrollToTop();
            }}
          >
            Add Medications
          </button>
        </div>
      </div>
    </>
  );
};

export const MedicationDetailsNav = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN == undefined) {
      Navigate("/Welcome");
    }
  }, []);
  return (
    <>
      <div id="mere15">
        <div id="mere1">
          <div className="flexStart">
            <button
              type="button"
              id="mere2"
              onClick={() => {
                Navigate("/Medications");
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="mere3">Details</li>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export const MedicationDetails = () => {
  const Navigate = useNavigate();
  const Api = useContext(mockApi);
  const App = useContext(app);
  const [medicationDetail, setMedicationDetail] = useState([]);
  const [Id, setId] = useState();
  const Param = useParams();
  const location = useLocation();
  useEffect(() => {
    setMedicationDetail(() => {
      const encryptedSID = location.hash.substring(1);
      const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
        CryptoJS.enc.Utf8
      );
      setId(decryptedSID);
      const filteredDetails = Api.medications.filter((val, ind) => {
        return ind == decryptedSID;
      });
      return filteredDetails;
    });
  }, []);

  return (
    <>
      <div className="flexColumnStart">
        {" "}
        {medicationDetail.map((value, index) => (
          <div id="ge3" key={index}>
            <div id="mere17">
              <img src={value.img} id="mere18" />
            </div>
            <p id="mere20">{value.name}</p>
            <p id="mere21">Time</p>
            <div className="flexStart">
              {value.time.map((val, ind) => (
                <div id="mere22" key={ind}>
                  <span id="mere23">
                    <FaRegClock />
                  </span>
                  <span id="mere24">{val}</span>
                </div>
              ))}
            </div>
            <p id="mere25">Dosage</p>
            <p id="mere26">{value.dosage}</p>
            <p id="mere25">Start Date</p>
            <p id="mere26">{value.startDay}</p>
            <p id="mere25">Duration</p>
            <p id="mere26">{value.duration}</p>
            <div className="flexCenter" id="mere29">
              {" "}
              <button
                type="button"
                id="mere28"
                onClick={() => {
                  Navigate(
                    `/EditMedication#${CryptoJS.AES.encrypt(
                      Id,
                      App.SK
                    ).toString()}`
                  );
                  App.instantScrollToTop();
                }}
              >
                Change Schedule
              </button>
            </div>
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export const AddMedicationNav = () => {
  const Navigate = useNavigate();
  const App = useContext(app);
  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN == undefined) {
      Navigate("/Welcome");
    }
  }, []);
  return (
    <>
      <div id="mere15">
        {" "}
        {App.popUpStatus == "save" && <div id="ge2"></div>}
        <div id="mere1">
          <div className="flexStart">
            <button
              type="button"
              id="mere2"
              onClick={() => {
           Navigate("/Medications");
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="mere3">Add medication</li>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export const AddMedication = () => {
  const Api = useContext(mockApi);
  const App = useContext(app);
  const Navigate = useNavigate();
  const [medicationFormInputs, setMedicationFormInputs] = useState({
    img: "",
    name: "",
    dosage: "",
    duration: "",
    time: [],
    startDay: "",
  });

  const [dosageTime, setDosageTime] = useState("");
  const [showDosageTimeInput, setShowDosageTimeInput] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [inputDisplayed, setInputDislayed] = useState("none");
  const [endDate, setEndDate] = useState("");
  const [startMonthAndDay, setStartMonthAndDay] = useState("");
  const [endMonthAndDay, setEndMonthAndDay] = useState("");
  const [invalidInput, setInvalidInput] = useState("none");
  const [invalidInputWarningText, setInvalidInputWarningText] = useState("");
  const confirmMonthInWords = (e) => {
    if (e == 1) {
      return "jan";
    }
    if (e == 2) {
      return "feb";
    }
    if (e == 3) {
      return "mar";
    }
    if (e == 4) {
      return "apr";
    }
    if (e == 5) {
      return "may";
    }
    if (e == 6) {
      return "jun";
    }
    if (e == 7) {
      return "jul";
    }
    if (e == 8) {
      return "aug";
    }
    if (e == 9) {
      return "sep";
    }
    if (e == 10) {
      return "oct";
    }
    if (e == 11) {
      return "nov";
    }
    if (e == 12) {
      return "dec";
    }
  };
  const submitDurationDate = (e) => {
    e.preventDefault();
    if (startDate != "") {
      const startdate = new Date(startDate);
      const startDay = startdate.getDate() + 1;
      const startMonth = confirmMonthInWords(startdate.getMonth() + 1);
      setStartMonthAndDay(startDay + " " + startMonth);
      setInputDislayed("none");
    }
    if (endDate != "") {
      const enddate = new Date(endDate);
      const endDay = enddate.getDate() + 1;
      const endMonth = confirmMonthInWords(enddate.getMonth() + 1);
      setEndMonthAndDay(endDay + " " + endMonth);
      setInputDislayed("none");
    }
    if (startDate != "" && endDate != "") {
      const startdate = new Date(startDate);
      const enddate = new Date(endDate);

      const startDay = startdate.getDate() + 1;
      const startMonth = confirmMonthInWords(startdate.getMonth() + 1);
      setMedicationFormInputs((value, index) => {
        return {
          ...value,
          startDay: startDay + " " + startMonth,
        };
      });

      const conv = (enddate - startdate) / (1000 * 60 * 60 * 24);
      if (conv % 7 == 0) {
        const numWeeks = conv / 7;
        const inWords = ` ${numWeeks} weeks from start date`;
        setMedicationFormInputs((value, index) => {
          return {
            ...value,
            duration: inWords,
          };
        });
      }
      if (conv % 7 != 0) {
        const inWords = ` ${conv} days from start date`;
        setMedicationFormInputs((value, index) => {
          return {
            ...value,
            duration: inWords,
          };
        });
      }
    }
  };
  const saveMedication = () => {
    if (medicationFormInputs.name == "") {
      setInvalidInput("name");
      setInvalidInputWarningText("emptyNameInput");
      App.instantScrollToTop();
    } else if (medicationFormInputs.img == "") {
      setInvalidInput("img");
      setInvalidInputWarningText("emptyImgInput");
      var element = document.querySelector("#ge3");
      element.scrollIntoView({ behavior: "auto" });
    } else if (medicationFormInputs.dosage == "") {
      setInvalidInput("dosage");
      setInvalidInputWarningText("emptyDosageInput");
    } else if (medicationFormInputs.time.length == 0) {
      setInvalidInput("time");
      setInvalidInputWarningText("emptyTimeInput");
    } else if (medicationFormInputs.duration == "") {
      setInvalidInput("duration");
      setInvalidInputWarningText("emptyDurationInput");
    } else {
      setInvalidInput("none");
      setInvalidInputWarningText("none");
      const existingArray = Api.medications;
      existingArray.push(medicationFormInputs);
      App.setPopUpStatus("save");
      App.setBlurredBackgroundOverlayStatus("visible");
      const metaTag = document.querySelector('meta[name="theme-color"]');
      metaTag.setAttribute("content", "rgb(26, 26, 26)");
      setTimeout(() => {
        App.setBlurredBackgroundOverlayStatus("hidden");
        App.setPopUpStatus("none");
        setMedicationFormInputs({});
        Navigate("/Medications");
        const metaTag = document.querySelector('meta[name="theme-color"]');
        metaTag.setAttribute("content", "#fffffff");
        const screen = document.documentElement;
        screen.scrollTop = screen.scrollHeight;
      }, 2000);
    }
  };
  return (
    <>
      {App.blurredBackgroundOverlayStatus == "visible" && (
        <>
          {" "}
          <div id="BluredBackgroundOverlay"></div>
        </>
      )}{" "}
      {App.popUpStatus == "save" && (
        <div id="statusFloatingModal" className="flexColumnCenter">
          {" "}
          <img
            src={require("../images/maskedLogo192.png")}
            id="statusFloatingLogo"
          />{" "}
          <p className="flexCenter" id="statusFloatingText">
            saved
          </p>
        </div>
      )}
      <div className="flexColumnStart">
        <div id="ge3">
          <h5 id="mere30" className="medicationName">
            Name
          </h5>
          {invalidInput != "name" && (
            <input
              type="text"
              id="mere31"
              placeholder="Neurontin"
              value={medicationFormInputs.name}
              onChange={(e) => {
                setMedicationFormInputs((value, index) => {
                  return {
                    ...value,
                    name: e.target.value,
                  };
                });
              }}
            />
          )}
          {invalidInput == "name" && (
            <>
              {" "}
              <input
                type="text"
                id="mere44"
                placeholder="Neurontin"
                value={medicationFormInputs.name}
                onChange={(e) => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      name: e.target.value,
                    };
                  });
                }}
              />
              {invalidInputWarningText == "emptyNameInput" && (
                <li id="mere45">Please enter a medication name</li>
              )}
            </>
          )}
          <h5 id="mere30">Display Image</h5>
          <div id="mere17">
            {medicationFormInputs.img != "" && (
              <img src={medicationFormInputs.img} id="mere18" />
            )}
            {medicationFormInputs.img == "" && (
              <img src={require("../images/emptyImgIcon.jpg")} id="mere18" />
            )}
          </div>
          <button type="button" id="mere33" htmlFor="mere32">
            {" "}
            <label htmlFor="mere32">Select image</label>
          </button>
          {invalidInputWarningText == "emptyImgInput" && (
            <li id="mere45">select an image </li>
          )}
          <br />
          <input
            type="file"
            id="mere32"
            accept="image/*"
            onChange={(e) => {
              const myfile = e.target.files[0];
              if (myfile) {
                var reader = new FileReader();
                reader.readAsDataURL(myfile);
                reader.onload = () => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      img: reader.result,
                    };
                  });
                };
              }
            }}
          />
          <h5 id="mere30">Tablet per Time</h5>
          {invalidInput != "dosage" && (
            <>
              <input
                type="text"
                id="mere31"
                placeholder="Two pills"
                value={medicationFormInputs.dosage}
                onChange={(e) => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      dosage: e.target.value,
                    };
                  });
                }}
              />
            </>
          )}
          {invalidInput == "dosage" && (
            <>
              <input
                type="number"
                id="mere44"
                placeholder="Two pills"
                value={medicationFormInputs.dosage}
                onChange={(e) => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      dosage: e.target.value,
                    };
                  });
                }}
              />
              {invalidInputWarningText == "emptyDosageInput" && (
                <li id="mere45">Specify tablets to be taken per time </li>
              )}
            </>
          )}
          <div className="flexSpaceBetween">
            <h5 id="mere30">Time</h5>
          </div>
          <div className="flexStart" id="mere36">
            {" "}
            {medicationFormInputs.time.map((val, ind) => (
              <div id="mere22" key={ind}>
                <span id="mere23">
                  <FaRegClock />
                </span>
                <span id="mere24">{val}</span>
              </div>
            ))}
          </div>
          {invalidInputWarningText == "emptyTimeInput" && (
            <li id="mere45">Specify time for taking the medications </li>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMedicationFormInputs((value, index) => {
                return {
                  ...value,
                  time: [...value.time, dosageTime],
                };
              });
              setTimeout(() => {
                setDosageTime("");
              }, 100);

              setShowDosageTimeInput(false);
            }}
            id="mere36"
          >
            {" "}
            {showDosageTimeInput && (
              <input
                type="time"
                id="mere35"
                value={dosageTime}
                onChange={(e) => {
                  setDosageTime(e.target.value);
                }}
              />
            )}{" "}
            <br />
            {dosageTime != "" && (
              <button type="submit" id="mere33">
                Save
              </button>
            )}
            {dosageTime == "" && (
              <button
                type="button"
                id="mere33"
                htmlFor="mere32"
                onClick={() => {
                  setShowDosageTimeInput(true);
                }}
              >
                <label htmlFor="mere35">Add new time</label>
              </button>
            )}
          </form>
          <h5 id="mere30">Duration</h5>
          <p id="mere37">{medicationFormInputs.duration}</p>

          <div className="flexStart">
            <button
              type="button"
              id="mere39"
              onClick={() => {
                setInputDislayed("startDate");
              }}
            >
              <label htmlFor="mere38">
                {startMonthAndDay == "" && <>+</>}
                {startMonthAndDay != "" && <>{startMonthAndDay}</>}
              </label>
            </button>
            <li id="mere40">To</li>
            <button
              type="button"
              id="mere41"
              onClick={() => {
                setInputDislayed("endDate");
              }}
            >
              <label htmlFor="mere38">
                {endMonthAndDay == "" && <>+</>}
                {endMonthAndDay != "" && <>{endMonthAndDay}</>}
              </label>
            </button>
          </div>
          <form onSubmit={submitDurationDate}>
            {inputDisplayed == "startDate" && (
              <>
                <input
                  type="date"
                  id="mere38"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
                <br />
                {startDate != "" && (
                  <button type="submit" id="mere33">
                    Save
                  </button>
                )}
                {startDate == "" && (
                  <button type="button" id="mere33">
                    Enter a valid date above
                  </button>
                )}
              </>
            )}
            {inputDisplayed == "endDate" && (
              <>
                <input
                  type="date"
                  id="mere38"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
                <br />
                {endDate != "" && (
                  <button type="submit" id="mere33">
                    Save
                  </button>
                )}
                {endDate == "" && (
                  <button type="button" id="mere33">
                    Enter a valid date above
                  </button>
                )}
              </>
            )}
            {invalidInputWarningText == "emptyDurationInput" && (
              <li id="mere45">
                Specify a duration for taking the medications{" "}
              </li>
            )}
          </form>
          <div className="flexCenter" id="mere29">
            {" "}
            <button type="button" id="mere28" onClick={saveMedication}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const EditMedicationNav = () => {
  const Navigate = useNavigate();
  const App = useContext(app);
  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN == undefined) {
      Navigate("/Welcome");
    }
  }, []);
  return (
    <>
      <div id="mere15">
        {" "}
        {App.popUpStatus == "save" && <div id="ge2"></div>}
        <div id="mere1">
          <div className="flexStart">
            <button
              type="button"
              id="mere2"
              onClick={() => {
                Navigate(-1);
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="mere3">Edit medication</li>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export const EditMedication = () => {
  const Api = useContext(mockApi);
  const App = useContext(app);
  const location = useLocation();
  const Navigate = useNavigate();
  const [Id, setId] = useState(0);
  const [medicationFormInputs, setMedicationFormInputs] = useState({
    img: "",
    name: "",
    dosage: "",
    duration: "",
    time: [],
    startDay: "",
  });
  useEffect(() => {
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );
    setId(decryptedSID);
  }, []);
  useEffect(() => {
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );

    setMedicationFormInputs(() => {
      const filteredMedication = Api.medications.filter((value, index) => {
        return index == decryptedSID;
      });
      return filteredMedication[0];
    });
  }, []);

  const [dosageTime, setDosageTime] = useState("");
  const [showDosageTimeInput, setShowDosageTimeInput] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [inputDisplayed, setInputDislayed] = useState("none");
  const [endDate, setEndDate] = useState("");
  const [startMonthAndDay, setStartMonthAndDay] = useState("");
  const [endMonthAndDay, setEndMonthAndDay] = useState("");
  const [invalidInput, setInvalidInput] = useState("none");
  const [invalidInputWarningText, setInvalidInputWarningText] = useState("");
  const confirmMonthInWords = (e) => {
    if (e == 1) {
      return "jan";
    }
    if (e == 2) {
      return "feb";
    }
    if (e == 3) {
      return "mar";
    }
    if (e == 4) {
      return "apr";
    }
    if (e == 5) {
      return "may";
    }
    if (e == 6) {
      return "jun";
    }
    if (e == 7) {
      return "jul";
    }
    if (e == 8) {
      return "aug";
    }
    if (e == 9) {
      return "sep";
    }
    if (e == 10) {
      return "oct";
    }
    if (e == 11) {
      return "nov";
    }
    if (e == 12) {
      return "dec";
    }
  };
  const submitDurationDate = (e) => {
    e.preventDefault();
    if (startDate != "") {
      const startdate = new Date(startDate);
      const startDay = startdate.getDate() + 1;
      const startMonth = confirmMonthInWords(startdate.getMonth() + 1);
      setStartMonthAndDay(startDay + " " + startMonth);
      setInputDislayed("none");
    }
    if (endDate != "") {
      const enddate = new Date(endDate);
      const endDay = enddate.getDate() + 1;
      const endMonth = confirmMonthInWords(enddate.getMonth() + 1);
      setEndMonthAndDay(endDay + " " + endMonth);
      setInputDislayed("none");
    }
    if (startDate != "" && endDate != "") {
      const startdate = new Date(startDate);
      const enddate = new Date(endDate);

      const startDay = startdate.getDate() + 1;
      const startMonth = confirmMonthInWords(startdate.getMonth() + 1);
      setMedicationFormInputs((value, index) => {
        return {
          ...value,
          startDay: startDay + " " + startMonth,
        };
      });

      const conv = (enddate - startdate) / (1000 * 60 * 60 * 24);
      if (conv % 7 == 0) {
        const numWeeks = conv / 7;
        const inWords = ` ${numWeeks} weeks from start date`;
        setMedicationFormInputs((value, index) => {
          return {
            ...value,
            duration: inWords,
          };
        });
      }
      if (conv % 7 != 0) {
        const inWords = ` ${conv} days from start date`;
        setMedicationFormInputs((value, index) => {
          return {
            ...value,
            duration: inWords,
          };
        });
      }
    }
  };
  const saveMedication = () => {
    if (medicationFormInputs.name == "") {
      setInvalidInput("name");
      setInvalidInputWarningText("emptyNameInput");
      App.instantScrollToTop();
    } else if (medicationFormInputs.img == "") {
      setInvalidInput("img");
      setInvalidInputWarningText("emptyImgInput");
      var element = document.querySelector("#ge3");
      element.scrollIntoView({ behavior: "auto" });
    } else if (medicationFormInputs.dosage == "") {
      setInvalidInput("dosage");
      setInvalidInputWarningText("emptyDosageInput");
    } else if (medicationFormInputs.time.length == 0) {
      setInvalidInput("time");
      setInvalidInputWarningText("emptyTimeInput");
    } else if (medicationFormInputs.duration == "") {
      setInvalidInput("duration");
      setInvalidInputWarningText("emptyDurationInput");
    } else {
      setInvalidInput("none");
      setInvalidInputWarningText("none");
      Api.setMedications((value) => {
        return value.map((val, ind) => {
          if (ind == Id) {
            return medicationFormInputs;
          } else {
            return val;
          }
        });
      });
      App.setPopUpStatus("save");
      App.setBlurredBackgroundOverlayStatus("visible");
      const metaTag = document.querySelector('meta[name="theme-color"]');
      metaTag.setAttribute("content", "rgb(26, 26, 26)");
      setTimeout(() => {
        App.setBlurredBackgroundOverlayStatus("hidden");
        App.setPopUpStatus("none");
        setMedicationFormInputs({});
        Navigate("/Medications");
        const metaTag = document.querySelector('meta[name="theme-color"]');
        metaTag.setAttribute("content", "#fffffff");
        const screen = document.documentElement;
        screen.scrollTop = screen.scrollHeight;
      }, 2000);
    }
  };
  return (
    <>
      {App.blurredBackgroundOverlayStatus == "visible" && (
        <>
          {" "}
          <div id="BluredBackgroundOverlay"></div>
        </>
      )}{" "}
      {App.popUpStatus == "save" && (
        <div id="statusFloatingModal" className="flexColumnCenter">
          {" "}
          <img
            src={require("../images/maskedLogo192.png")}
            id="statusFloatingLogo"
          />{" "}
          <p className="flexCenter" id="statusFloatingText">
            saved
          </p>
        </div>
      )}
      <div className="flexColumnStart">
        <div id="ge3">
          <h5 id="mere30" className="medicationName">
            Name
          </h5>
          {invalidInput != "name" && (
            <input
              type="text"
              id="mere31"
              placeholder="Neurontin"
              value={medicationFormInputs.name}
              onChange={(e) => {
                setMedicationFormInputs((value, index) => {
                  return {
                    ...value,
                    name: e.target.value,
                  };
                });
              }}
            />
          )}
          {invalidInput == "name" && (
            <>
              {" "}
              <input
                type="text"
                id="mere44"
                placeholder="Neurontin"
                value={medicationFormInputs.name}
                onChange={(e) => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      name: e.target.value,
                    };
                  });
                }}
              />
              {invalidInputWarningText == "emptyNameInput" && (
                <li id="mere45">Please enter a medication name</li>
              )}
            </>
          )}
          <h5 id="mere30">Display Image</h5>
          <div id="mere17">
            {medicationFormInputs.img != "" && (
              <img src={medicationFormInputs.img} id="mere18" />
            )}
            {medicationFormInputs.img == "" && (
              <img src={require("../images/emptyImgIcon.jpg")} id="mere18" />
            )}
          </div>
          <button type="button" id="mere33" htmlFor="mere32">
            {" "}
            <label htmlFor="mere32">Select image</label>
          </button>
          {invalidInputWarningText == "emptyImgInput" && (
            <li id="mere45">select an image </li>
          )}
          <br />
          <input
            type="file"
            id="mere32"
            accept="image/*"
            onChange={(e) => {
              const myfile = e.target.files[0];
              if (myfile) {
                var reader = new FileReader();
                reader.readAsDataURL(myfile);
                reader.onload = () => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      img: reader.result,
                    };
                  });
                };
              }
            }}
          />
          <h5 id="mere30">Tablet per Time</h5>
          {invalidInput != "dosage" && (
            <>
              <input
                type="text"
                id="mere31"
                placeholder="Two pills"
                value={medicationFormInputs.dosage}
                onChange={(e) => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      dosage: e.target.value,
                    };
                  });
                }}
              />
            </>
          )}
          {invalidInput == "dosage" && (
            <>
              <input
                type="number"
                id="mere44"
                placeholder="Two pills"
                value={medicationFormInputs.dosage}
                onChange={(e) => {
                  setMedicationFormInputs((value, index) => {
                    return {
                      ...value,
                      dosage: e.target.value,
                    };
                  });
                }}
              />
              {invalidInputWarningText == "emptyDosageInput" && (
                <li id="mere45">Specify tablets to be taken per time </li>
              )}
            </>
          )}
          <div className="flexSpaceBetween">
            <h5 id="mere30">Time</h5>
          </div>
          <div className="flexStart" id="mere36">
            {" "}
            {medicationFormInputs.time.map((val, ind) => (
              <div id="mere22" key={ind}>
                <span id="mere23">
                  <FaRegClock />
                </span>
                <span id="mere24">{val}</span>
              </div>
            ))}
          </div>
          {invalidInputWarningText == "emptyTimeInput" && (
            <li id="mere45">Specify time for taking the medications </li>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMedicationFormInputs((value, index) => {
                return {
                  ...value,
                  time: [...value.time, dosageTime],
                };
              });
              setTimeout(() => {
                setDosageTime("");
              }, 100);

              setShowDosageTimeInput(false);
            }}
            id="mere36"
          >
            {" "}
            {showDosageTimeInput && (
              <input
                type="time"
                id="mere35"
                value={dosageTime}
                onChange={(e) => {
                  setDosageTime(e.target.value);
                }}
              />
            )}{" "}
            <br />
            {dosageTime != "" && (
              <button type="submit" id="mere33">
                Save
              </button>
            )}
            {dosageTime == "" && (
              <button
                type="button"
                id="mere33"
                htmlFor="mere32"
                onClick={() => {
                  setShowDosageTimeInput(true);
                }}
              >
                <label htmlFor="mere35">Add new time</label>
              </button>
            )}
          </form>
          <h5 id="mere30">Duration</h5>
          <p id="mere37">{medicationFormInputs.duration}</p>

          <div className="flexStart">
            <button
              type="button"
              id="mere39"
              onClick={() => {
                setInputDislayed("startDate");
              }}
            >
              <label htmlFor="mere38">
                {startMonthAndDay == "" && <>+</>}
                {startMonthAndDay != "" && <>{startMonthAndDay}</>}
              </label>
            </button>
            <li id="mere40">To</li>
            <button
              type="button"
              id="mere41"
              onClick={() => {
                setInputDislayed("endDate");
              }}
            >
              <label htmlFor="mere38">
                {endMonthAndDay == "" && <>+</>}
                {endMonthAndDay != "" && <>{endMonthAndDay}</>}
              </label>
            </button>
          </div>
          <form onSubmit={submitDurationDate}>
            {inputDisplayed == "startDate" && (
              <>
                <input
                  type="date"
                  id="mere38"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
                <br />
                {startDate != "" && (
                  <button type="submit" id="mere33">
                    Save
                  </button>
                )}
                {startDate == "" && (
                  <button type="button" id="mere33">
                    Enter a valid date above
                  </button>
                )}
              </>
            )}
            {inputDisplayed == "endDate" && (
              <>
                <input
                  type="date"
                  id="mere38"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
                <br />
                {endDate != "" && (
                  <button type="submit" id="mere33">
                    Save
                  </button>
                )}
                {endDate == "" && (
                  <button type="button" id="mere33">
                    Enter a valid date above
                  </button>
                )}
              </>
            )}
            {invalidInputWarningText == "emptyDurationInput" && (
              <li id="mere45">
                Specify a duration for taking the medications{" "}
              </li>
            )}
          </form>
          <div className="flexCenter" id="mere29">
            {" "}
            <button type="button" id="mere28" onClick={saveMedication}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
