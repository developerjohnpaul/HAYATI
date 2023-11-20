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
      date: 10,
      month: "june",
      year: 2020,
      title: "Meeting with  Dr Fawad Ishar",
      appointee: "Dr.Raj Fashan",
      appointeesImg: require("../images/DrFawadIshar.jpg"),
      appointeesProffession: "Physiotherapist",
      startTime: "11:55am",
      endTime: " 5:10pm",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      specialistId: 1,
      latest: true,
      appointmentId: 1,
    },
    {
      date: 17,
      month: "june",
      year: 2020,
      title: "Meeting with Dr. Babajide Fashola",
      appointeesImg: require("../images/DrBabajideFashola.jpg"),
      appointee: "Dr. Babajide Fashola",
      appointeesProffession: "Physiologist",
      startTime: "11:38am",
      endTime: " 3:07pm",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      latest: false,
      specialistId: 2,
      appointmentId: 2,
    },

    {
      date: 23,
      month: "july",
      year: 2020,
      title: "Meeting with Dr.Richard William",
      appointeesImg: require("../images/Dr.Richard William.jpg"),
      appointee: "Dr.Richard William",
      appointeesProffession: "Dentist",
      startTime: "6:15am",
      endTime: " 2:41pm",
      location: "@Active life physiotherapy clinic",
      status: "Cancelled",
      latest: false,
      specialistId: 4,
      appointmentId: 4,
    },
    {
      date: 30,
      month: "june",
      year: 2020,
      title: "Meeting with Dr. Mira Raynah",
      appointee: "Dr. Mira Raynah.png",
      appointeesImg: require("../images/Dr. Mira Raynah.jpg"),
      appointeesProffession: "Physiotherapist",
      startTime: "5:15pm",
      endTime: " 8:00pm",
      location: "@Active life physiotherapy clinic",
      status: "Completed",
      specialistId: 5,
      appointmentId: 5,
      latest: false,
    },
    {
      date: 20,
      month: "june",
      year: 2020,
      title: "Meeting with Dr Chiamaka Ayinna",
      appointeesImg: require("../images/DrChiamakaAyinna.jpg"),
      appointee: "Dr. Chiamaka Ayinna",
      appointeesProffession: "Neurologist",
      startTime: "8:40am",
      endTime: " 9:00pm",
      location: "@Active life physiotherapy clinic",
      status: "Upcoming",
      latest: false,
      specialistId: 3,
      appointmentId: 6,
    },
  ]);

  const [articles, setArticles] = useState([
    {
      articleImg: require("../images/trendingArticleImg1.png"),
      title: `The role of physiotherapy in Hydrocephalus and Spinal cord
                  tumor Treatment`,
      author: "Dr Fawad",
      authorImg: require("../images/DrFawadIshar.jpg"),
      timeRead: "5mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
      bookMarked: true,
      id: 1,
      content: `Physiotherapy plays a crucial role in the treatment and management of patients living with hydrocephalus and spinal cord tumors. It focuses on improving physical function, mobility, and overall quality of life for individuals affected by these conditions. Here are some key aspects of the role of physiotherapy in their treatment:

1. Mobility and Strength: Physiotherapists work to improve and maintain mobility, strength, and flexibility. This is especially important for individuals with spinal cord tumors, as they may experience muscle weakness or loss of function.
2. Post-Surgery Rehabilitation: After surgical procedures for spinal cord tumors or shunt placements for hydrocephalus, physiotherapy is crucial in aiding recovery. It helps individuals regain strength, coordination, and range of motion.
3. Pain Management: Physiotherapists use a variety of techniques, including manual therapy, exercises, and modalities like heat or cold therapy, to help manage pain associated with these conditions.
4. Neurological Rehabilitation: For individuals with spinal cord tumors, physiotherapy focuses on neurological rehabilitation to address issues such as paralysis, loss of sensation, and impaired coordination.
5. Gait Training: Physiotherapists assist patients in relearning how to walk, especially if they've experienced mobility issues due to spinal cord tumors or surgical procedures.
6. Balance and Coordination: Hydrocephalus and spinal cord tumors can affect balance and coordination. Physiotherapy interventions target these areas to improve stability and reduce the risk of falls.
7. Assistive Devices and Mobility Aids: Physiotherapists can assess the need for and provide guidance on using mobility aids such as walkers, canes, or wheelchairs.
8. Respiratory Care: For individuals with spinal cord tumors affecting the respiratory system, physiotherapists can provide exercises and techniques to improve lung function.
9. Hydrotherapy (Aquatic Therapy): Water-based exercises in a controlled environment can be beneficial for individuals with limited mobility due to spinal cord tumors or hydrocephalus.
10. Patient Education: Physiotherapists educate patients and their families on exercises, techniques, and strategies for maintaining and improving physical function.
11. Preventing Complications: Physiotherapy helps prevent complications like muscle contractures, pressure sores, and respiratory issues that may arise due to reduced mobility.
12. Emotional Support: Physiotherapists often provide emotional support and motivation, which can be crucial for patients facing the challenges associated with hydrocephalus and spinal cord tumors.
`,
    },
    {
      articleImg: require("../images/radiologist.jpg"),
      title: `A radiologist is a medical doctor who specializes in diagnosing and treating 
      conditions using imaging equipment. Radiologists often specialize in specific areas of
       radiology, such as pediatric radiology, oncology radiology or interventional radiology.`,
      author: "Dr Chiamaka Ayinna",
      authorImg: require("../images/DrChiamakaAyinna.jpg"),
      timeRead: "10mins",
      status: "trending",
      read: false,
      timePosted: "PostedNow",
      bookMarked: false,
      id: 2,
      content: `A radiologist is a medical doctor who specializes in the interpretation of medical images to diagnose and treat diseases or conditions. They play a crucial role in the healthcare system by providing valuable information to guide patient care.

Here are some key aspects of a radiologist's role:

Interpretation of Medical Images: Radiologists review and interpret a variety of medical images, including X-rays, CT scans, MRI scans, ultrasounds, and nuclear medicine studies. They identify abnormalities, injuries, or diseases based on these images.

Diagnostic Expertise: Radiologists are skilled in recognizing the subtle differences in shades of gray, structures, and patterns on medical images. This expertise allows them to detect and diagnose a wide range of conditions.

Specialized Training: Becoming a radiologist requires extensive education and training. After completing medical school, they typically undergo a residency program in radiology, which provides specialized training in medical imaging techniques and interpretation.

Collaboration with Healthcare Teams: Radiologists work closely with other healthcare professionals, including referring physicians and surgeons, to provide accurate and timely diagnoses. They play a crucial role in guiding treatment plans.

Subspecialties: Radiology encompasses various subspecialties, such as neuroradiology (focused on the nervous system), musculoskeletal radiology (focused on bones and joints), and interventional radiology (which involves using imaging guidance for minimally invasive procedures). Radiologists may choose to specialize in one of these areas.

Staying Current with Technology: Radiologists must keep up-to-date with the latest advancements in imaging technology and techniques. This includes staying informed about new equipment, software, and imaging protocols.

Ethical Considerations: Radiologists must uphold ethical standards in patient care, including issues related to patient privacy, informed consent, and maintaining the confidentiality of medical information.

Quality Assurance: Radiologists are responsible for ensuring the quality of the images they interpret. This includes working with radiologic technologists to optimize image quality and reporting any technical issues that may affect the accuracy of diagnoses.

Teaching and Research: Many radiologists are involved in teaching medical students, residents, and fellows. They may also engage in research to advance the field of radiology and improve imaging techniques.

Continuous Learning and Certification: Radiologists are required to participate in continuing medical education to stay current with advances in their field. They also need to maintain board certification through periodic examinations.

Radiologists play a critical role in modern medicine by providing essential information for diagnosing and treating a wide range of medical conditions. Their expertise in medical imaging is vital for patient care and the overall functioning of the healthcare system.


`,
    },
    {
      articleImg: require("../images/surgeon.jpg"),
      title: `A surgeon is a doctor who specializes in evaluating and treating conditions 
      that may require surgery, or physically changing the human body. Surgeries can be
       done to diagnose or treat disease or injury. In the operating room, surgeons lead a 
       team of other doctors and nurses to make sure that a procedure goes smoothly.`,
      author: "Dr Babajide Fashola",
      authorImg: require("../images/DrBabajideFashola.jpg"),
      timeRead: "12mins",
      status: "trending",
      read: false,
      timePosted: "Posted Now",
      bookMarked: false,
      id: 3,
      content: `A surgeon is a medical doctor who specializes in performing surgical procedures to treat injuries, diseases, and various medical conditions. Surgeons play a critical role in healthcare by providing both elective and emergency surgical interventions. Their primary focus is on using surgical techniques to restore, repair, or remove damaged or diseased tissues in the human body.

Here are some key aspects of a surgeon's role:

Surgical Expertise: Surgeons are highly trained in surgical techniques and procedures. They possess advanced knowledge of anatomy, physiology, and pathology relevant to their area of specialization.

Preoperative Evaluation: Surgeons assess patients before surgery, conducting thorough examinations, reviewing medical histories, and ordering necessary tests to ensure they are medically fit for the procedure.

Surgical Planning: Surgeons develop comprehensive surgical plans, considering factors like the type of procedure, anesthesia, equipment, and postoperative care.

Intraoperative Care: Surgeons perform the actual surgical procedure, often assisted by a surgical team that includes nurses, anesthesiologists, and surgical technologists.

Precision and Dexterity: Surgeons require exceptional manual dexterity and hand-eye coordination to perform intricate surgical procedures with precision.

Decision-Making in the Operating Room: Surgeons must make critical decisions in real-time during surgery, adapting to unexpected findings or complications that may arise.

Postoperative Care: Surgeons oversee the immediate postoperative care of patients, ensuring they recover safely from the surgical procedure. This includes monitoring vital signs, managing pain, and addressing any immediate concerns.

Follow-Up and Recovery: Surgeons provide postoperative follow-up care, monitoring patients' progress and addressing any complications or concerns that may arise during the recovery period.

Collaboration with Healthcare Teams: Surgeons work closely with other healthcare professionals, including anesthesiologists, radiologists, nurses, and specialists, to ensure comprehensive patient care.

Continuing Medical Education: Surgeons engage in ongoing education to stay updated on the latest advancements in surgical techniques, technologies, and best practices.

Ethical Considerations: Surgeons must uphold high ethical standards in patient care, ensuring informed consent, privacy, and confidentiality are maintained.

Emergency and Trauma Surgery: Some surgeons specialize in emergency or trauma surgery, where immediate intervention is required to save lives.

It's important to note that surgeons often have specialized areas of practice, such as cardiovascular surgery, orthopedic surgery, neurosurgery, and more. They work in a variety of settings, including hospitals, surgical centers, and clinics.

Surgeons play a critical role in healthcare, performing a wide range of procedures that contribute to the overall health and well-being of patients. Their expertise and skills are essential in both planned surgeries and emergency interventions.
`,
    },
    {
      articleImg: require("../images/neurologist.jpg"),
      title: `A neurologist is a medical doctor who specializes in treating diseases of
       the brain and nervous system1`,
      author: "Dr.Richard William",
      authorImg: require("../images/Dr.Richard William.jpg"),
      timeRead: "16mins",
      status: "trending",
      read: false,
      timePosted: "Posted Now",
      bookMarked: true,
      id: 4,
      content: `A neurologist is a medical doctor who specializes in the diagnosis and treatment of disorders related to the nervous system. This includes the brain, spinal cord, peripheral nerves, and muscles. Neurologists play a crucial role in evaluating and managing a wide range of neurological conditions, from common issues like headaches and epilepsy to more complex conditions such as multiple sclerosis and neurodegenerative diseases like Alzheimer's and Parkinson's.

Here are some key aspects of a neurologist's role:

Medical Expertise: Neurologists are highly trained medical doctors with specialized knowledge of the nervous system and its functions.

Diagnostic Evaluation: They use a combination of clinical assessment, specialized tests, and imaging studies (like MRI or CT scans) to diagnose neurological conditions.

Treatment Planning: Neurologists develop personalized treatment plans for patients based on their specific neurological condition. This may include medication management, physical therapy, or referral to other specialists.

Management of Chronic Conditions: Neurologists often treat chronic conditions that require long-term care, such as epilepsy, multiple sclerosis, or chronic migraines.

Neurological Disorders: They address a wide range of neurological disorders, including but not limited to epilepsy, stroke, dementia, movement disorders (like Parkinson's disease), neuropathies, and neuromuscular disorders.

Collaboration with Other Specialists: Neurologists often collaborate with other healthcare professionals, including neurosurgeons, neuropsychologists, physical therapists, and occupational therapists, to provide comprehensive care.

Stroke Management: Neurologists are key members of stroke care teams, involved in the acute management of stroke patients and long-term stroke prevention strategies.

Research and Innovation: Many neurologists engage in research to advance the understanding of neurological conditions and to develop new treatment options.

Patient Education: They educate patients and their families about their condition, treatment options, and lifestyle modifications to improve overall well-being.

Emergency Care: In some cases, neurologists may provide emergency care for acute neurological conditions, especially in hospital settings.

Ethical Considerations: Neurologists must uphold ethical standards in patient care, ensuring informed consent, privacy, and confidentiality are maintained.

Continuing Medical Education: They engage in ongoing education to stay updated on the latest advancements in neurology, including new treatment options and technologies.

Neurologists play a vital role in the healthcare system, providing expert care for patients with a wide range of neurological conditions. Their expertise is critical in managing conditions that can significantly impact a person's quality of life and overall well-being.`,
    },
    {
      articleImg: require("../images/nutritionanddiet.jpg"),
      title: `Nutrition and Diets for patients living with hydrocephalus and spinal cord tumor`,
      author: "Dr. Mira Raynah",
      authorImg: require("../images/Dr. Mira Raynah.jpg"),
      timeRead: "13mins",
      status: "related",
      read: true,
      timePosted: "13mins ago",
      bookMarked: true,
      id: 5,
      content: `Managing the nutrition of patients living with hydrocephalus and spinal cord tumors is essential for their overall health and well-being. It's important to consult with a healthcare professional, such as a registered dietitian, who can provide personalized advice based on the individual's specific needs and medical condition. That being said, here are some general guidelines to consider:
1. Balanced Diet:
Focus on a balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. This helps provide essential nutrients for overall health.
2. Adequate Protein Intake:
Protein is crucial for tissue repair and immune function. Include lean meats, poultry, fish, eggs, dairy products, legumes, and plant-based protein sources.
3. Adequate Calcium and Vitamin D:
These nutrients are important for bone health, especially if the patient has limited mobility. Include dairy products, fortified plant-based milks, leafy greens, and exposure to sunlight.
4. Hydration:
Ensure the patient stays well-hydrated, as dehydration can worsen symptoms. Encourage regular intake of water and fluids.
5. Fiber-Rich Foods:
Fiber helps with regular bowel movements, which can be important for those with spinal cord tumors. Include whole grains, fruits, vegetables, and legumes.
6. Omega-3 Fatty Acids:
Include sources of omega-3 fatty acids like fatty fish (salmon, mackerel), flaxseeds, chia seeds, and walnuts. These can help reduce inflammation.
7. Limit Added Sugars and Processed Foods:
Minimize the consumption of sugary snacks, sugary beverages, and highly processed foods. These can contribute to inflammation and overall poor health.
8. Soft Diet (if needed):
Depending on the individual's condition, they may benefit from a soft or modified texture diet. This can make it easier to swallow and digest food.
9. Consider Nutritional Supplements:
In some cases, supplements may be recommended to meet specific nutrient needs. This should be done under the guidance of a healthcare professional.
10. Monitor Weight:
Regularly monitor weight to ensure the patient is maintaining a healthy body weight. Significant weight changes may require adjustments to the diet plan.
11. Medication Considerations:
Be aware of any medication interactions with certain nutrients or foods. Discuss this with the healthcare team.`,
    },
    {
      articleImg: require("../images/InspiringPatients.jpg"),
      title: `Inspiring Patient’s stories Triumph and  Challenges in the Face of Hydrocephalus and Spinal Cord Tumor`,
      author: "Dr.Richard William",
      authorImg: require("../images/Dr.Richard William.jpg"),
      timeRead: "just now",
      status: "related",
      read: true,
      timePosted: "35mins ago",
      bookMarked: false,
      id: 6,
      content: `
      
Absolutely, here are two fictional but inspirational patient stories:

Patient Story 1: Defying the Odds - Beating Hydrocephalus

Sarah's Journey: Triumph Over Hydrocephalus

Sarah was born with hydrocephalus, a condition that presented immediate challenges. However, her parents were determined to give her the best chance at a fulfilling life. Through numerous surgeries and continuous medical care, Sarah's determination shone through.

Despite facing physical and cognitive hurdles, Sarah's resilience knew no bounds. With the unwavering support of her family and a team of dedicated healthcare professionals, she not only learned to walk, but also excelled academically.

Sarah's passion for advocacy blossomed as she grew older. She became a voice for individuals with hydrocephalus, raising awareness and funds for research. Her story is a testament to the power of determination and the impact of a strong support system.

Patient Story 2: Finding Strength Amidst Adversity - Conquering Spinal Cord Tumor

David's Odyssey: Overcoming a Spinal Cord Tumor

David's life took an unexpected turn when he was diagnosed with a spinal cord tumor. The news was daunting, but David refused to let it define him. With the guidance of his medical team, he embarked on a challenging treatment journey.

The road was marked with surgery, radiation therapy, and intense rehabilitation. David faced each day with unyielding determination, motivated by his desire to regain mobility and independence. Through countless hours of physical therapy, he learned to adapt and thrive.

David's story is a testament to the human spirit's capacity for resilience. He not only regained his ability to walk but also found newfound purpose in helping others facing similar challenges. Today, he volunteers as a mentor, providing support and encouragement to those navigating the path to recovery.

These stories highlight the incredible strength, resilience, and determination of individuals facing hydrocephalus and spinal cord tumors. They serve as beacons of hope and inspiration for others who may be on similar journeys.
`,
    },
    {
      articleImg: require("../images/young-family-with-their-sons-home-having-fun.jpg"),
      title: `Family and Caregiver support: Strategies for Providing Assistance and Maintaining Wellbeing`,
      author: "DrBabajide Fashola",
      authorImg: require("../images/DrBabajideFashola.jpg"),
      timeRead: "15 min ago",
      status: "related",
      read: true,
      timePosted: "20mins ago",
      bookMarked: false,
      id: 7,
      content: `Supporting a family member or loved one facing challenges like hydrocephalus or spinal cord tumors can be both rewarding and demanding. Here are some strategies for providing assistance while also maintaining your own wellbeing:

Open Communication: Maintain open and honest communication with the individual you're caring for. Listen to their needs and concerns, and share your own feelings and limitations as well.

Educate Yourself: Learn as much as you can about the specific condition and treatment options. This knowledge will empower you to make informed decisions and better support your loved one.

Create a Support Network: Connect with support groups, online forums, or local organizations focused on the specific condition. These communities can provide valuable information, resources, and emotional support.

Respect Independence: Encourage independence when possible. Allow the individual to take charge of tasks they're capable of, and offer assistance only when needed.

Establish Routines: Consistency can provide a sense of stability for both you and your loved one. Establishing routines can help manage daily activities and reduce stress.

Delegate Tasks: Don't be afraid to ask for help from other family members, friends, or professional caregivers. Delegate tasks to prevent burnout and ensure the best care possible.

Self-Care is Vital: Take time for yourself. Engage in activities that you enjoy, practice relaxation techniques, and prioritize your physical and mental health.

Set Realistic Expectations: Recognize your own limitations and set realistic expectations. It's okay to ask for help, seek respite care, or take breaks when needed.

Advocate for Their Needs: Be an advocate for your loved one in healthcare settings. Ensure they receive the best possible care, and don't hesitate to seek second opinions if necessary.

Seek Professional Guidance: Consult with healthcare professionals, therapists, or counselors who specialize in the specific condition. They can provide valuable advice and coping strategies.

Be Mindful of Emotional Wellbeing: Both you and your loved one may experience a range of emotions. Acknowledge and validate these feelings, and consider seeking professional support if needed.

Celebrate Small Achievements: Acknowledge and celebrate even the smallest milestones and achievements. This can boost morale and provide a sense of accomplishment.

Remember, being a caregiver is a significant responsibility, and it's important to take care of yourself as well. By implementing these strategies, you can provide the best possible support for your loved one while also maintaining your own wellbeing.





Regenerate
`,
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
      Calories: 800,
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
  const [countries, setCountries] = useState([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",

    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",

    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d’Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",

    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",

    "Fiji",
    "Finland",
    "France",

    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",

    "Haiti",
    "Honduras",
    "Hungary",

    "Iceland",
    "India(IND)",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",

    "Jamaica",
    "Japan",
    "Jordan",

    "Kazakhstan",
    "Kenya",
    "Kiribati",
    " North Korea",
    " South Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",

    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",

    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",

    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",

    "Oman",

    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",

    "Qatar",

    "Romania",
    "Russia",
    "Rwanda",

    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Sudan, South",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",

    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",

    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States Of America (USA)",
    "Uruguay",
    "Uzbekistan",

    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",

    "Yemen",

    "Zambia",
    "Zimbabwe",
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
        setCountries: setCountries,
        countries: countries,
      }}
    >
      <App />
    </mockApi.Provider>
  );
};

export default MockApi;
