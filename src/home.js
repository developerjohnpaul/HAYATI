import { FaRegBell } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <div id="home">
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
        <div className="flexSpaceBetween" id="columnTitleContainer">
          {" "}
          <small id="columnTitle">Quick links</small>
        </div>
        <div className="flexCenter">
          <button type="button" id="quickLinks">
            <img
              src={require("./images/quickLinkImg1.png")}
              id="quickLinkImg"
            />
          </button>
          <button type="button" id="quickLinks">
            {" "}
            <img
              src={require("./images/quickLinkImg2.png")}
              id="quickLinkImg"
            />
          </button>{" "}
          <button type="button" id="quickLinks">
            {" "}
            <img
              src={require("./images/quickLinkImg3.png")}
              id="quickLinkImg"
            />
          </button>{" "}
          <button type="button" id="quickLinks">
            {" "}
            <img
              src={require("./images/quickLinkImg4.png")}
              id="quickLinkImg"
            />
          </button>
        </div>
        <div id="homePageAd">
          <div>
            <h6 id="homepageAdTitle">
              Get the Best
              <br /> Medical services
            </h6>
            <li id="homepageAdContent">
              Leading specialist in neurological care dedicated to improving
              lives and empowering patients with knowledge
            </li>
          </div>
          <img
            src={require("./images/homepageAdNurseImg.png")}
            id="homePageAdImg"
          />
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
          <div id="eachSpeacialistNearMe">
            <div id="SpeacialistNearMeImgContainer">
              <img
                src={require("./images/DrFawadIshar.png")}
                id="SpeacialistNearMeImg"
              />
            </div>
            <div style={{ padding: "1px 2px 1px 2px " }}>
              <li style={{ fontSize: "11px", listStyle: "none" }}>
                Dr Babajide Fashola
              </li>
              <li style={{ fontSize: "8px", listStyle: "none" }}>
                Physiotherapist
              </li>
              <li style={{ fontSize: "8px", listStyle: "none" }}>
                Phone: +123-456-009
              </li>
              <li
                style={{ fontSize: "8px", listStyle: "none", marginTop: "3px" }}
              >
                Reviews: 4.5{" "}
                <span style={{ color: "#FFCC00",fontSize:"12px" }}>
                  <BsStarFill />
                </span>
              </li>
            </div>
          </div>
          <div id="eachSpeacialistNearMe">
            <div id="SpeacialistNearMeImgContainer">
              <img
                src={require("./images/DrBabajideFashola.png")}
                id="SpeacialistNearMeImg"
              />
            </div>
          </div>{" "}
          <div id="eachSpeacialistNearMe">
            <div id="SpeacialistNearMeImgContainer">
              <img
                src={require("./images/DrChiamakaAyinna.png")}
                id="SpeacialistNearMeImg"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
