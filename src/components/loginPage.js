import { useContext, useState } from "react";
import { app } from "../App";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [TouchIdModalStatus, setTouchIdModalStatus] = useState("hidden");
  const [loginInStatusModal, setLoginStatusModal] = useState("hidden");
  const [loginDetailsValidityStatus, setLoginDetailsValidityStatus] =
    useState("valid");
  const [validPassword, setValidPassword] = useState(true);
  const [validEmailAddress, setValidEmailAddress] = useState(true);
  const Navigate = useNavigate();
  const App = useContext(app);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const submitDetails = (e) => {
    e.preventDefault();
    if (App.logInDetails[0].Email == "") {
      setValidEmailAddress(false);
      setLoginDetailsValidityStatus("emptyEmailInput");
    } else if (!App.logInDetails[0].Email.endsWith("@gmail.com")) {
      setValidEmailAddress(false);
      setLoginDetailsValidityStatus("invalidEmail");
    } else if (App.logInDetails[0].Email != App.user[0].Email) {
      setValidEmailAddress(false);
      setLoginDetailsValidityStatus("emailNotFound");
    } else {
      setValidEmailAddress(true);
      if (App.logInDetails[0].Password == "") {
        setValidPassword(false);
        setLoginDetailsValidityStatus("emptyPasswordInput");
      } else if (App.logInDetails[0].Password != App.user[0].Password) {
        setValidPassword(false);
        setLoginDetailsValidityStatus("incorrectPassword");
      } else if (
        App.logInDetails[0].Email == App.user[0].Email &&
        App.logInDetails[0].Password == App.user[0].Password
      ) {
        setLoginStatusModal("loggingIn");
        App.setBlurredBackgroundOverlayStatus("visible");
        setValidPassword(true);
        setTimeout(() => {
          localStorage.setItem("CUIN", 7);
          scrollToTop();
          Navigate(`/`);
          setLoginStatusModal("hidden");
          App.setBlurredBackgroundOverlayStatus("hidden");
          App.setlogInDetails([
            {
              Email: "",
              Password: "",
            },
          ]);
        }, 2000);
      }
    }
  };
  return (
    <>
      <div id="logInPage">
        {App.blurredBackgroundOverlayStatus == "visible" && (
          <div
            id="BluredBackgroundOverlay"
            onClick={() => {
              setTouchIdModalStatus("hidden");
              App.setBlurredBackgroundOverlayStatus("hidden");
            }}
          ></div>
        )}{" "}
        <form
          className="flexColumnCenter"
          id="loginForm"
          onSubmit={submitDetails}
        >
          {validEmailAddress && (
            <input
              type="email"
              id="loginInput"
              value={App.logInDetails[0].Email}
              onChange={(e) => {
                App.setlogInDetails((value) => {
                  return value.map((val, ind) => {
                    return {
                      ...val,
                      Email: e.target.value.trimStart(),
                    };
                  });
                });
              }}
              placeholder="Enter email address"
            />
          )}
          {!validEmailAddress && (
            <div id="invalidSignupInputAndWarningText">
              <input
                type="email"
                id="invalidLoginInput"
                value={App.logInDetails[0].Email}
                onChange={(e) => {
                  App.setlogInDetails((value) => {
                    return value.map((val, ind) => {
                      return {
                        ...val,
                        Email: e.target.value.trimStart(),
                      };
                    });
                  });
                }}
                placeholder="Enter email address"
              />
              {loginDetailsValidityStatus == "emptyEmailInput" && (
                <small id="invalidInputTextWarning">
                  Email address cannot be empty
                </small>
              )}{" "}
              {loginDetailsValidityStatus == "invalidEmail" && (
                <small id="invalidInputTextWarning">
                  Enter a valid email address ending with "@gmail.com"
                </small>
              )}{" "}
              {loginDetailsValidityStatus == "emailNotFound" && (
                <small id="invalidInputTextWarning">
                  No hayati account with the provided email address
                </small>
              )}{" "}
            </div>
          )}

          {validPassword && (
            <input
              type="password"
              id="loginInput"
              value={App.logInDetails[0].Password}
              onChange={(e) => {
                App.setlogInDetails((value) => {
                  return value.map((val, ind) => {
                    return {
                      ...val,
                      Password: e.target.value.trimStart(),
                    };
                  });
                });
              }}
              placeholder="Enter password"
            />
          )}
          {!validPassword && (
            <div id="invalidSignupInputAndWarningText">
              {" "}
              <input
                type="password"
                id="invalidLoginInput"
                value={App.logInDetails[0].Password}
                onChange={(e) => {
                  App.setlogInDetails((value) => {
                    return value.map((val, ind) => {
                      return {
                        ...val,
                        Password: e.target.value.trimStart(),
                      };
                    });
                  });
                }}
                placeholder="Enter password"
              />
              {loginDetailsValidityStatus == "emptyPasswordInput" && (
                <small id="invalidInputTextWarning">
                  Password cannot be empty
                </small>
              )}{" "}
              {loginDetailsValidityStatus == "incorrectPassword" && (
                <small id="invalidInputTextWarning">Incorrect password</small>
              )}{" "}
            </div>
          )}
          <div className="flexEnd" id="lpre1">
            <button type="button" id="LoginForgotPasswordBtn">
              Forgot password?
            </button>
          </div>

          <button
            id="touchIdLoginBtn"
            type="button"
            onClick={() => {
              setTouchIdModalStatus("visible");
              App.setBlurredBackgroundOverlayStatus("visible");
            }}
          >
            Log in with Touch ID
          </button>
          <button type="submit" id="loginButton">
            Log In
          </button>
        </form>
        <div id="lpre2">
          <span>Don’t have an account? </span>
          <button
            id="lpre3"
            onClick={() => {
              Navigate(`/SignUp`);
              scrollToTop();
            }}
          >
            Create an account here!
          </button>
        </div>
      </div>
      {TouchIdModalStatus == "visible" && (
        <div id="touchIdModal" className="flexColumnCenter">
          <h4>Touch ID</h4>
          <div className="flexCenter" id="lpre4">
            <img
              src={require("../images/fingerPrintIcon.png")}
              id="touchIdFingerPrintIcon"
            />
            <span id="lpre15">Sign in with annajames55@gmail.com</span>
          </div>
          <div className="flexEnd" style={{ width: "100%" }}>
            <button
              id="TouchIdModalCancelBtn"
              onClick={() => {
                setTouchIdModalStatus("hidden");
                App.setBlurredBackgroundOverlayStatus("hidden");
              }}
            >
              {" "}
              cancel
            </button>
          </div>
        </div>
      )}
      {loginInStatusModal == "loggingIn" && (
        <>
          <div id="statusFloatingModal" className="flexColumnCenter">
            {" "}
            <img
              src={require("../images/maskedLogo192.png")}
              id="statusFloatingLogo"
            />{" "}
            <p className="flexCenter" id="statusFloatingText">
              Logging In...
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default LoginPage;
