import { useEffect, useState } from "react";
import { BsBellFill } from "react-icons/bs";
import {  useNavigate } from "react-router-dom";

const Onboarding = () => {

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#047E8E");
  }, []);

  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if (CUIN !== undefined) {
      Navigate("/");
    }
  }, []);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const Navigate = useNavigate();
  const [shortOnboadingTextStatus, setShortOnboadingTextStatus] =
    useState("live");
  const [onboardingBgNumber, setOnboardingBgNumber] = useState(0);
  const [NBGLI, setNBGLI] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (onboardingBgNumber !== onboardingDetails - 1) {
        setOnboardingBgNumber((prev) => {
          return prev + 1;
        });
      }
      if (onboardingBgNumber === onboardingDetails.length - 1) {
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
      bgUrl: require("../images/onboarding1.png"),
    },
    { bgUrl: require("../images/onboarding2.png") },
    { bgUrl: require("../images/onboarding3.png") },
  ]);

  useEffect(() => {
    const img1 = new Image();
    img1.src = require("../images/onboarding1.png");
    img1.onload = () => {
      setNBGLI((prev) => prev + 1);
    };
    const img2 = new Image();
    img2.src = require("../images/onboarding2.png");
    img2.onload = () => {
      setNBGLI((prev) => prev + 1);
    };
    const img3 = new Image();
    img3.src = require("../images/onboarding3.png");
    img3.onload = () => {
      setNBGLI((prev) => prev + 1);
    };
  }, []);
  return (
    <>
      {NBGLI !== 3 && (
        <>
          {" "}
          <div id="statusFloatingModal" className="flexColumnCenter">
            {" "}
            <img alt=""
              src={require("../images/maskedLogo192.png")}
              id="statusFloatingLogo"
            />{" "}
            <p className="flexCenter" id="darkStatusFloatingText">
              Loading...
            </p>
          </div>
        </>
      )}
      {NBGLI === 3 && (
        <div id="onboarding">
          <div id="onSm">
            {onboardingBgNumber === 0 && (
              <img alt=""
                src={require("../images/onboarding1.png")}
                id="onboardingBg"
              />
            )}
            {onboardingBgNumber === 1 && (
              <img alt=""
                src={require("../images/onboarding2.png")}
                id="onboardingBg"
              />
            )}{" "}
            {onboardingBgNumber === 2 && (
              <img alt=""
                src={require("../images/onboarding3.png")}
                id="onboardingBg"
              />
            )}
          </div>
          <div id="onlg">
            {onboardingBgNumber === 0 && (
              <img alt=""
                src={require("../images/onboarding1Large.jpg")}
                id="onboardingBg"
              />
            )}
            {onboardingBgNumber === 1 && (
              <img alt=""
                src={require("../images/onboardingBg2Large.jpg")}
                id="onboardingBg"
              />
            )}{" "}
            {onboardingBgNumber === 2 && (
              <img alt=""
                src={require("../images/onboardingBg3Large.jpg")}
                id="onboardingBg"
              />
            )}
          </div>
          <img alt="" src={require("../images/LOGO.png")} id="onboardingLogo" />
          <div className="flexSpaceBetween" id="onre1">
            {shortOnboadingTextStatus === "live" && (
              <>
                {" "}
                {onboardingBgNumber === 0 && (
                  <h1 id="shortOnboadingText">
                    Empowering your <span id="onre2">health</span>
                    {"  "} journey together
                  </h1>
                )}
                {onboardingBgNumber === 1 && (
                  <h1 id="shortOnboadingText">
                    Guiding Your Path to Empowered{"  "}
                    <span id="onre2"> Living</span>
                  </h1>
                )}
                {onboardingBgNumber === 2 && (
                  <h1 id="shortOnboadingText">
                    Empowering <span id="onre2">Hope</span> , One Step at a Time
                  </h1>
                )}
              </>
            )}
            {shortOnboadingTextStatus === "fading" && (
              <>
                {" "}
                {onboardingBgNumber === 0 && (
                  <h1 id="fadingShortOnboadingText">
                    Empowering your <span id="onre2">health</span>
                    {"  "} journey together
                  </h1>
                )}
                {onboardingBgNumber === 1 && (
                  <h1 id="fadingShortOnboadingText">
                    Guiding Your Path to Empowered{"  "}
                    <span id="onre2"> Living</span>
                  </h1>
                )}
                {onboardingBgNumber === 2 && (
                  <h1 id="fadingShortOnboadingText">
                    Empowering <span id="onre2"> Hope</span> , One Step at a
                    Time
                  </h1>
                )}
              </>
            )}
            <button type="button" id="onre3">
              <BsBellFill />
            </button>
          </div>

          <div className="flexColumnCenter" id="onre4">
            <button
              id="OnboardingLoginBtn"
              onClick={() => {
                Navigate(`/Login`);
                scrollToTop();
              }}
            >
              Log In
            </button>

            <div className="flexCenter" id="onre5">
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
      )}
    </>
  );
};

export default Onboarding;
