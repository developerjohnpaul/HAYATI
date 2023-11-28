import { Outlet, useNavigate } from "react-router-dom";
import { app } from "../App";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";

import { PiToggleRightFill, PiToggleLeftFill } from "react-icons/pi";
import { mockApi } from "./mockApi";

export const SettingsNav = () => {
  useEffect(() => {
    App.setCurrentPage("Settings");
  });
  const App = useContext(app);
  const Navigate = useNavigate();

  return (
    <>
      {" "}
      <div id="sere4">
        {App.blurredBackgroundOverlayStatus === "visible" && (
          <div
            id="ge2"
            onClick={() => {
              App.setPopUpStatus("hidden");
              App.setBlurredBackgroundOverlayStatus("hidden");
            }}
          ></div>
        )}{" "}
        {App.popUpStatus === "save" && <div id="ge2"></div>}
        <div id="sere1">
          <button
            type="button"
            id="sere2"
            onClick={() => {
              Navigate("/");
            }}
          >
            <IoIosArrowBack />
          </button>
          <li id="sere3">Settings</li>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export const Settings = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const [newsletterToggle, setNewsletterToggle] = useState(false);
  const [textMessageToggle, setTextMessageToggle] = useState(false);

  const Navigate = useNavigate();
  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN === null) {
      Navigate("/Welcome");
    }
  }, [App.appDep]);
  const [audioAndVideoCallToggle, setAudioAndVideoCallToggle] = useState(true);
  const logOut = () => {
    App.setPopUpStatus("loggingOut");
    setTimeout(() => {
      const metaTag = document.querySelector('meta[name="theme-color"]');
      metaTag.setAttribute("content", "#fffffff");
      App.setPopUpStatus("hidden");
      App.setBlurredBackgroundOverlayStatus("hidden");
      localStorage.clear("CUIN");
      Navigate("/Welcome");
      App.instantScrollToTop();
    }, 1000);
  };
  return (
    <>
      {" "}
      {App.blurredBackgroundOverlayStatus === "visible" && (
        <div
          id="BluredBackgroundOverlay"
          onClick={() => {
            App.setPopUpStatus("none");
            App.setBlurredBackgroundOverlayStatus("hidden");
            const metaTag = document.querySelector('meta[name="theme-color"]');
            metaTag.setAttribute("content", "#fffffff");
          }}
        ></div>
      )}{" "}
      {App.popUpStatus === "logOutConfirmation" && (
        <>
          <div id="mdre1">
            <div>
              {" "}
              <h4 id="mdre2">Logout ?</h4>
              <p id="mdre3">Are you sure you want to log out</p>
            </div>
            <div id="mdre6">
              <button type="button" id="mdre4" onClick={logOut}>
                Yes,proceed
              </button>
              <button
                type="button"
                id="mdre5"
                onClick={() => {
                  App.setPopUpStatus("hidden");
                  App.setBlurredBackgroundOverlayStatus("hidden");
                  const metaTag = document.querySelector(
                    'meta[name="theme-color"]'
                  );
                  metaTag.setAttribute("content", "#fffffff");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
      {App.popUpStatus === "loggingOut" && (
        <>
          <div id="statusFloatingModal" className="flexColumnCenter">
            {" "}
            <img
              alt=""
              src={require("../images/maskedLogo192.png")}
              id="statusFloatingLogo"
            />{" "}
            <p className="flexCenter" id="statusFloatingText">
              Logging out...
            </p>
          </div>
        </>
      )}
      <div className="flexColumnStart">
        <div id="ge3">
          <h4 id="sere5">My account</h4>
          <button
            id="sere6"
            onClick={() => {
              Navigate("/EditProfile");
              App.instantScrollToTop();
            }}
          >
            <div id="sere7">
              <div id="sere9">
                <BsFillPersonFill />
              </div>{" "}
              <li id="sere10">Edit Profile</li>
            </div>
            <span id="sere8">
              <IoIosArrowForward />
            </span>
          </button>{" "}
          <button
            id="sere6"
            onClick={() => {
              Navigate("/EditProfile");
              App.instantScrollToTop();
            }}
          >
            <div id="sere7">
              <div id="sere9">
                <IoMdLock />
              </div>{" "}
              <li id="sere10">Change Password</li>
            </div>
            <span id="sere8">
              <IoIosArrowForward />
            </span>
          </button>
          <button
            id="sere6"
            onClick={() => {
              Navigate("/Notification");
              App.instantScrollToTop();
            }}
          >
            <div id="sere7">
              <div id="sere9">
                <FaBell />
              </div>{" "}
              <li id="sere10">Notifications</li>
            </div>
            <span id="sere8">
              <IoIosArrowForward />
            </span>
          </button>{" "}
          <button
            id="sere6"
            onClick={() => {
              App.setPopUpStatus("logOutConfirmation");
              App.setBlurredBackgroundOverlayStatus("visible");
              const metaTag = document.querySelector(
                'meta[name="theme-color"]'
              );
              metaTag.setAttribute("content", "rgb(26, 26, 26)");
            }}
          >
            <div id="sere7">
              <div id="sere9">
                <IoLogOutOutline />
              </div>{" "}
              <li id="sere10">Log Out</li>
            </div>
            <span id="sere8">
              <IoIosArrowForward />
            </span>
          </button>
          <h4 id="sere5" className="mt-4">
            More Options
          </h4>
          <div id="sere11">
            <div id="sere7">
              <li id="sere10">Newsletter</li>
            </div>
            {newsletterToggle && (
              <button
                id="sere13"
                onClick={() => {
                  setNewsletterToggle((prev) => !prev);
                }}
              >
                <PiToggleRightFill />
              </button>
            )}
            {!newsletterToggle && (
              <button
                id="sere12"
                onClick={() => {
                  setNewsletterToggle((prev) => !prev);
                }}
              >
                <PiToggleLeftFill />
              </button>
            )}
          </div>
          <div id="sere11">
            <div id="sere7">
              <li id="sere10">Text Messages</li>
            </div>
            {textMessageToggle && (
              <button
                id="sere13"
                onClick={() => {
                  setTextMessageToggle((prev) => !prev);
                }}
              >
                <PiToggleRightFill />
              </button>
            )}
            {!textMessageToggle && (
              <button
                id="sere12"
                onClick={() => {
                  setTextMessageToggle((prev) => !prev);
                }}
              >
                <PiToggleLeftFill />
              </button>
            )}
          </div>{" "}
          <div id="sere11">
            <div id="sere7">
              <li id="sere10">Audio and video calls</li>
            </div>
            {audioAndVideoCallToggle && (
              <button
                id="sere13"
                onClick={() => {
                  setAudioAndVideoCallToggle((prev) => !prev);
                }}
              >
                <PiToggleRightFill />
              </button>
            )}
            {!audioAndVideoCallToggle && (
              <button
                id="sere12"
                onClick={() => {
                  setAudioAndVideoCallToggle((prev) => !prev);
                }}
              >
                <PiToggleLeftFill />
              </button>
            )}
          </div>{" "}
          <div id="sere11">
            <div id="sere7">
              <li id="sere10">Languages</li>
            </div>
            <li id="sere14">English</li>
          </div>
          <div id="sere11">
            <div id="sere7">
              <li id="sere10">Linked account</li>
            </div>
            <li id="sere14">None</li>
          </div>
        </div>
      </div>
    </>
  );
};

export const EditProfileNav = () => {
  useEffect(() => {
    App.setCurrentPage("Settings");
  });
  const App = useContext(app);
  const Navigate = useNavigate();

  return (
    <>
      {" "}
      <div id="sere4">
        {App.blurredBackgroundOverlayStatus === "visible" && (
          <div
            id="ge2"
            onClick={() => {
              App.setPopUpStatus("hidden");
              App.setBlurredBackgroundOverlayStatus("hidden");
            }}
          ></div>
        )}{" "}
        {App.popUpStatus === "save" && <div id="ge2"></div>}
        <div id="sere1">
          <button
            type="button"
            id="sere2"
            onClick={() => {
              Navigate("/Settings");
            }}
          >
            <IoIosArrowBack />
          </button>
          <li id="sere3">Edit Profile</li>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export const EditProfile = () => {
  const App = useContext(app);
  const Api = useContext(mockApi);
  const [dropDown, setDropDown] = useState("hidden");
  const [countrySearchInput, setCountrySearchInput] = useState("");
  const [filteredSearchCountry, setFilteredSearchCountry] = useState(
    []
  );
  return (
    <>
      {App.blurredBackgroundOverlayStatus === "visible" && (
        <>
          {" "}
          <div id="BluredBackgroundOverlay"></div>
        </>
      )}{" "}
      <div className="flexColumnStart">
        <div id="sere24">
          <div className="flexCenter">
            <div id="sere16">
              <img
                alt=""
                src={require("../images/profileImg.png")}
                id="sere15"
              />
            </div>
          </div>
          <h5 id="sere17">Name</h5>
          <input
            type="text"
            id="sere18"
            value={App.user[0].Name}
            onChange={(e) => {
              App.setUser((value) => {
                return value.map((val, ind) => {
                  return {
                    ...val,
                    Name: e.target.value.trimStart(),
                  };
                });
              });
            }}
          />
          <h5 id="sere17">Email</h5>
          <input
            type="email"
            id="sere18"
            value={App.user[0].Email}
            onChange={(e) => {
              App.setUser((value) => {
                return value.map((val, ind) => {
                  return {
                    ...val,
                    Email: e.target.value.trimStart(),
                  };
                });
              });
            }}
          />
          <h5 id="sere17">Password</h5>
          <input
            type="password"
            id="sere18"
            value={App.user[0].Password}
            onChange={(e) => {
              App.setUser((value) => {
                return value.map((val, ind) => {
                  return {
                    ...val,
                    Password: e.target.value.trimStart(),
                  };
                });
              });
            }}
          />
          <h5 id="sere17">Gender</h5>{" "}
          <li id="sere20">
            <button
              type="button"
              id="sere27"
              onClick={() => {
                if (dropDown === "Gender") {
                  setDropDown("hidden");
                } else {
                  setDropDown("Gender");
                }
              }}
            >
              {" "}
              {App.user[0].Gender === "" && <li id="sere21">Select gender</li>}
              {App.user[0].Gender !== "" && (
                <li id="sere21">{App.user[0].Gender}</li>
              )}
              {dropDown === "Gender" && (
                <li id="sere22">
                  <IoIosArrowUp />
                </li>
              )}
              {dropDown !== "Gender" && (
                <li id="sere22">
                  <IoIosArrowDown />
                </li>
              )}
            </button>
            {dropDown === "Gender" && (
              <div id="sere26">
                <button
                  id="sere25"
                  onClick={() => {
                    App.setUser((value) => {
                      return value.map((val, ind) => {
                        return {
                          ...val,
                          Gender: "Male",
                        };
                      });
                    });
                    setDropDown("hidden");
                  }}
                >
                  Male
                </button>
                <button
                  id="sere25"
                  onClick={() => {
                    App.setUser((value) => {
                      return value.map((val, ind) => {
                        return {
                          ...val,
                          Gender: "Female",
                        };
                      });
                    });
                    setDropDown("hidden");
                  }}
                >
                  Female
                </button>
              </div>
            )}
          </li>
          <h5 id="sere17">Date of Birth</h5>
          <li id="sere20">
            <label htmlFor="sere29" type="button" id="sere27">
              {" "}
              {App.user[0].DOB === "" && <li id="sere21">Select a date</li>}
              {App.user[0].DOB !== "" && <li id="sere21">{App.user[0].DOB}</li>}
              <li id="sere22">
                <IoIosArrowDown />
              </li>
            </label>
          </li>
          <h5 id="sere17">Country</h5>{" "}
          <li id="sere20">
            <button
              type="button"
              id="sere27"
              onClick={() => {
                if (dropDown === "Country") {
                  setDropDown("hidden");
                } else {
                  setDropDown("Country");
                }
              }}
            >
              {" "}
              {App.user[0].Country === "" && (
                <li id="sere21">Select Country</li>
              )}
              {App.user[0].Country !== "" && (
                <li id="sere21">{App.user[0].Country}</li>
              )}
              {dropDown === "Country" && (
                <li id="sere22">
                  <IoIosArrowUp />
                </li>
              )}
              {dropDown !== "Country" && (
                <li id="sere22">
                  <IoIosArrowDown />
                </li>
              )}
            </button>
            {dropDown === "Country" && (
              <>
                <input
                  type="text"
                  id="sere28"
                  autoFocus
                  value={countrySearchInput}
                  onChange={(e) => {
                    setCountrySearchInput(e.target.value);
                    setFilteredSearchCountry(() => {
                      const newItems = Api.countries.filter((val) => {
                        return val
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase());
                      });
                      return newItems;
                    });
                  }}
                  placeholder="search country"
                />
                <div id="sere23">
                  {filteredSearchCountry.map((value, index) => (
                    <button
                      key={index}
                      id="sere25"
                      onClick={() => {
                        App.setUser((valu) => {
                          return valu.map((val, ind) => {
                            return {
                              ...val,
                              Country: value,
                            };
                          });
                        });
                        setDropDown("hidden");
                      }}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </>
            )}
          </li>
        </div>
      </div>
      <input
        type="date"
        id="sere29"
        className="country"
        value={App.user.DOB}
        onChange={(e) => {
          App.setUser((value) => {
            return value.map((val, ind) => {
              return {
                ...val,
                DOB: e.target.value.trimStart(),
              };
            });
          });
        }}
      />
    </>
  );
};
