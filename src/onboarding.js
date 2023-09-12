import { useEffect, useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Onboarding = () => {
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#047E8E");
  }, []);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const Navigate = useNavigate();
  const [shortOnboadingTextStatus, setShortOnboadingTextStatus] =
    useState("live");
  const [onboardingBgNumber, setOnboardingBgNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (onboardingBgNumber !== onboardingDetails - 1) {
        setOnboardingBgNumber((prev) => {
          return prev + 1;
        });
      }
      if (onboardingBgNumber == onboardingDetails.length - 1) {
        setOnboardingBgNumber(0);
      }
    }, 8000);
    setTimeout(() => {
      setTimeout(() => {
        setShortOnboadingTextStatus("fading");
      }, 6000);
      setShortOnboadingTextStatus("live");
    }, 8000);
  }, [onboardingBgNumber]);

  const [onboardingDetails, setOnboardingDetails] = useState([
    {
      bgUrl: require("./images/onboarding1.png"),
    },
    { bgUrl: require("./images/onboarding2.png") },
    { bgUrl: require("./images/onboarding3.png") },
  ]);

  return (
    <>
      <div id="onboarding">
        <div>
          {onboardingBgNumber == 0 && (
            <img src={require("./images/onboarding1.png")} id="onboardingBg" />
          )}
          {onboardingBgNumber == 1 && (
            <img src={require("./images/onboarding2.png")} id="onboardingBg" />
          )}{" "}
          {onboardingBgNumber == 2 && (
            <img src={require("./images/onboarding3.png")} id="onboardingBg" />
          )}
        </div>
        <img src={require("./images/LOGO.png")} id="onboardingLogo" />
        <div
          className="flexSpaceBetween"
          style={{
            position: "absolute",
            bottom: "150px",
            padding: "10px",
          }}
        >
          {shortOnboadingTextStatus == "live" && (
            <>
              {" "}
              {onboardingBgNumber == 0 && (
                <h1 id="shortOnboadingText">
                  Empowering your{" "}
                  <span style={{ color: "#00E1FF" }}>health</span>
                  {"  "} journey together
                </h1>
              )}
              {onboardingBgNumber == 1 && (
                <h1 id="shortOnboadingText">
                  Guiding Your Path to Empowered{"  "}
                  <span style={{ color: "#00E1FF" }}> Living</span>
                </h1>
              )}
              {onboardingBgNumber == 2 && (
                <h1 id="shortOnboadingText">
                  Empowering <span style={{ color: "#00E1FF" }}>Hope</span> ,{" "}
                  One Step at a Time
                </h1>
              )}
            </>
          )}
          {shortOnboadingTextStatus == "fading" && (
            <>
              {" "}
              {onboardingBgNumber == 0 && (
                <h1 id="fadingShortOnboadingText">
                  Empowering your{" "}
                  <span style={{ color: "#00E1FF" }}>health</span>
                  {"  "} journey together
                </h1>
              )}
              {onboardingBgNumber == 1 && (
                <h1 id="fadingShortOnboadingText">
                  Guiding Your Path to Empowered{"  "}
                  <span style={{ color: "#00E1FF" }}> Living</span>
                </h1>
              )}
              {onboardingBgNumber == 2 && (
                <h1 id="fadingShortOnboadingText">
                  Empowering <span style={{ color: "#00E1FF" }}> Hope</span> ,{" "}
                  One Step at a Time
                </h1>
              )}
            </>
          )}
          <button
            type="button"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "2px 10px 7px 10px",
              borderRadius: "100%",
              border: "0px",
              fontSize: "23px",
            }}
          >
            <BsBellFill />
          </button>
        </div>

        <div
          className="flexColumnCenter"
          style={{ position: "absolute", bottom: "4px", padding: "15px" }}
        >
          <button
            id="OnboardingLoginBtn"
            onClick={() => {
              Navigate(`/Login`);
              scrollToTop();
            }}
          >
            Log In
          </button>

          <div
            className="flexCenter"
            style={{ width: "90vw", fontSize: "14px" }}
          >
            <button
              type="button"
              className="onboardingLinks"
              onClick={() => {
                Navigate(`/SignUp`);
                scrollToTop();
              }}
            >
              Create account
            </button>
            <button type="button" className="onboardingLinks">
              Community
            </button>{" "}
            <button type="button" className="onboardingLinks">
              Help
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
