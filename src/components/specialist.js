import { useContext, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import CryptoJS from "crypto-js";
import { app } from "../App";
import { IoIosArrowBack } from "react-icons/io";
const Specialist = () => {
  const App = useContext(app);
  const location = useLocation();
  const Navigate = useNavigate();
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag.setAttribute("content", "#0893A5");
  }, []);

  useEffect(() => {
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );
    console.log(decryptedSID);
  }, []);

  return (
    <>
      <div id="SpecialistPage">
        <div id="spere1">
          <div className="flexStart fixed-top" id="spre14">
            <button
              id="spere2"
              type="button"
              onClick={() => {
                Navigate(-1);
              }}
            >
              <IoIosArrowBack />
            </button>
            <small id="spere3"> Doctor's Detail</small>
          </div>
          <div className="flexCenter">
            {" "}
            <div id="spere4">
              <div className="flexColumnCenter" id="spre10">
                <div id="spre5">
                  <small id="spre8">Dr. John Doe</small>
                  <small id="spre9">Neurologist- Abuja</small>
                </div>
              </div>
              <div id="spre6">
                <img
                  src={require("../images/Dr.Richard William.jpg")}
                  id="spre7"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="spre11">
          <div className="flexStart">
            <div id="spre12">
              <small id="spre13">Patients</small>
              <small id="spre15">100+</small>
            </div>
            <div id="spre12">
              {" "}
              <small id="spre13">Experience</small>
              <small id="spre15">10 Years</small>
            </div>
            <div id="spre12">
              <small id="spre13">Rating</small>
              <small id="spre15">4.0</small>
            </div>
          </div>

          <div id="spre16">
            <h5 id="spre17">About Doctor</h5>
            <p id="spre18">
              Dr. John Doe is a dedicated and compassionate healthcare
              professional committed to making a positive impact on the lives of
              his patients. He is a Specialist in Neurology with over 10yrs of
              experience.
            </p>
          </div>

          <div className="flexSpaceBetween" id="spre19">
            <small id="spre17">Location</small>
            <a href="https://maps.app.goo.gl/ckZFNmuDd6mtoqaL6">
              {" "}
              <button id="spre20" type="button">
                View map
              </button>
            </a>
          </div>
          <div id="spre21">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3320018941654!2d-122.01358542363383!3d37.33464797574509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sng!4v1695039269323!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flexCenter">
            {" "}
            <button type="button" id="spre22">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Specialist;
