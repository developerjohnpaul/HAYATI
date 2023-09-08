import { useContext, useState, useEffect } from "react";
import { app } from "../App";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [validPassword, setValidPassword] = useState(true);
  const [validEmailAddress, setValidEmailAddress] = useState(true);
  const [signUpDetailsValidityStatus, setSignUpDetailsValidityStatus] =
    useState("valid");
  const [signUpStatusModal, setSignUpStatusModalModal] = useState("hidden");

  const App = useContext(app);
  const Navigate = useNavigate();

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const submitDetails = (e) => {
    e.preventDefault();
    if (App.signUpDetails[0].Email == "") {
      setValidEmailAddress(false);
      setSignUpDetailsValidityStatus("emptyEmailInput");
    } else if (!App.signUpDetails[0].Email.endsWith("@gmail.com")) {
      setValidEmailAddress(false);
      setSignUpDetailsValidityStatus("invalidEmail");
    } else if (App.signUpDetails[0].Email == "xapic@gmail.com") {
      setValidEmailAddress(false);
      setSignUpDetailsValidityStatus("EmailAssignedToAnotherAccount");
    } else {
      setValidEmailAddress(true);
      if (App.signUpDetails[0].Password == "") {
        setValidPassword(false);
        setSignUpDetailsValidityStatus("emptyPassword");
      } else if (App.signUpDetails[0].Password.length < 5) {
        setValidPassword(false);
        setSignUpDetailsValidityStatus("passwordTooShort");
      } else if (App.signUpDetails[0].confirmPassword == "") {
        setValidPassword(false);
        setSignUpDetailsValidityStatus("confirmYourPassword");
      } else if (
        App.signUpDetails[0].Password != App.signUpDetails[0].confirmPassword
      ) {
        setValidPassword(false);
        setSignUpDetailsValidityStatus("passwordMismatch");
      } else {
        setValidPassword(true);
        setSignUpStatusModalModal("creatingAccount");
        App.setBlurredBackgroundOverlayStatus("visible");
        setTimeout(() => {
          setSignUpStatusModalModal("loggingIn");
        }, 2000);

        setTimeout(() => {
          scrollToTop();
          Navigate(`/Home`);
          setSignUpStatusModalModal("hidden");
          App.setBlurredBackgroundOverlayStatus("hidden");
        }, 3000);
      }
    }
  };
  return (
    <>
      <div id="createAccountPage">
        {App.blurredBackgroundOverlayStatus == "visible" && (
          <div
            id="BluredBackgroundOverlay"
            onClick={() => {
              setSignUpStatusModalModal("hidden");
              App.setBlurredBackgroundOverlayStatus("hidden");
            }}
          ></div>
        )}{" "}
        <form
          className="flexColumnCenter"
          id="accountSignUpForm"
          onSubmit={submitDetails}
        >
          {validEmailAddress && (
            <input
              type="email"
              id="signupInput"
              value={App.signUpDetails[0].Email}
              onChange={(e) => {
                App.setSignUpDetails((value) => {
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
                id="invalidSignupInput"
                value={App.signUpDetails[0].Email}
                onChange={(e) => {
                  App.setSignUpDetails((value) => {
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
              {signUpDetailsValidityStatus == "emptyEmailInput" && (
                <small id="invalidInputTextWarning">
                  Email address cannot be empty
                </small>
              )}{" "}
              {signUpDetailsValidityStatus == "invalidEmail" && (
                <small id="invalidInputTextWarning">
                  Enter a valid email address ending with "@gmail.com"
                </small>
              )}{" "}
              {signUpDetailsValidityStatus ==
                "EmailAssignedToAnotherAccount" && (
                <small id="invalidInputTextWarning">
                  An account with this email address already exist ,please try
                  logging in instead
                </small>
              )}{" "}
            </div>
          )}
          {validPassword && (
            <input
              type="password"
              id="signupInput"
              value={App.signUpDetails[0].Password}
              onChange={(e) => {
                App.setSignUpDetails((value) => {
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
                id="invalidSignupInput"
                value={App.signUpDetails[0].Password}
                onChange={(e) => {
                  App.setSignUpDetails((value) => {
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
              {signUpDetailsValidityStatus == "emptyPassword" && (
                <small id="invalidInputTextWarning">
                  Password cannot be empty
                </small>
              )}{" "}
              {signUpDetailsValidityStatus == "passwordTooShort" && (
                <small id="invalidInputTextWarning">
                  password must conatain at least 5 characters
                </small>
              )}{" "}
            </div>
          )}
          {validPassword && (
            <input
              type="password"
              id="signupInput"
              value={App.signUpDetails[0].confirmPassword}
              onChange={(e) => {
                App.setSignUpDetails((value) => {
                  return value.map((val, ind) => {
                    return {
                      ...val,
                      confirmPassword: e.target.value.trimStart(),
                    };
                  });
                });
              }}
              placeholder="Confirm password"
            />
          )}
          {!validPassword && (
            <div id="invalidSignupInputAndWarningText">
              {" "}
              <input
                type="password"
                id="invalidSignupInput"
                value={App.signUpDetails[0].confirmPassword}
                onChange={(e) => {
                  App.setSignUpDetails((value) => {
                    return value.map((val, ind) => {
                      return {
                        ...val,
                        confirmPassword: e.target.value.trimStart(),
                      };
                    });
                  });
                }}
                placeholder="Confirm password"
              />
              {signUpDetailsValidityStatus == "confirmYourPassword" && (
                <small id="invalidInputTextWarning">
                  Confirm the password inputed above
                </small>
              )}{" "}
              {signUpDetailsValidityStatus == "passwordMismatch" && (
                <small id="invalidInputTextWarning">Password mismatch</small>
              )}{" "}
            </div>
          )}

          <button type="submit" id="signUpButton">
            Create account
          </button>
        </form>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <span>Already have an account? </span>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#0390A3",
              border: "0px",
            }}
          >
            Log in here!
          </button>
        </div>
      </div>
      {signUpStatusModal == "creatingAccount" && (
        <div id="statusFloatingModal" className="flexColumnCenter">
          <h2>Creating account...</h2>
          <div id="justifyCenter">
            {" "}
            <p
              className="spinner-border "
              style={{ color: "#00A3B7" }}
              role="status"
            ></p>
          </div>
        </div>
      )}
      {signUpStatusModal == "loggingIn" && (
        <div id="statusFloatingModal" className="flexColumnCenter">
          <h2>Logging in...</h2>
          <div id="justifyCenter">
            {" "}
            <p
              className="spinner-border "
              style={{ color: "#00A3B7" }}
              role="status"
            ></p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpPage;
