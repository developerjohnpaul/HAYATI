import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

const SignUpNav = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const Navigate = useNavigate();
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
            <h3 style={{ color: "white", fontSize: "23px" }}>Create account</h3>
          </div>
          <img src={require("../images/LOGO.png")} id="createAccountNavLogo" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SignUpNav;
