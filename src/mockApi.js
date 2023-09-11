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
      specialistName: "Dr  Chiamaka Ayinna",
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
  return (
    <mockApi.Provider
      value={{
        setSpecialist: setSpecialist,
        specialist: specialist,
        setUpcomingAppointment: setUpcomingAppointment,
        upcomingAppointment: upcomingAppointment,
      }}
    >
      <App />
    </mockApi.Provider>
  );
};

export default MockApi;
