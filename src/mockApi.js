import App from "./App";
import { createContext, useState } from "react";
export const mockApi = createContext();

const MockApi = () => {
  const [specialist, setSpecialist] = useState([
    {
      SpeacialistProfileImg: require("./images/DrFawadIshar.jpg"),
      specialistName: "Dr Fawad Ishar",
      id: 1,
      specialty: "Physiotherapist",
      phone: "+123-456-009",
      ratings: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr. John Doe is a dedicated and compassionate healthcare professional 
      committed to making a positive impact on the lives of his patients. He is a Specialist 
      in Neurology with over 10yrs of experience.`,
    },
    {
      SpeacialistProfileImg: require("./images/DrBabajideFashola.jpg"),
      specialistName: "Dr Babajide Fashola",
      id: 2,
      specialty: "Physiologist",
      phone: "+123-456-009",
      reviews: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr. John Doe is a dedicated and compassionate healthcare professional 
      committed to making a positive impact on the lives of his patients. He is a Specialist 
      in Neurology with over 10yrs of experience.`,
    },
    {
      SpeacialistProfileImg: require("./images/DrChiamakaAyinna.jpg"),
      specialistName: "Dr Chiamaka Ayinna",
      id: 3,
      specialty: "Neurologist",
      phone: "+123-856-847",
      reviews: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr. John Doe is a dedicated and compassionate healthcare professional 
      committed to making a positive impact on the lives of his patients. He is a Specialist 
      in Neurology with over 10yrs of experience.`,
    },
    {
      SpeacialistProfileImg: require("./images/Dr.Richard William.jpg"),
      specialistName: "Dr.Richard William",
      id: 4,
      specialty: "Dentist",
      phone: "+123-446-028",
      reviews: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr. John Doe is a dedicated and compassionate healthcare professional 
      committed to making a positive impact on the lives of his patients. He is a Specialist 
      in Neurology with over 10yrs of experience.`,
    },
  ]);
  const [appointment, setAppointment] = useState([
    {
      date: "08",
      month: "june",
      title: "Meeting with Dr. Mira Raynah",
      appointee: "Dr. Mira Raynah.png",
      appointeesImg: require("./images/Dr. Mira Raynah.png"),
      appointeesProffession: "Physiotherapist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      specialistId: 1,
      latest: true,
    },
    {
      date: "10",
      month: "june",
      title: "Meeting with  Dr Fawad Ishar",
      appointee: "Dr.Raj Fashan",
      appointeesImg: require("./images/DrFawadIshar.jpg"),
      appointeesProffession: "Physiotherapist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Completed",
      specialistId: 2,
      latest: false,
    },
    {
      date: "17",
      month: "june",
      title: "Meeting with Dr. Babajide Fashola",
      appointeesImg: require("./images/DrBabajideFashola.jpg"),
      appointee: "Dr. Babajide Fashola",
      appointeesProffession: "Physiologist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Cancelled",
      latest: false,
      specialistId: 3,
    },
    {
      date: "20",
      month: "june",
      title: "Meeting with Dr Chiamaka Ayinna",
      appointeesImg: require("./images/DrChiamakaAyinna.jpg"),
      appointee: "Dr. Chiamaka Ayinna",
      appointeesProffession: "Neurologist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      latest: false,
      specialistId: 4,
    },
    {
      date: "23",
      month: "july",
      title: "Meeting with Dr.Richard William",
      appointeesImg: require("./images/Dr.Richard William.jpg"),
      appointee: "Dr.Richard William",
      appointeesProffession: "Dentist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      latest: false,
      specialistId: 4,
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
        setAppointment: setAppointment,
        appointment: appointment,
        setArticles: setArticles,
        articles: articles,
      }}
    >
      <App />
    </mockApi.Provider>
  );
};

export default MockApi;
