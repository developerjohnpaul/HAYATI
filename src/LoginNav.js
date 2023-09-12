import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

const LoginNav = () => {
   useEffect(() => {
     const metaTag = document.querySelector('meta[name="theme-color"]');
     metaTag.setAttribute("content", "#047E8E");
   }, []);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const Navigate = useNavigate();
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
            <h3 style={{ color: "white", fontSize: "23px" }}>Welcome</h3>
          </div>
          <img src={require("./images/LOGO.png")} id="loginNavLogo" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LoginNav;
