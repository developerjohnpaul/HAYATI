import { FaRegBell } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { mockApi } from "./mockApi";
import { useContext, useEffect, useRef, useState } from "react";
import { usePrevious } from "@uidotdev/usehooks";
import { FaRegClock } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
const Home = () => {
  const Api = useContext(mockApi);
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0);
  const [carouselNum, setCarouselNum] = useState(1);
  const prevCarouselScrollLeft = usePrevious(carouselScrollLeft);

  const carouselScroll = () => {
    const carousel = document.getElementById("homepageCarouselContainer");
    let scrollStop;
    carousel.addEventListener(
      "scroll",
      (e) => {
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
            carousel.offsetWidth * 2 + carousel.offsetWidth / 4
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
      },
      false
    );
  };
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
          <div id="eachhomepageCarousel">
            <img
              src={require("./images/homePageCarouselImage1.png")}
              id="homepAgeCarouselImg"
            />{" "}
          </div>
          <div id="eachhomepageCarousel">
            <img
              src={require("./images/homePageCarouselImage1.png")}
              id="homepAgeCarouselImg"
            />{" "}
          </div>{" "}
          <div id="eachhomepageCarousel">
            <img
              src={require("./images/homePageCarouselImage1.png")}
              id="homepAgeCarouselImg"
            />{" "}
          </div>
          <div id="eachhomepageCarousel">
            <img
              src={require("./images/homePageCarouselImage1.png")}
              id="homepAgeCarouselImg"
            />{" "}
          </div>
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
      </div>
    </>
  );
};

export default Home;
