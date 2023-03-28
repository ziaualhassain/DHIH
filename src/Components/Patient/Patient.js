import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { toast } from "react-toastify";
import "./Patient.css";

function PatientComponent() {

  const patientAddress = "0x12345678901234......567890"; //Address of the patient

  const authorizedAddress = patientAddress; //making only the patient can access some key features such as toggling recent approvals

  const recentApprovals = [
    "0x123456.......890abcdef12345678",
    "0xabcdef........99567890abcdef12",
    "0x7890ab........kef1234567890abcd",
    "0x12345n........56890abcdef123458",
    "0x123456.......890abcdef12345678",
    "0xabcdef........99567890abcdef12",
    "0x7890ab........kef1234567890abcd",
    "0x12345n........56890abcdef1234578",
  ];

  const timelineData = [
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    },
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    },
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    },
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    },
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    },
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    },
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    },
    
  ];

  //To enable that only the authorised users can access these buttons we need to  check the patient is acutally the owner of th
  const [showAllData, setShowAllData] = useState(false); //to rescrit the access of timeline
  const toggleShowAllData = () => {
    setShowAllData(!showAllData);
  };


  const [showRecentApprovals, setShowRecentApprovals] = useState(false); // to restrcit the access of recent approvals
  const toggleShowRecentApprovals = () => {
    if (patientAddress === authorizedAddress) {
      setShowRecentApprovals(!showRecentApprovals);
    }
    else{
      toast(`you are not authorised to access it only ${patientAddress} has the previlige`);
    }
  };


  return (
    <div className="Patient-body-container">
      <div className="patient-container">

        {/* Timeline of the patient medical history */}
        <div className="timeline-container">
          <div className="timeline-header"> Timeline of Health Activities </div>
          <div className="timeline">


            {/* Button to toggle showing authorized content */}
             <div className="timeline-toggle-button">
                <button onClick={toggleShowAllData}>
                {showAllData ? "Hide TimeLine" : "Show TimeLine"}
            </button>
              </div> 


            {timelineData.map((event, index) => (
              <div key={index} className="timeline-event">

                 {showAllData || event.showOnlyToPatient ? ( 

                  <div className="timeline-event">
                    <div className="timeline-event-date">{event.date}</div>
                    <div className="timeline-event-details">
                      <div className="timeline-event-title">
                        <b>{event.title}</b>
                      </div>
                      <div className="timeline-event-description">
                        {event.description}
                      </div>
                    </div>
                    {index !== timelineData.length - 1 && (
                      <hr className="timeline-event-separator" />
                    )}
                  </div>

                 ) : null} 

              </div>
            ))}
          </div>
        </div>


        {/* Profile of the patient */}
        <div className="profile-container">
          <div className="userdetails">
            <div className="address-text">{patientAddress}
              <div className="profile-icon">
                <FontAwesomeIcon icon={faUserCircle} size="5x" />
              </div>
               {/* Toggle for recent approvals */}
          <div className="toggle-button">
            <button onClick={toggleShowRecentApprovals}>
              {showRecentApprovals ? "Hide Recent Approvals" : "Show Recent Approvals"}
            </button>
          </div>

            {showRecentApprovals && (
            <div className="recent-approvals">
              <p>Recent Approvals:</p>
              <ul className="approved_addresses">
                {recentApprovals.map((address, index) => (
                  <li key={index}>{address}</li>
                ))}
              </ul>
            </div>
          )}
            </div>
          </div>       
        </div>
      </div>
    </div>
  );
}

export default PatientComponent;
