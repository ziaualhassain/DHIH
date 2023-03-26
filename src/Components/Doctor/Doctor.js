import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./Doctor.css";

function DoctorComponent() {

  const [patientAddress, setPatientAddress] = useState("");
  const [patientUpdateInfo, setPatientUpdateInfo] = useState("");
  const [patientTitleUpdateInfo, setPatientTitleUpdateInfo] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const Doctor_Address = "0x12345678901234......567890"; //Address of the doctor need to be retrive from the doctor unique id

  

  //Case to handle the entered address has to be a ethereum or an NFT 
  const handleAddressInputChange = (event) => {
    const address = event.target.value;
    const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Regular expression to validate Ethereum addresses
    const nftAddressRegex = /^0x[0-9a-fA-F]{64}$/; // Regular expression to validate NFT addresses
    
    if (addressRegex.test(address) || nftAddressRegex.test(address)) {
      setPatientAddress(address);
      console.log(`Patient address entered: ${address}`);
    } else {
     alert('address are senstive so use copy and paste');
    }
  };
  
  //Checking the input update info and storing it 
  const handleUpdateInputChange = (event) => {
    const updateInfo = event.target.value;
    setPatientUpdateInfo(updateInfo);
    console.log(`Patient update info entered: ${updateInfo}`);
  };



  //Checking the title for the timeline and storing it
  const handleTittleUpdateInputChange = (event) => {
    const title = event.target.value;
    setPatientTitleUpdateInfo(title);
    console.log(`title is: ${title}`);
};



//checking the added files and storing them
const handleFileSelect = (event) => {
  const files = event.target.files;
  setSelectedFiles(Array.from(files));
  console.log(`Files selected: ${files.length}`);
  console.log(`File names: ${Array.from(files).map(file => file.name)}`);
};



// Code to handle reading patient data
  const handleReadPermission = () => {
    alert('read button clicked');
  };

  // Code to handle writing patient data
  const handleWritePermission = () => {
    alert('write button clicked');
  };

  //FUNCTION TO HANDLE THE UPDATION OF THE PATIENT DATA AND THE DETAILS OF THE UPDATION
  const handleUpdatePatientData = () => {
    console.log("The details of the updations are :");
    console.log(`Title: ${patientTitleUpdateInfo}`);
    console.log(`Description: ${patientUpdateInfo}`);
    console.log(`Files: ${selectedFiles.map(file => file.name).join(", ")}`);
    console.log(`Patient Address: ${patientAddress}`);
  };

  //LEFT SIDE CONTENT I.E APPROVAL

  return (
    <div className="doctor-body-container">
      <div class="doctor-container">

        {/* Timeline of the doctors approvals */}
        <div className="approval-container">
          <div class="approval-header"> Pending Requests Need Action! </div>
          <div class="approval-timeline">
              <h1> Add Doctor addresses</h1>
              <h2> Address 1</h2>
              <h2> Address 2</h2>
          </div>
        </div>

        {/* Profile of the patient */}
        <div className="profile-container">
          <div className="userdetails">
          <div className="address-text">{Doctor_Address}
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUserCircle} size="5x" />
          </div>

          <div className="request_form">
              <p>Need Someone's details?</p>
              <input
                type="text" className="address-input"
                placeholder="Enter the address of the patient!"
                value={patientAddress}
                onChange={handleAddressInputChange}
              />
              <div className="button-container">
                <button onClick={handleReadPermission} className="read-button"> Read Request </button>
                <button onClick={handleWritePermission} className="write-button"> Write Request </button> <br></br>
                <input type="text" className="update-data-input-tittle"  placeholder="Add a breif tittle!" value={patientTitleUpdateInfo} onChange={handleTittleUpdateInputChange} />
                <input type="text" className="update-data-input" placeholder="Update with the details like medication etc..!" value={patientUpdateInfo} onChange={handleUpdateInputChange} />
              </div>
              <div className="file-upload-container">
                     <input className="input-class" type="file" id="file" multiple onChange={handleFileSelect} />
                     <label className="input-label" htmlFor="file"></label>
                     {selectedFiles.length > 0 && (
                        <div className="selected-files-container">
                             <h3>Selected files:</h3>
                                   <ul>
                                        {selectedFiles.map((file) => (
                                                <li key={file.name}>{file.name}</li>
                                          ))}
                                    </ul>
                          </div>
                       )}
               </div>
              <button className="update-patient-timeline" onClick={handleUpdatePatientData}>Update Data</button>
            </div>
            </div>
          </div>
          </div>       
        </div>
      </div>
  );
}

export default DoctorComponent;
