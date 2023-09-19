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
      bgUrl: require("../images/onboarding1.png"),
    },
    { bgUrl: require("../images/onboarding2.jpg") },
    { bgUrl: require("../images/onboarding3.png") },
  ]);

  return (
    <>
      <div id="onboarding">
        <div>
          {onboardingBgNumber == 0 && (
            <img src={require("../images/onboarding1.png")} id="onboardingBg" />
          )}
          {onboardingBgNumber == 1 && (
            <img src={require("../images/onboarding2.jpg")} id="onboardingBg" />
          )}{" "}
          {onboardingBgNumber == 2 && (
            <img src={require("../images/onboarding3.png")} id="onboardingBg" />
          )}
        </div>
        <img src={require("../images/LOGO.png")} id="onboardingLogo" />
        <div className="flexSpaceBetween" id="onre1">
          {shortOnboadingTextStatus == "live" && (
            <>
              {" "}
              {onboardingBgNumber == 0 && (
                <h1 id="shortOnboadingText">
                  Empowering your <span id="onre2">health</span>
                  {"  "} journey together
                </h1>
              )}
              {onboardingBgNumber == 1 && (
                <h1 id="shortOnboadingText">
                  Guiding Your Path to Empowered{"  "}
                  <span id="onre2"> Living</span>
                </h1>
              )}
              {onboardingBgNumber == 2 && (
                <h1 id="shortOnboadingText">
                  Empowering <span id="onre2">Hope</span> , One Step at a Time
                </h1>
              )}
            </>
          )}
          {shortOnboadingTextStatus == "fading" && (
            <>
              {" "}
              {onboardingBgNumber == 0 && (
                <h1 id="fadingShortOnboadingText">
                  Empowering your <span id="onre2">health</span>
                  {"  "} journey together
                </h1>
              )}
              {onboardingBgNumber == 1 && (
                <h1 id="fadingShortOnboadingText">
                  Guiding Your Path to Empowered{"  "}
                  <span id="onre2"> Living</span>
                </h1>
              )}
              {onboardingBgNumber == 2 && (
                <h1 id="fadingShortOnboadingText">
                  Empowering <span id="onre2"> Hope</span> , One Step at a Time
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
    </>
  );
};

export default Onboarding;
