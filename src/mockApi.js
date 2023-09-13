import App from "./App";
import { createContext, useState } from "react";
export const mockApi = createContext();

const MockApi = () => {
  const [specialist, setSpecialist] = useState([
    {
      SpeacialistProfileImg: require("./images/DrFawadIshar.png"),
      specialistName: "Dr Fawad Ishar",
      specialty: "Physiotherapist",
      phone: "+123-456-009",
      reviews: "4.5",
    },
    {
      SpeacialistProfileImg: require("./images/DrBabajideFashola.png"),
      specialistName: "Dr Babajide Fashola",
      specialty: "Physiologist",
      phone: "+123-456-009",
      reviews: "4.5",
    },
    {
      SpeacialistProfileImg: require("./images/DrChiamakaAyinna.png"),
      specialistName: "Dr Chiamaka Ayinna",
      specialty: "Neurologist",
      phone: "+123-456-009",
      reviews: "4.5",
    },
  ]);
  const [upcomingAppointment, setUpcomingAppointment] = useState([
    {
      date: "08",
      month: "june",
      title: "Meeting with Dr.Raj Fashan",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "latest",
    },
    {
      date: "08",
      month: "june",
      title: "Meeting with Dr.Raj Fashan",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "later",
    },
    {
      date: "08",
      month: "june",
      title: "Meeting with Dr.Raj Fashan",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "later",
    },
  ]);
  const [articles, setArticles] = useState([
    {
      articleImg: require("./images/trendingArticleImg1.png"),
      title: `The role of physiotherapy in Hydrocephalus and Spinal cord
                  tumor Treatment`,
      author: "Dr Fawad",
      timeRead: "5mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
    },
    {
      articleImg: require("./images/radiologist.jpg"),
      title: `A radiologist is a medical doctor who specializes in diagnosing and treating 
      conditions using imaging equipment. Radiologists often specialize in specific areas of
       radiology, such as pediatric radiology, oncology radiology or interventional radiology.`,
      author: "Dr Chiamaka Ayinna",
      timeRead: "10mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
    },
    {
      articleImg: require("./images/surgeon.jpg"),
      title: `A surgeon is a doctor who specializes in evaluating and treating conditions 
      that may require surgery, or physically changing the human body. Surgeries can be
       done to diagnose or treat disease or injury. In the operating room, surgeons lead a 
       team of other doctors and nurses to make sure that a procedure goes smoothly.`,
      author: "Dr Babajide Fashola",
      timeRead: "12mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
    },
    {
      articleImg: require("./images/neurologist.jpg"),
      title: `A neurologist is a medical doctor who specializes in treating diseases of
       the brain and nervous system1`,
      author: "Dr Fawad Ishar",
      timeRead: "16mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
    },
  ]);
  return (
    <mockApi.Provider
      value={{
        setSpecialist: setSpecialist,
        specialist: specialist,
        setUpcomingAppointment: setUpcomingAppointment,
        upcomingAppointment: upcomingAppointment,
        setArticles: setArticles,
        articles: articles,
      }}
    >
      <App />
    </mockApi.Provider>
  );
};

export default MockApi;
