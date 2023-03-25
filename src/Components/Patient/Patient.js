import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./Patient.css";

function PatientComponent() {

  const patientAddress = "0x12345678901234......567890"; //Address of the patient

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
      date: "November 2021",
      title: "Emergency Room Visit",
      description:
        "Admitted for chest pain; discharged after tests showed no major issues",
    },  

    {
        date: "Somemonth 2022",
        title: "Annual Physical Exam",
        description: "Routine checkup with primary care physician",
      },

      {
        date: "Somemonth 2021",
        title: "Emergency Room Visit",
        description:
          "Admitted for chest pain; discharged after tests showed no major issues",
      },   

      {
        date: "Somemonth 2022",
        title: "Annual Physical Exam",
        description: "Routine checkup with primary care physician",
      },

      {
        date: "Somemonth 2021",
        title: "Emergency Room Visit",
        description:
          "Admitted for chest pain; discharged after tests showed no major issues",
      }, 
      {
        date: "Somemonth 2022",
        title: "Annual Physical Exam",
        description: "Routine checkup with primary care physician",
      },

      {
        date: "Somemonth 2021",
        title: "Emergency Room Visit",
        description:
          "Admitted for chest pain; discharged after tests showed no major issues",
      }, 
  ];

  return (
    <div className="Patient-body-container">
      <div class="patient-container">

        {/* Timeline of the patient medical history */}
        <div className="timeline-container">
          <div class="timeline-header"> Timeline of Health Activites </div>
          <div class="timeline">
            {timelineData.map((event, index) => (
              <div key={index} className="timeline-event">
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

          <div className="recent-approvals">
              <p>Recent Approvals:</p>
              <ul className="approved_addresses">
                {recentApprovals.map((address, index) => (
                  <li key={index}>{address}</li>
                ))}
              </ul>
            </div>
          </div>
          </div>       
        </div>
      </div>
    </div>
  );
}

export default PatientComponent;
