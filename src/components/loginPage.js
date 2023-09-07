import { useContext, useState } from "react";
import { app } from "../App";

const LoginPage = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const App = useContext(app);
  const [TouchIdModalStatus, setTouchIdModalStatus] = useState("hidden");
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
        <form className="flexColumnCenter" id="loginForm">
          <input
            type="email"
            id="loginInput"
            placeholder="Enter email address"
          />
          <input type="password" id="loginInput" placeholder="Enter password" />
          <div className="flexEnd" style={{ width: "85vw" }}>
            <button type="button" id="LoginForgotPasswordBtn">
              Forgot password?
            </button>
          </div>
        </form>
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
        <button type="button" id="loginButton">
          Log In
        </button>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <span>Don’t have an account? </span>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#0390A3",
              border: "0px",
            }}
          >
            Create an account here!
          </button>
        </div>
      </div>
      {TouchIdModalStatus == "visible" && (
        <div id="touchIdModal" className="flexColumnCenter">
          <h4>Touch ID</h4>
          <div className="flexCenter" style={{ width: "80%", height: "75%" }}>
            <img
              src={require("../images/fingerPrintIcon.png")}
              id="touchIdFingerPrintIcon"
            />
            <span style={{ fontSize: "14px" }}>
              Sign in with annajames55@gmail.com
            </span>
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
    </>
  );
};

export default LoginPage;
