import { FaRegBell } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { mockApi } from "./mockApi";
import { useContext, useEffect, useRef, useState } from "react";
import { usePrevious } from "@uidotdev/usehooks";
import { FaRegClock } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { app } from "../App";
import CryptoJS from "crypto-js";

const Home = () => {
  const Api = useContext(mockApi);
  const App = useContext(app);
  const Navigate = useNavigate();
  const [laterAppointments, setLaterAppointments] = useState([]);
  const [latestAppointments, setLatestAppointments] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0);
  const [carouselNum, setCarouselNum] = useState(1);

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
        if (carouselNum == 4) {
          setCarouselNum(1);
        }
        if (carouselNum == 1) {
          carousel.scrollLeft = carousel.offsetWidth;
          setCarouselNum(2);
        } else if (carouselNum == 2) {
          carousel.scrollLeft = carousel.offsetWidth * 2;
          setCarouselNum(3);
        } else if (carouselNum == 3) {
          carousel.scrollLeft = carousel.offsetWidth * 3;
          setCarouselNum(4);
        } else if (carouselNum == 4) {
          carousel.scrollLeft = 0;
          setCarouselNum(1);
        }
      }, 5000))
    );
  }, [carouselNum]);
  useEffect(() => {
    const latestAppointment = Api.appointment.filter((value) => {
      return value.latest === true && value.status == "Upcoming";
    });
    setLatestAppointments(latestAppointment);
    const laterAppointment = Api.appointment.filter((value) => {
      return value.latest === false && value.status == "Upcoming";
    });
    setLaterAppointments(laterAppointment);
    const trendingArticle = Api.articles.filter((value) => {
      return value.status == "trending";
    });
    setTrendingArticles(trendingArticle);
  }, []);
  return (
    <>
      <div id="home" className="flexColumnCenter">
        {" "}
        <div id="HomeNav" className="fixed-top">
          <small id="HomepageWelcomeMessage">Welcome back,jeff </small>
          <div className="flexCenter">
            <img
              src={require("../images/profileImg.png")}
              id="homeNavProfileImg"
            />
            <span id="hmre1">
              <FaRegBell />
            </span>
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
          {carouselNum == 1 && <li id="activeCarouselIndicator" />}
          {carouselNum != 1 && <li id="inActiveCarouselIndicator" />}
          {carouselNum == 2 && <li id="activeCarouselIndicator" />}
          {carouselNum != 2 && <li id="inActiveCarouselIndicator" />}
          {carouselNum == 3 && <li id="activeCarouselIndicator" />}
          {carouselNum != 3 && <li id="inActiveCarouselIndicator" />}
          {carouselNum == 4 && <li id="activeCarouselIndicator" />}
          {carouselNum != 4 && <li id="inActiveCarouselIndicator" />}
        </div>
        <div className="flexSpaceBetween" id="columnTitleContainer">
          {" "}
          <small id="columnTitle">Upcoming Appointments</small>
          <button
            type="button"
            id="columnViewAllBtn"
            onClick={() => {
              App.setCurrentPage("Appointments");
              localStorage.setItem("CUP", "Appointments");
              Navigate("/Appointments");
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
          <div>
            {" "}
            {latestAppointments.map((value, index) => (
              <div key={index}>
                <ul id="latestUpComingAppointment">
                  <li id="hmre3">{value.date}</li>
                  <li id="hmre4">{value.month}</li>
                  <li id="hmre5">{value.title}</li>
                  <li id="hmre6">
                    {value.startTime}- {value.endTime}
                  </li>{" "}
                  <li id="hmre7">{value.location}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="flexStart">
            {laterAppointments.map((value, index) => (
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
          <button type="button" id="columnViewAllBtn">
            View All{" "}
            <span id="columnViewAllIcon">
              <MdNavigateNext />{" "}
            </span>
          </button>
        </div>
        <div id="medicationReminderContainer" className="flexSpaceBetween">
          <div className="flexStart">
            <div className="flexCenter" id="hmre7">
              <img src={require("../images/NeurontinImg.png")} id="hmre8" />
            </div>
            <div>
              <li id="hmre9">Two pills after meal</li>
              <li id="hmre10">Neurontin 300mg</li>
              <li id="hmre11" className="flexStart">
                <b id="hmre12">
                  <FaRegClock />{" "}
                </b>
                <span> 8:45Am</span>
                <b id="hmre13">
                  <GoBell />{" "}
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
                <img
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
                  <img src={value.articleImg} id="homepageTrendingArticleImg" />
                </div>
                <div id="homepageTrendingArticleContent">
                  <div className="flexSpaceBetweenFirstBaseeline">
                    <li id="homepageTrendingArticleTitle">{value.title}</li>
                    {value.title.length > 108 && <small id="hmre20">...</small>}
                    <li id="hmre21">
                      <BsBookmarkFill />
                    </li>
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
