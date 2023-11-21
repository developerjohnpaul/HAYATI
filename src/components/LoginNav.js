import { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

const LoginNav = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#047E8E");
  }, []);
  useEffect(() => {
    const CUIN = localStorage.getItem("CUIN");

    if (CUIN != undefined) {
      Navigate("/");
    }
  }, []);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div id="LoginNavBG" className="fixed-top">
        <div id="MainLoginNav" className="flexSpaceBetween">
          <div className="flexStart">
            <button
              type="button"
              id="LoginNavPrevBtn"
              onClick={() => {
                Navigate(`/`);
                scrollToTop();
              }}
            >
              <MdArrowBackIosNew />
            </button>
            <h3 id="loginNavWelcomeMessage">Welcome</h3>
          </div>
           <img alt="" src={require("../images/LOGO.png")} id="loginNavLogo" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LoginNav;
