import { FaRegBell } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { FcNext } from "react-icons/fc";
import { MdNavigateNext } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div id="home">
        {" "}
        <div id="HomeNav">
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
            <small id="homepageAdContent">
              Leading specialist in neurological care dedicated to improving
              lives and empowering patients with knowledge
            </small>
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
      </div>
    </>
  );
};

export default Home;
