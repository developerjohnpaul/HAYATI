import App from "../App";
import { createContext, useState } from "react";
export const mockApi = createContext();

const MockApi = () => {
  const [specialist, setSpecialist] = useState([
    {
      SpeacialistProfileImg: require("../images/DrFawadIshar.jpg"),
      specialistName: "Dr Fawad Ishar",
      id: 1,
      specialty: "Physiotherapist",
      phone: "+123-456-009",
      ratings: "4.5",
      Patients: 130,
      experience: 290,
      about: `Dr. John Doe is a dedicated and compassionate medical professional 
      committed to helping people affected by injury, illness or disability through movement 
      and exercise, manual therapy, education and advice`,
      stateOfResidence: "ohio",
      countryOfResidence: "united state",
      gMapLocationRLink: "https://maps.app.goo.gl/q5vjb77DdREzUCBPA",
      gMapLocationDLink: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48815.3367379769!2d-82.96739834110414!3d40.120927285978134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f565634c2357%3A0x46a13054b05d3f41!2sWesterville%2C%20OH%2C%20USA!5e0!3m2!1sen!2sng!4v1695049303932!5m2!1sen!2sng`,
    },
    {
      SpeacialistProfileImg: require("../images/DrBabajideFashola.jpg"),
      specialistName: "Dr Babajide Fashola",
      id: 2,
      specialty: "Physiologist",
      phone: "+123-456-009",
      reviews: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr Babajide Fashola is a commited and understing medical professional
      examining and monitoring physiological organs of the human body to diagnose and offer
       treatment for physiological disorders and long-term illnesses.`,
      stateOfResidence: "Virginia",
      countryOfResidence: "united state",
      gMapLocationRLink: "https://maps.app.goo.gl/wvvgam6fBfnVp8AT7",
      gMapLocationDLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50795.077793955315!2d-76.74462183066977!3d37.27872155814535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0890a4495aa1b%3A0xc14b30175e160eaa!2sWilliamsburg%2C%20VA%2C%20USA!5e0!3m2!1sen!2sng!4v1695049598580!5m2!1sen!2sng",
    },
    {
      SpeacialistProfileImg: require("../images/DrChiamakaAyinna.jpg"),
      specialistName: "Dr Chiamaka Ayinna",
      id: 3,
      specialty: "Neurologist",
      phone: "+123-856-847",
      reviews: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr Chiamaka Ayinna is a devoted and caring healthcare professional 
      committed to making a positive impact on the lives of her patients. she is a specialist 
      in Neurology with  accountable years of experience.`,
      stateOfResidence: "California",
      countryOfResidence: "united state",
      gMapLocationRLink: "https://maps.app.goo.gl/JUbMRJ1UBiq35PE5A",
      gMapLocationDLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1493817.9318178392!2d-95.01959331257827!3d44.94969733230825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f630b355937675%3A0xf6fab4c3a9f1378a!2sLowell%20Dr%2C%20Apple%20Valley%2C%20MN%2055124%2C%20USA!5e0!3m2!1sen!2sng!4v1695050030284!5m2!1sen!2sng",
    },
    {
      SpeacialistProfileImg: require("../images/Dr.Richard William.jpg"),
      specialistName: "Dr.Richard William",
      id: 4,
      specialty: "Dentist",
      phone: "+123-446-028",
      reviews: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr.Richard William  is an healthcare provider who diagnoses and treats 
      oral health conditions,taking good care of your teeth and gums  helping you reduce 
      your risk for other serious health conditions, like heart disease and stroke.`,
      stateOfResidence: "Florida",
      countryOfResidence: "united state",
      gMapLocationRLink: "https://maps.app.goo.gl/4nGTfqhh4wix5vVH8",
      gMapLocationDLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6581285131506!2d-81.52944392539078!3d27.617453729452194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dcff75a10955c3%3A0xe495e6ddaedcfc99!2sW%20Stryker%20Rd%2C%20Avon%20Park%2C%20FL%2033825%2C%20USA!5e1!3m2!1sen!2sng!4v1695050195086!5m2!1sen!2sng",
    },
    {
      SpeacialistProfileImg: require("../images/Dr. Mira Raynah.jpg"),
      specialistName: "Dr. Mira Raynah",
      id: 5,
      specialty: "Orthoptists",
      phone: "+123-446-028",
      reviews: "4.5",
      Patients: 105,
      experience: 10,
      about: `Dr. Mira Raynah  is an orthoptists specialized in the evaluation and 
      treatment of eye movement problems and binocular vision.
       she is uniquely trained to treat disorders such as amblyopia, genetic disorders,
         complex pediatric and adult strabismus.`,
      stateOfResidence: "Florida",
      countryOfResidence: "united state",
      gMapLocationRLink: "https://maps.app.goo.gl/4nGTfqhh4wix5vVH8",
      gMapLocationDLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6581285131506!2d-81.52944392539078!3d27.617453729452194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dcff75a10955c3%3A0xe495e6ddaedcfc99!2sW%20Stryker%20Rd%2C%20Avon%20Park%2C%20FL%2033825%2C%20USA!5e1!3m2!1sen!2sng!4v1695050195086!5m2!1sen!2sng",
    },
  ]);
  const [appointment, setAppointment] = useState([
    {
      date: "10",
      month: "june",
      title: "Meeting with  Dr Fawad Ishar",
      appointee: "Dr.Raj Fashan",
      appointeesImg: require("../images/DrFawadIshar.jpg"),
      appointeesProffession: "Physiotherapist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      specialistId: 1,
      latest: true,
    },
    {
      date: "17",
      month: "june",
      title: "Meeting with Dr. Babajide Fashola",
      appointeesImg: require("../images/DrBabajideFashola.jpg"),
      appointee: "Dr. Babajide Fashola",
      appointeesProffession: "Physiologist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      latest: false,
      specialistId: 2,
    },
    {
      date: "20",
      month: "june",
      title: "Meeting with Dr Chiamaka Ayinna",
      appointeesImg: require("../images/DrChiamakaAyinna.jpg"),
      appointee: "Dr. Chiamaka Ayinna",
      appointeesProffession: "Neurologist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      latest: false,
      specialistId: 3,
    },
    {
      date: "23",
      month: "july",
      title: "Meeting with Dr.Richard William",
      appointeesImg: require("../images/Dr.Richard William.jpg"),
      appointee: "Dr.Richard William",
      appointeesProffession: "Dentist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Cancelled",
      latest: false,
      specialistId: 4,
    },
    {
      date: "08",
      month: "june",
      title: "Meeting with Dr. Mira Raynah",
      appointee: "Dr. Mira Raynah.png",
      appointeesImg: require("../images/Dr. Mira Raynah.jpg"),
      appointeesProffession: "Physiotherapist",
      startTime: "10:15am",
      endTime: " 11:00am",
      location: "@Active life physiotherapy clinic",
      status: "Completed",
      specialistId: 5,
      latest: false,
    },
  ]);
  const [articles, setArticles] = useState([
    {
      articleImg: require("../images/trendingArticleImg1.png"),
      title: `The role of physiotherapy in Hydrocephalus and Spinal cord
                  tumor Treatment`,
      author: "Dr Fawad",
      timeRead: "5mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
    },
    {
      articleImg: require("../images/radiologist.jpg"),
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
      articleImg: require("../images/surgeon.jpg"),
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
      articleImg: require("../images/neurologist.jpg"),
      title: `A neurologist is a medical doctor who specializes in treating diseases of
       the brain and nervous system1`,
      author: "Dr Fawad Ishar",
      timeRead: "16mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
    },
  ]);

  const [medications, setMedications] = useState([
    {
      img: require("../images/NeurontinImg.png"),
      name: "Neurontin 300mg",
      dosage: "2",
      duration: "Two weeks from start date",
      time: ["8:45am", "10:50Am", "4:00pm"],
      startDay: "17 oct",
    },
    {
      img: require("../images/Amyl Nitrate.jpg"),
      name: "Amyl Nitrate ",
      dosage: "1 spoon before meal",
      duration: "5 days from start day",
      time: ["8:45am", "10:50Am", "4:00pm"],
      startDay: "19 oct",
    },
    {
      img: require("../images/azithromycin.jpg"),
      name: "azithromycin",
      dosage: "1 pill after meal",
      duration: "10 days from start day",
      time: ["8:45am", "10:50Am", "4:00pm"],
      startDay: "28 sep",
    },
    {
      img: require("../images/D-koff.jpg"),
      name: "D-koff ",
      dosage: "Two spoons after meal",
      duration: "13 days from start day",
      time: ["8:45am", "10:50Am", "4:00pm"],
      startDay: "19 sep",
    },
    {
      img: require("../images/chloroquine.jpg"),
      name: "chloroquine ",
      dosage: "1 pill after meal",
      duration: "3 weeks from start day",
      time: ["8:45am", "10:50Am", "4:00pm"],
      startDay: "2 oct",
    },
    {
      img: require("../images/piperazine.jpg"),
      name: "piperazine ",
      dosage: "4 pills before meal",
      duration: "4 days from start day",
      time: ["8:45am", "10:50Am", "4:00pm"],
      startDay: "9 oct",
    },
    {
      img: require("../images/plaquenil.jpg"),
      name: "plaquenil",
      dosage: "Two pills after meal",
      duration: "3 days from start day",
      time: ["8:45am", "10:50Am", "4:00pm"],
      startDay: "14 oct",
    },
  ]);
  const [weeklyAnalytic, setWeeklyAnalytic] = useState([
    50, 40, 100, 70, 60, 95, 20,
  ]);

  const [weeklyActivities, setWeeklyActivities] = useState([
    {
      Day: "Mon",
      Calories: 730,
      Protein: 130,
      Fats: 65,
      Carbs: 305,
      Water: 3.5,
      Sleep: 7.4,
      Pulse: 79,
      Weight: 63,
      Steps: 163,
    },

    {
      Day: "Tue",
      Calories: 500,
      Protein: 180,
      Fats: 70,
      Carbs: 200,
      Water: 2.2,
      Sleep: 5,
      Pulse: 70,
      Weight: 61,
      Steps: 200,
    },
    {
      Day: "Wed",
      Calories: 1400,
      Protein: 280,
      Fats: 110,
      Carbs: 460,
      Water: 4.6,
      Sleep: 7.8,
      Pulse: 68,
      Weight: 58,
      Steps: 1023,
    },
    {
      Day: "Thur",
      Calories: 1300,
      Protein: 220,
      Fats: 90,
      Carbs: 410,
      Water: 4.2,
      Sleep: 6.8,
      Pulse: 60,
      Weight: 63,
      Steps: 998,
    },
    {
      Day: "Fri",
      Calories: 1100,
      Protein: 180,
      Fats: 80,
      Carbs: 200,
      Water: 2,
      Sleep: 6,
      Pulse: 82,
      Weight: 69,
      Steps: 800,
    },
    {
      Day: "Sat",
      Calories:800 ,
      Protein: 130,
      Fats: 60,
      Carbs: 150,
      Water: 2.8,
      Sleep: 5.2,
      Pulse: 85,
      Weight: 71,
      Steps: 600,
    },
    {
      Day: "Sun",
      Calories: 500,
      Protein: 104,
      Fats: 46,
      Carbs: 130,
      Water: 1.8,
      Sleep: 3.2,
      Pulse: 65,
      Weight: 74,
      Steps: 200,
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
        setMedications: setMedications,
        medications: medications,
        setWeeklyAnalytic: setWeeklyAnalytic,
        weeklyAnalytic: weeklyAnalytic,
        setWeeklyActivities: setWeeklyActivities,
        weeklyActivities: weeklyActivities,
      }}
    >
      <App />
    </mockApi.Provider>
  );
};

export default MockApi;
