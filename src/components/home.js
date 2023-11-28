import { FaRegBell } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import {BsStarFill } from "react-icons/bs";
import { mockApi } from "./mockApi";
import { useContext, useEffect, useRef, useState } from "react";
import { FaRegClock, FaBell } from "react-icons/fa6";
import { BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { app } from "../App";
import CryptoJS from "crypto-js";

const Home = () => {
  
  const Api = useContext(mockApi);
  const App = useContext(app);
  const Navigate = useNavigate();
  const [status, setStatus] = useState("pending");

  const [latestAppointments, setLatestAppointments] = useState({});
  const [latestMedication, setLatestMedication] = useState([]);
  const [LastAppointments, setLastAppointments] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [showEmptyAppointmentmentIcon, setShowEmptyAppointmentIcon] =
    useState(false);
  const [
    upcomingAppointmentsLatestFiltered,
    setUpcomingAppointmentsLatestFiltered,
  ] = useState([]);
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0);
  const [carouselNum, setCarouselNum] = useState(1);
  useEffect(() => {
    App.setCurrentPage("Home");
  });

  const [homepageCarousel, setHomepageCarousel] = useState([
    {
      bgImg: require("../images/vitamins.jpg"),
      title: "Vitamins",
      Content: `Vitamins are essential nutrients that play a crucial role in
              maintaining overall health and supporting various bodily functions`,
    },
    {
      bgImg: require("../images/sleep.jpeg"),
      title: "Sleep",
      Content: `A good night's sleep is important to recharge both the body and mind.
       It helps the body repair cells and get rid of wastes. `,
    },
    {
      bgImg: require("../images/balancedDiet.jpeg"),
      title: "B-diet ",
      Content: `A healthy diet gives you energy and lowers your risk for heart disease,
       diabetes, cancer, and other diseases.`,
    },
    {
      bgImg: require("../images/exercise.jpg"),
      title: "P-activities",
      Content: `Thirty minutes a day of physical activity protects heart
       health. It also lowers the amount of bone loss as you age.`,
    },
  ]);
  const carouselScroll = () => {
    const carousel = document.getElementById("homepageCarouselContainer");

    let scrollStop;
    carousel.addEventListener("scroll", (e) => {
      clearTimeout(scrollStop);
      scrollStop = setTimeout(() => {
        if (
          carousel.scrollLeft > carousel.offsetWidth / 2 &&
          carousel.scrollLeft < carousel.offsetWidth
        ) {
          carousel.scrollLeft = carousel.offsetWidth;
          setCarouselNum(2);
        } else if (
          carousel.scrollLeft >
            carousel.offsetWidth + carousel.offsetWidth / 2 &&
          carousel.scrollLeft < carousel.offsetWidth * 2
        ) {
          carousel.scrollLeft = carousel.offsetWidth * 2;
          setCarouselNum(3);
        } else if (
          carousel.scrollLeft >
          carousel.offsetWidth * 2 + carousel.offsetWidth / 2
        ) {
          carousel.scrollLeft = carousel.offsetWidth * 3;
          setCarouselNum(4);
        } else {
          if (carousel.scrollLeft < carousel.offsetWidth / 2) {
            carousel.scrollLeft = 0;
            setCarouselNum(1);
          } else if (
            carousel.scrollLeft <
            carousel.offsetWidth + carousel.offsetWidth / 2
          ) {
            carousel.scrollLeft = carousel.offsetWidth;
            setCarouselNum(2);
          } else if (
            carousel.scrollLeft <
            carousel.offsetWidth * 2 + carousel.offsetWidth / 2
          ) {
            carousel.scrollLeft = carousel.offsetWidth * 2;
            setCarouselNum(3);
          }
        }
      }, 150);
    });
  };

  useEffect(() => {
    const carousel = document.getElementById("homepageCarouselContainer");
    let scrollStop;
    carousel.addEventListener(
      "scroll",
      (e) => {
        clearInterval(scrollStop);
      },
      (scrollStop = setInterval(() => {
        if (carouselNum < 4) {
          setCarouselNum((prev) => prev + 1);
        }
        if (carouselNum === 4) {
          setCarouselNum(1);
        }
        if (carouselNum === 1) {
          carousel.scrollLeft = carousel.offsetWidth;
          setCarouselNum(2);
        } else if (carouselNum === 2) {
          carousel.scrollLeft = carousel.offsetWidth * 2;
          setCarouselNum(3);
        } else if (carouselNum === 3) {
          carousel.scrollLeft = carousel.offsetWidth * 3;
          setCarouselNum(4);
        } else if (carouselNum === 4) {
          carousel.scrollLeft = 0;
          setCarouselNum(1);
        }
      }, 5000))
    );
  }, [carouselNum]);

  useEffect(() => {
    const LatestMedication = Api.medications.filter((value, index) => {
      return index === Api.medications.length - 1;
    });
    setLatestMedication(LatestMedication);
    const lastAppointment = Api.appointment[Api.appointment.length - 1];

    if (lastAppointment.status === "Upcoming") {
      setLatestAppointments(lastAppointment);
    }

    if (lastAppointment.status !== "Upcoming") {
      setLatestAppointments({});
    }
  }, [App.appDep]);
  useEffect(() => {
    const trendingArticle = Api.articles.filter((value) => {
      return value.status === "trending";
    });
    setTrendingArticles(trendingArticle);
  }, [Api.articles]);

  useEffect(() => {
    const upcomingAppointment = Api.appointment.filter((value, index) => {
      return value.status === "Upcoming";
    });
    setUpcomingAppointments(upcomingAppointment);
    const upcomingAppointmentLatestFiltered = Api.appointment.filter(
      (value, index) => {
        return (
          value.status === "Upcoming" && index !== Api.appointment.length - 1
        );
      }
    );
    setUpcomingAppointmentsLatestFiltered(upcomingAppointmentLatestFiltered);
  }, [Api.appointment]);

  useEffect(() => {
    const upcomingAppointment = Api.appointment.filter((value, index) => {
      return value.status === "Upcoming";
    });
    if (upcomingAppointment.length === 0) {
      setTimeout(() => {
        setShowEmptyAppointmentIcon(true);
      }, 150);
    }
    const lastAppointment = Api.appointment[Api.appointment.length - 1];

    if (lastAppointment.status === "Upcoming") {
      setLastAppointments(lastAppointment);
    }
    if ( lastAppointment.status !== "Upcoming") {
      setLastAppointments({});
    }
  }, [Api.appointment]);

  return (
    <>
      <div id="home" className="flexColumnCenter">
        {" "}
        <div className="flexCenter fixed-top">
          <div id="HomeNav">
            <small id="HomepageWelcomeMessage">
              Welcome back,{App.user.Name}{" "}
            </small>
            <div className="flexCenter">
               <img alt=""
                src={require("../images/profileImg.png")}
                id="homeNavProfileImg"
                onClick={() => {
                  Navigate("/Settings");
                  App.instantScrollToTop();
                }}
              />
              <button
                id="hmre1"
                onClick={() => {
                  Navigate("/Notification");
                  App.instantScrollToTop();
                }}
              >
                <FaRegBell />
              </button>
            </div>
          </div>
        </div>
        <div className="flexCenter">
          {" "}
          <div id="homeSearchBar" className="flexStart">
            <span id="hmre2">
              <HiOutlineSearch />
            </span>
            <input
              id="homeSearchInput"
              type="text"
              placeholder="Search"
              onFocus={() => {
                document.getElementById("homeSearchBar").style =
                  "border :2px solid #0390A3";
              }}
              onBlur={() => {
                document.getElementById("homeSearchBar").style =
                  "border :1px solid #0390A3";
              }}
            />
          </div>
        </div>
        <div id="homepageCarouselContainer" onScroll={carouselScroll}>
          {homepageCarousel.map((value, index) => (
            <div
              id="eachhomepageCarousel"
              style={{
                backgroundImage: `url(${value.bgImg})`,
              }}
              key={index}
            >
              <div
                style={{
                  height: "90px",

                  marginBottom: "5px",
                }}
              >
                <li id="homepageCarouselTitle">{value.title}</li>

                <li id="homepageCarouselContent">{value.Content}</li>
              </div>
              <button id="homepageCarouselReadMoreBtn">Read more</button>
            </div>
          ))}
        </div>
        <div id="carouselIndicator">
          {carouselNum === 1 && <li id="activeCarouselIndicator" />}
          {carouselNum !== 1 && <li id="inActiveCarouselIndicator" />}
          {carouselNum === 2 && <li id="activeCarouselIndicator" />}
          {carouselNum !== 2 && <li id="inActiveCarouselIndicator" />}
          {carouselNum === 3 && <li id="activeCarouselIndicator" />}
          {carouselNum !== 3 && <li id="inActiveCarouselIndicator" />}
          {carouselNum === 4 && <li id="activeCarouselIndicator" />}
          {carouselNum !== 4 && <li id="inActiveCarouselIndicator" />}
        </div>
        <div className="flexSpaceBetween" id="columnTitleContainer">
          {" "}
          <small id="columnTitle">Upcoming Appointments</small>
          <button
            type="button"
            id="columnViewAllBtn"
            onClick={() => {
              Navigate("/Appointments/Upcoming ");
              App.instantScrollToTop();
            }}
          >
            View All{" "}
            <span id="columnViewAllIcon">
              <MdNavigateNext />{" "}
            </span>
          </button>
        </div>
        <div className="flexStart" id="upComingAppointmentContainer">
          {showEmptyAppointmentmentIcon && (
            <div id="hmre29">
              {" "}
               <img alt=""
                src={require("../images/emptyAppointmentAnimation.jpg")}
                id="hmre27"
              />
              <p id="hmre28">oops you dont have any upcoming appointments </p>
            </div>
          )}
          {Object.keys(LastAppointments).length !== 0 && (
            <div>
              {" "}
              <ul id="latestUpComingAppointment">
                <li id="hmre3">{LastAppointments.date}</li>
                <li id="hmre4">{LastAppointments.month}</li>
                <li id="hmre5">{LastAppointments.title}</li>
                <li id="hmre6">
                  {LastAppointments.startTime}- {LastAppointments.endTime}
                </li>{" "}
                <li id="hmre6">{LastAppointments.location}</li>
              </ul>
            </div>
          )}
          <div className="flexStart">
            {upcomingAppointmentsLatestFiltered.map((value, index) => (
              <div key={index}>
                <ul id="UpComingAppointment">
                  <li id="hmre3">{value.date}</li>
                  <li id="hmre4">{value.month}</li>
                  <li id="hmre5">{value.title}</li>
                  <li id="hmre6">
                    {value.startTime}- {value.endTime}
                  </li>{" "}
                  <li id="hmre6">{value.location}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flexSpaceBetween" id="columnTitleContainer">
          {" "}
          <small id="columnTitle">Medication reminder</small>
          <button
            type="button"
            id="columnViewAllBtn"
            onClick={() => {
              App.setCurrentPage("Medications");
              Navigate("/Medications");
              App.instantScrollToTop();
            }}
          >
            View All{" "}
            <span id="columnViewAllIcon">
              <MdNavigateNext />{" "}
            </span>
          </button>
        </div>
        {Api.medications.map((value, index) => (
          <div key={index} id="hmre26">
            {index === Api.medications.length - 1 && (
              <div
                id="medicationReminderContainer"
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
                  <div className="flexCenter" id="hmre7">
                     <img alt="" src={value.img} id="hmre8" />
                  </div>
                  <div>
                    <li id="hmre9">{value.dosage} </li>
                    <li id="hmre10">{value.name}</li>
                    <li id="hmre11" className="flexStart">
                      <b id="hmre12">
                        <FaRegClock />{" "}
                      </b>
                      {value.time.map((val, ind) => (
                        <span key={ind}>{ind === 0 && <span>{val}</span>} </span>
                      ))}
                      <b id="hmre13">
                        <FaBell />{" "}
                      </b>
                    </li>
                  </div>
                </div>
                <div>
                  <li id="hmre14">
                    <MdNavigateNext />
                  </li>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="flexSpaceBetween" id="columnTitleContainer">
          {" "}
          <small id="columnTitle">Specialist Near Me</small>
          <button type="button" id="columnViewAllBtn">
            View All{" "}
            <span id="columnViewAllIcon">
              <MdNavigateNext />{" "}
            </span>
          </button>
        </div>
        <div id="specialistNearMe" className="flexStart">
          {Api.specialist.map((value, index) => (
            <div
              id="eachSpeacialistNearMe"
              key={index}
              onClick={() => {
                Navigate(
                  `/Specialist/#${CryptoJS.AES.encrypt(
                    JSON.stringify(value.id),
                    App.SK
                  ).toString()}`
                );
                App.instantScrollToTop();
              }}
            >
              <div id="SpeacialistNearMeImgContainer">
                 <img alt=""
                  src={value.SpeacialistProfileImg}
                  id="SpeacialistNearMeImg"
                />
              </div>
              <div id="hmre15">
                <li id="hmre16">{value.specialistName}</li>
                <li id="hmre17">{value.specialty}</li>
                <li id="hmre17">{value.phone}</li>
                <li id="hmre18">
                  Reviews: {value.reviews}
                  <span id="hmre19">
                    <BsStarFill />
                  </span>
                </li>
              </div>
            </div>
          ))}
        </div>
        <div className="flexSpaceBetween" id="columnTitleContainer">
          {" "}
          <small id="columnTitle">Trending Articles</small>
          <button type="button" id="columnViewAllBtn">
            View All{" "}
            <span id="columnViewAllIcon">
              <MdNavigateNext />{" "}
            </span>
          </button>
        </div>
        <div id="homepageTrendingArticleContainer">
          {trendingArticles.map((value, index) => (
            <div key={index}>
              <div id="eachHomepageTrendingArticle">
                <div id="homepageTrendingArticleImgContainer">
                   <img alt=""
                    src={value.articleImg}
                    id="homepageTrendingArticleImg"
                    onClick={() => {
                      Navigate(
                        `/Article/Tabbed#${CryptoJS.AES.encrypt(
                          JSON.stringify(value.id),
                          App.SK
                        ).toString()}`
                      );
                      App.instantScrollToTop();
                    }}
                  />
                </div>
                <div id="homepageTrendingArticleContent">
                  <div className="flexSpaceBetweenFirstBaseeline">
                    <li id="homepageTrendingArticleTitle">{value.title}</li>
                    {value.title.length > 108 && <small id="hmre20">...</small>}

                    {value.bookMarked && (
                      <button
                        id="hmre21"
                        onClick={() => {
                          Api.setArticles((valu) => {
                            return valu.map((val) => {
                              if (value.id === val.id) {
                                return {
                                  ...val,
                                  bookMarked: false,
                                };
                              } else {
                                return val;
                              }
                            });
                          });
                        }}
                      >
                        <BsBookmarkFill />
                      </button>
                    )}
                    {!value.bookMarked && (
                      <button
                        id="hmre30"
                        onClick={() => {
                          Api.setArticles((valu) => {
                            return valu.map((val) => {
                              if (value.id === val.id) {
                                return {
                                  ...val,
                                  bookMarked: true,
                                };
                              } else {
                                return val;
                              }
                            });
                          });
                        }}
                      >
                        <BsBookmarkFill />
                      </button>
                    )}
                  </div>
                  <div className="flexSpaceBetween mt-3">
                    <small className="flexCenter listStyleNone">
                      {" "}
                      <small id="hmre22">Author:{value.author}</small>
                      {value.author.length > 11 && (
                        <small id="hmre23">...</small>
                      )}
                    </small>
                    <li id="hmre24">{value.timeRead}</li>
                    <li id="hmre25">{value.timePosted}</li>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
