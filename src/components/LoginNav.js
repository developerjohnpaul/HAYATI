import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet } from "react-router-dom";

const LoginNav = () => {
  return (
    <>
      <div id="LoginNavBG" className="fixed-top">
        <div id="MainLoginNav" className="flexSpaceBetween">
          <div className="flexStart">
            <button type="button" id="LoginNavPrevBtn">
              <MdArrowBackIosNew />
            </button>
            <h3 style={{ color: "white", fontSize: "23px" }}>Welcome</h3>
          </div>
          <img src={require("../images/LOGO.png")} id="loginNavLogo" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LoginNav;
