import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./Patient.css";

function PatientComponent() {

  const patientAddress = "0x12345678901234......567890"; //Address of the patient

  const authorizedAddress = patientAddress; //making only the patient can access some key features such as toggling recent approvals

  const recentApprovals = [
    "0x123456.......890abcdef12345678",
    "0xabcdef........99567890abcdef12",
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
    {
      date: "January 2022",
      title: "Annual Physical Exam",
      description: "Routine checkup with primary care physician",
    }, 
  ];
  
  const [showDropdown, setShowDropdown] = useState(false); //state to manage the dropdown visibility
  const [selectedAddress, setSelectedAddress] = useState(""); //state to store the selected address

  //function to handle the click event of an address in the recent approvals list
  const handleAddressClick = (address) => {
    setShowDropdown(true); //show the dropdown menu
    setSelectedAddress(address); //store the selected address in state
  };

  //function to handle the click event of an option in the dropdown menu
  const handleOptionClick = (option) => {
    console.log(`Option selected: ${option}`); //replace with the logic to accept or reject the address
    setShowDropdown(false); //hide the dropdown menu
    setSelectedAddress(""); //clear the selected address from state
  };


  return (
    <div className="Patient-body-container">
      <div className="patient-container">

        {/* Timeline of the patient medical history */}
        <div className="timeline-container">
          <div className="timeline-header"> Timeline of Health Activities </div>
          <div className="timeline">
            {timelineData.map((event, index) => (
              <div key={index} className="timeline-event">
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
              <p>Recent Requests:</p>
              <ul className="approved_addresses">
                {recentApprovals.map((address, index) => (
                  <li
                    key={index}
                    onClick={() => handleAddressClick(address)} //call the handleAddressClick function when an address is clicked
                  >
                    {address}
                  </li>
                ))}
              </ul>
              {showDropdown && ( //display the dropdown menu only if showDropdown is true
                <div className="dropdown-menu">
                  <p>Permission Awaiting</p>
                  <ul>
                    <button className="accept-btn" onClick={() => handleOptionClick("Accept")}>Accept</button>
                    <button className="reject-btn"  onClick={() => handleOptionClick("Reject")}>Reject</button>
                  </ul>
                </div>
              )}
            </div>

            </div>
          </div>       
        </div>
      </div>
    </div>
  );
}

export default PatientComponent;
