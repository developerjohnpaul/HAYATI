import { useContext, useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { app } from "../App";

const SignUpNav = () => {
  const App = useContext(app)
  const Navigate = useNavigate();
  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");
    if ( CUIN !== null) {
      Navigate("/");
    }
  }, [App.appDep]);
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#047E8E");
  }, [App.appDep]);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div id="CreatAccountNavBg" className="fixed-top">
        <div id="MainCreateAccountNav" className="flexSpaceBetween">
          <div className="flexStart">
            <button
              type="button"
              id="CreateAccountNavPrevBtn"
              onClick={() => {
                Navigate(`/`);
                scrollToTop();
              }}
            >
              <MdArrowBackIosNew />
            </button>
            <h3 id="signupNavWelcomeMessage">Create account</h3>
          </div>
          <img
            alt=""
            src={require("../images/LOGO.png")}
            id="createAccountNavLogo"
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SignUpNav;
