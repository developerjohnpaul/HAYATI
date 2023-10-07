import { Outlet, json, useNavigate } from "react-router-dom";
import { app } from "../App";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { AiOutlineFire } from "react-icons/ai";
import { PiDropLight, PiMoon } from "react-icons/pi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { IoMdWalk } from "react-icons/io";
import { TbScaleOutline } from "react-icons/tb";
import { mockApi } from "./mockApi";

export const ReportNav = () => {
  useEffect(() => {
    App.setCurrentPage("Reports");
  });
  const Navigate = useNavigate();
  const App = useContext(app);
  return (
    <>
      <div id="rere4">
        {" "}
        {App.popUpStatus == "save" && <div id="ge2"></div>}
        <div id="rere1">
          <div className="flexStart">
            <button
              type="button"
              id="rere2"
              onClick={() => {
                Navigate(-1);
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="rere3">Reports</li>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export const Reports = () => {
  const Api = useContext(mockApi);
  const [dayReporting, setDayReporting] = useState("Mon");
  const [filteredReports, setFilteredReports] = useState([]);
  useEffect(() => {
    setFilteredReports(() => {
      const filteredReport = Api.weeklyActivities.filter((val, ind) => {
        return val.Day == dayReporting;
      });
      console.log(filteredReport);
      console.log(dayReporting);
      return filteredReport;
    });
  }, [dayReporting]);
  return (
    <>
      {filteredReports.map((value, index) => (
        <div className="flexColumnStart" key={index}>
          <div id="ge4">
            <p id="rere5"> Take a look at your activities for this week!</p>
            <div className="flexStart" id="rere10">
              {dayReporting != "Mon" && (
                <button
                  id="rere6"
                  onClick={() => {
                    setDayReporting("Mon");
                  }}
                >
                  <li id="rere7">Mon</li>
                  <li id="rere8">1</li>
                </button>
              )}
              {dayReporting == "Mon" && (
                <button id="rere6">
                  <li id="rere7">Mon</li>
                  <li id="rere11">1</li>
                </button>
              )}
              {dayReporting != "Tue" && (
                <button
                  id="rere6"
                  onClick={() => {
                    setDayReporting("Tue");
                  }}
                >
                  <li id="rere7">Tue</li>
                  <li id="rere8">2</li>
                </button>
              )}
              {dayReporting == "Tue" && (
                <button id="rere6">
                  <li id="rere7">Tue</li>
                  <li id="rere11">2</li>
                </button>
              )}
              {dayReporting != "Wed" && (
                <button
                  id="rere6"
                  onClick={() => {
                    setDayReporting("Wed");
                  }}
                >
                  <li id="rere7">Wed</li>
                  <li id="rere8">3</li>
                </button>
              )}
              {dayReporting == "Wed" && (
                <button id="rere6">
                  <li id="rere7">Wed</li>
                  <li id="rere11">3</li>
                </button>
              )}
              {dayReporting == "Thur" && (
                <button id="rere6">
                  <li id="rere7">Thur</li>
                  <li id="rere11">4</li>
                </button>
              )}
              {dayReporting != "Thur" && (
                <button
                  id="rere6"
                  onClick={() => {
                    setDayReporting("Thur");
                  }}
                >
                  <li id="rere7">Thur</li>
                  <li id="rere8">4</li>
                </button>
              )}
              {dayReporting == "Fri" && (
                <button id="rere6">
                  <li id="rere7">Fri</li>
                  <li id="rere11">5</li>
                </button>
              )}
              {dayReporting != "Fri" && (
                <button
                  id="rere6"
                  onClick={() => {
                    setDayReporting("Fri");
                  }}
                >
                  <li id="rere7">Fri</li>
                  <li id="rere8">5</li>
                </button>
              )}
              {dayReporting == "Sat" && (
                <button id="rere6">
                  <li id="rere7">Sat</li>
                  <li id="rere11">6</li>
                </button>
              )}
              {dayReporting != "Sat" && (
                <button
                  id="rere6"
                  onClick={() => {
                    setDayReporting("Sat");
                  }}
                >
                  <li id="rere7">Sat</li>
                  <li id="rere8">6</li>
                </button>
              )}
              {dayReporting == "Sun" && (
                <button id="rere6">
                  <li id="rere7">Sun</li>
                  <li id="rere11">7</li>
                </button>
              )}
              {dayReporting != "Sun" && (
                <button
                  id="rere6"
                  onClick={() => {
                    setDayReporting("Sun");
                  }}
                >
                  <li id="rere7">Sun</li>
                  <li id="rere8">7</li>
                </button>
              )}
            </div>

            <div id="rere12">
              <div id="rere13">
                <div id="rere16">
                  <li id="rere14">Calories</li>
                  <li id="rere15">
                    <AiOutlineFire />
                  </li>
                </div>
                <div className="flexCenter">
                  <div id="rere17">
                    <CircularProgressbarWithChildren
                      value={value.Calories}
                      minValue={0}
                      maxValue={1500}
                      styles={buildStyles({
                        textColor: "red",
                        pathColor: "white",
                        trailColor: "rgba(237, 234, 234, 0.35)",
                      })}
                      counterClockwise
                    >
                      <div>
                        <li id="rere18">{value.Calories}</li>
                        <li id="rere19">K/Cal</li>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </div>
              <div id="rere20">
                <div id="rere21">
                  <div id="rere22">
                    <CircularProgressbarWithChildren
                      value={value.Protein}
                      minValue={0}
                      maxValue={300}
                      strokeWidth={16}
                      styles={buildStyles({
                        textColor: "red",
                        pathColor: "#FF7917",
                        trailColor: "#D8C7C7",
                      })}
                      counterClockwise
                    >
                      <div>
                        <li id="rere23">
                          {Math.round((value.Protein / 300) * 100)}
                        </li>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div id="rere25">
                    <li id="rere24">Protein</li>
                    <li id="rere26">{value.Protein}</li>
                  </div>
                </div>
                <div id="rere21">
                  <div id="rere22">
                    <CircularProgressbarWithChildren
                      value={value.Fats}
                      minValue={0}
                      maxValue={120}
                      strokeWidth={16}
                      styles={buildStyles({
                        textColor: "red",
                        pathColor: "#FFCC00",
                        trailColor: "#D8C7C7",
                      })}
                      counterClockwise
                    >
                      <div>
                        <li id="rere23">
                          {Math.round((value.Fats / 120) * 100)}
                        </li>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div id="rere25">
                    <li id="rere24">Fats</li>
                    <li id="rere26">{value.Fats}</li>
                  </div>
                </div>{" "}
                <div id="rere21">
                  <div id="rere22">
                    <CircularProgressbarWithChildren
                      value={value.Carbs}
                      minValue={0}
                      maxValue={500}
                      strokeWidth={16}
                      styles={buildStyles({
                        textColor: "red",
                        pathColor: "#D91953",
                        trailColor: "#D8C7C7",
                      })}
                      counterClockwise
                    >
                      <div>
                        <li id="rere23">
                          {" "}
                          {Math.round((value.Carbs / 500) * 100)}
                        </li>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div id="rere25">
                    <li id="rere24">Carbs</li>
                    <li id="rere26">{value.Carbs}</li>
                  </div>
                </div>
              </div>
            </div>
            <div id="rere27">
              <div className="flexSpaceBetween" id="rere34">
                <li id="rere28">Water</li>
                <li id="rere29">
                  <PiDropLight />
                </li>
              </div>
              <div className="flexSpaceBetween" id="rere34">
                <li id="rere30">
                  {value.Water}
                  <span id="rere31">Litres</span>
                </li>
                <li id="rere30">
                  {Math.round((value.Water / 5) * 100)}{" "}
                  <span id="rere31">%</span>
                </li>
              </div>
              <div id="rere32">
                <div
                  id="rere33"
                  style={{ width: `${value.Water * 20}%` }}
                ></div>
              </div>
            </div>
            <div id="rere27">
              <div className="flexSpaceBetween" id="rere34">
                <li id="rere28">sleep</li>
                <li id="rere39">
                  <PiMoon />
                </li>{" "}
              </div>
              <div className="flexSpaceBetween" id="rere34">
                <li id="rere30">
                  {value.Sleep}
                  <span id="rere31">Hours</span>
                </li>
                <li id="rere30">
                  {Math.round((value.Sleep / 8) * 100)}{" "}
                  <span id="rere31">%</span>
                </li>
              </div>
              <div id="rere32">
                <div
                  id="rere35"
                  style={{ width: `${value.Sleep * 12.5}%` }}
                ></div>
              </div>
            </div>
            <div id="rere36">
              <div id="rere37">
                <li id="rere40">
                  <BsFillHeartPulseFill />
                </li>
                <li id="rere41">Pulse</li>
                <li id="rere42">{value.Pulse}</li>
              </div>

              <div id="rere38">
                <div id="rere37">
                  {" "}
                  <li id="rere40">
                    <TbScaleOutline />
                  </li>
                  <li id="rere41">Weight</li>
                  <li id="rere42">{value.Weight}kg</li>
                </div>
              </div>
              <div id="rere37">
                {" "}
                <li id="rere40">
                  <IoMdWalk />
                </li>
                <li id="rere41">Steps</li>
                <li id="rere42">{value.Steps}km/hr</li>
              </div>
            </div>
            <h6 id="rere43">Analytics</h6>
            <div id="rere44">
              <div id="rere45">
                <li id="rere47">10:00</li>
                <li id="rere47">8:00</li>
                <li id="rere47">6:00</li>
                <li id="rere47">4:00</li>
                <li id="rere47">2:00</li>
                <li id="rere47">00:00</li>{" "}
              </div>
              <div id="rere46">
                <div id="rere48">
                  <li id="rere49"></li>
                </div>
                <div id="rere50">
                  <li id="rere51"></li>
                </div>
                <div id="rere48">
                  <li id="rere49"></li>
                </div>{" "}
                <div id="rere50">
                  <li id="rere51"></li>
                </div>
                <div id="rere48">
                  <li id="rere49"></li>
                </div>{" "}
                <div id="rere50">
                  <li id="rere51"></li>
                </div>
                <div id="rere48">
                  <li id="rere49"></li>
                </div>{" "}
                <div id="rere50">
                  <li id="rere51"></li>
                </div>
                <div id="rere48">
                  <li id="rere49"></li>
                </div>{" "}
                <div id="rere50">
                  <li id="rere51"></li>
                </div>
                <div id="rere48">
                  <li id="rere49"></li>
                </div>
              </div>
            </div>
            <div id="rere52">
              <div id="rere53">
                <div id="rere59">
                  {Api.weeklyAnalytic.map((value, index) => (
                    <div id="rere60" key={index}>
                      <li id="rere61" style={{ height: value }}></li>
                    </div>
                  ))}
                </div>
              </div>
              <div id="rere54">
                {" "}
                <button id="rere55">
                  <li id="rere58">1</li> <li id="rere57">Mon</li>
                </button>
                <button id="rere55">
                  <li id="rere58">2</li> <li id="rere57">Tue</li>
                </button>{" "}
                <button id="rere55">
                  <li id="rere56">3</li> <li id="rere57">Wed</li>
                </button>
                <button id="rere55">
                  <li id="rere58">4</li> <li id="rere57">Thur</li>
                </button>{" "}
                <button id="rere55">
                  <li id="rere58">5</li> <li id="rere57">Fri</li>
                </button>{" "}
                <button id="rere55">
                  <li id="rere58">6</li> <li id="rere57">Sat</li>
                </button>{" "}
                <button id="rere55">
                  <li id="rere58">7</li> <li id="rere57">Sun</li>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
