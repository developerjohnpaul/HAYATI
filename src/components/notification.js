import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { app } from "../App";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";
export const NotificationNav = () => {
  useEffect(() => {
    App.setCurrentPage("Article");
  }, []);
  const Navigate = useNavigate();
  const App = useContext(app);
  return (
    <>
      {App.status == "loggedIn" && (<div id="nore4">
        {" "}
        {App.popUpStatus == "save" && <div id="ge2"></div>}
        <div id="nore1">
          <div className="flexStart">
            <button
              type="button"
              id="nore2"
              onClick={() => {
                Navigate("/");
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="nore3">Notification</li>
          </div>
        </div>
      </div>)}
      <Outlet />
    </>
  );
};

export const Notification = () => {
    const App = useContext(app)
  return (
    <>
      {App.status == "loggedIn" && (<div className="flexColumnStart">
        <div id="ge3">
          <div id="nore5">
            <img
              src={require("../images/emptyNotificationAnimation.jpg")}
              id="apre19"
            />
            <p id="apre20">oops you dont have any notification </p>
          </div>
        </div>
      </div>)}
    </>
  );
};
