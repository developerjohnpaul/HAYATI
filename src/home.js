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
const Home = () => {
  const Api = useContext(mockApi);
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0);
  const [carouselNum, setCarouselNum] = useState(1);
  const prevCarouselScrollLeft = usePrevious(carouselScrollLeft);
  const [homepageCarousel, setHomepageCarousel] = useState([
    {
      bgImg: require("./images/vitamins.jpg"),
      title: "Vitamins",
      Content: `Vitamins are essential nutrients that play a crucial role in
              maintaining overall health and supporting various bodily functions`,
    },
    {
      bgImg: require("./images/sleep.jpeg"),
      title: "Sleep",
      Content: `A good night's sleep is important to recharge both the body and mind.
       It helps the body repair cells and get rid of wastes. `,
    },
    {
      bgImg: require("./images/balancedDiet.jpeg"),
      title: "B-diet ",
      Content: `A healthy diet gives you energy and lowers your risk for heart disease, diabetes, cancer, and other diseases.`,
    },
    {
      bgImg: require("./images/balancedDiet.jpeg"),
      title: "P-activities",
      Content: `VThirty minutes a day of physical activity protects heart
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
  return (
    <>
      <div id="home" className="flexColumnCenter">
        {" "}
        <div id="HomeNav" className="fixed-top">
          <small id="HomepageWelcomeMessage">Welcome back,jeff </small>
          <div className="flexCenter">
            <img
              src={require("./images/profileImg.png")}
              style={{ maxHeight: "28px", marginRight: "8px" }}
            />
            <span style={{ height: "28px", fontSize: "18px" }}>
              <FaRegBell />
            </span>
          </div>
        </div>
        <div className="flexCenter">
          {" "}
          <div id="homeSearchBar" className="flexStart">
            <span style={{ fontSize: "20px", opacity: ".5" }}>
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
          <button type="button" id="columnViewAllBtn">
            View All{" "}
            <span id="columnViewAllIcon">
              <MdNavigateNext />{" "}
            </span>
          </button>
        </div>
        <div className="flexStart" id="upComingAppointmentContainer">
          <div>
            {" "}
            {Api.upcomingAppointment.map((value, index) => (
              <div key={index}>
                {value.status == "latest" && (
                  <div id="latestUpComingAppointment">
                    <li
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "24px",
                        listStyle: "none",
                      }}
                    >
                      {value.date}
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "11px",
                        marginBottom: "10px",
                      }}
                    >
                      {value.month}
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "12px",
                        marginBottom: "5]3px",
                      }}
                    >
                      {value.title}
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "10px",
                        marginBottom: "3px",
                      }}
                    >
                      {value.startTime}- {value.endTime}
                    </li>{" "}
                    <li style={{ listStyle: "none", fontSize: "10px" }}>
                      {value.location}
                    </li>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flexStart">
            {Api.upcomingAppointment.map((value, index) => (
              <div key={index}>
                {value.status == "later" && (
                  <div id="UpComingAppointment">
                    <li
                      style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "24px",
                        listStyle: "none",
                      }}
                    >
                      {value.date}
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "11px",
                        marginBottom: "10px",
                      }}
                    >
                      {value.month}
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "12px",
                        marginBottom: "5]3px",
                      }}
                    >
                      {value.title}
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "10px",
                        marginBottom: "3px",
                      }}
                    >
                      {value.startTime}- {value.endTime}
                    </li>{" "}
                    <li style={{ listStyle: "none", fontSize: "10px" }}>
                      {value.location}
                    </li>
                  </div>
                )}
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
            <div
              className="flexCenter"
              style={{
                backgroundColor: "#0390A359",
                height: "60.4px",
                width: "70px",
                borderRadius: "5px",
                marginRight: "15px",
              }}
            >
              <img
                src={require("./images/NeurontinImg.png")}
                style={{ maxHeight: "55px", maxWidth: "65px" }}
              />
            </div>
            <div>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "11px",
                  fontWeight: "400",
                }}
              >
                Two pills after meal
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#0390A3",
                }}
              >
                Neurontin 300mg
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "11px",
                  fontWeight: "400",
                }}
                className="flexStart"
              >
                <b style={{ fontSize: "15px", marginRight: "5px" }}>
                  <FaRegClock />{" "}
                </b>
                <span> 8:45Am</span>
                <b
                  style={{
                    fontSize: "15px",
                    marginLeft: "10px",
                    color: "#0390A3",
                  }}
                >
                  <GoBell />{" "}
                </b>
              </li>
            </div>
          </div>
          <div>
            <li
              style={{ color: "#0390A3", fontSize: "25px", listStyle: "none" }}
            >
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
        <div id="specialistNearMe" className="flexCenter">
          {Api.specialist.map((value, index) => (
            <div id="eachSpeacialistNearMe" key={index}>
              <div id="SpeacialistNearMeImgContainer">
                <img
                  src={value.SpeacialistProfileImg}
                  id="SpeacialistNearMeImg"
                />
              </div>
              <div style={{ padding: "1px 4px 1px 4px " }}>
                <li style={{ fontSize: "11px", listStyle: "none" }}>
                  {value.specialistName}
                </li>
                <li style={{ fontSize: "8px", listStyle: "none" }}>
                  {value.specialty}
                </li>
                <li style={{ fontSize: "8px", listStyle: "none" }}>
                  {value.phone}
                </li>
                <li
                  style={{
                    fontSize: "8px",
                    listStyle: "none",
                    marginTop: "3px",
                  }}
                >
                  Reviews: {value.reviews}
                  <span style={{ color: "#FFCC00", fontSize: "12px" }}>
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
          {Api.articles.map((value, index) => (
            <div key={index}>
              {value.status == "trending" && (
                <div id="eachHomepageTrendingArticle">
                  <div id="homepageTrendingArticleImgContainer">
                    <img
                      src={value.articleImg}
                      id="homepageTrendingArticleImg"
                    />
                  </div>
                  <div id="homepageTrendingArticleContent">
                    <div className="flexSpaceBetweenFirstBaseeline">
                      <li
                        id="homepageTrendingArticleTitle"
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          listStyle: "none",
                          height: "60px",
                          overflow: "hidden",
                        }}
                      >
                        {value.title}
                      </li>
                      {value.title.length > 108 && (
                        <small
                          style={{
                            position: "relative",
                            right: "1px",
                            top: "38px",
                          }}
                        >
                          ...
                        </small>
                      )}
                      <li style={{ listStyle: "none", fontSize: "18px" }}>
                        <BsBookmarkFill />
                      </li>
                    </div>
                    <div
                      className="flexSpaceBetween"
                      style={{ marginTop: "10px" }}
                    >
                      <li style={{ listStyle: "none" }} className="flexCenter">
                        {" "}
                        <li
                          style={{
                            fontSize: "10px",
                            opacity: ".8",
                            width: "90px",
                            height: "15px",
                            wordBreak: "break-all",
                            overflow: "hidden",
                          }}
                        >
                          Author:{value.author}
                        </li>
                        {value.author.length > 11 && (
                          <li style={{ fontSize: "10px" }}>...</li>
                        )}
                      </li>
                      <li
                        style={{
                          fontSize: "10px",
                          listStyle: "none",
                          opacity: ".8",
                        }}
                      >
                        {value.timeRead}
                      </li>
                      <li
                        style={{
                          fontSize: "10px",
                          listStyle: "none",
                          opacity: ".8",
                        }}
                      >
                        {value.timePosted}
                      </li>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
