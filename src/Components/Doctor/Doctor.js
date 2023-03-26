import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./Doctor.css";

const doctorsList = [
  {  name: "Dr. John Smith", regNumber: "1234", regYear: "2020", smc: "Andhra Pradesh", ethAddress: "0x1234567890", isAccepted: null },
  {  name: "Dr. Jane Doe", regNumber: "5678", regYear: "2019", smc: "Telangana", ethAddress: "0x0987654321", isAccepted: null },
  {  name: "Dr. Michael Johnson", regNumber: "9012",regYear: "2022", smc: "Arunachal Pradesh", ethAddress: "0x6789012345", isAccepted: null },
  {  name: "Dr. John Smith", regNumber: "1234", regYear: "2020", smc: "Andhra Pradesh", ethAddress: "0x1234567890", isAccepted: null },
  {  name: "Dr. Jane Doe", regNumber: "5678", regYear: "2019", smc: "Telangana", ethAddress: "0x0987654321", isAccepted: null },
  {  name: "Dr. Michael Johnson", regNumber: "9012",regYear: "2022", smc: "Arunachal Pradesh", ethAddress: "0x6789012345", isAccepted: null }
];

function DoctorComponent() {

  const [patientAddress, setPatientAddress] = useState("");
  const [patientUpdateInfo, setPatientUpdateInfo] = useState("");
  const [patientTitleUpdateInfo, setPatientTitleUpdateInfo] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const Doctor_Address = "0x12345678901234......567890"; //Address of the doctor need to be retrive from the doctor unique id
  

  const [doctors, setDoctors] = useState(doctorsList);

  const handleAccept = (index) => {
    const updatedDoctors = [...doctors];
    updatedDoctors[index].status = "Accepted";
    setDoctors(updatedDoctors);
    console.log(`Status of ${updatedDoctors[index].name}: Accepted`);
  };

  const handleReject = (index) => {
    const updatedDoctors = [...doctors];
    updatedDoctors[index].status = "Rejected";
    setDoctors(updatedDoctors);
    console.log(`Status of ${updatedDoctors[index].name}: Rejected`);
  };

//THE BELOW CODE IS ALL ABOUT THE PATIENT SECTION OF THE DOCTORS THAT IS RIGHT SIDE OF THE PAGE
  //Case to handle the entered address has to be a ethereum or an NFT 

  const handleAddressInputChange = (event) => {
    const patientAddress = event.target.value;
    setPatientAddress(patientAddress);
    console.log(`Patient Address is: ${patientAddress}`);
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
  const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Regular expression to validate Ethereum addresses
  const nftAddressRegex = /^0x[0-9a-fA-F]{64}$/; // Regular expression to validate NFT addresses
  if (!addressRegex.test(patientAddress) && !nftAddressRegex.test(patientAddress)) 
  {
    alert('Please enter a valid Ethereum or NFT address!');
    return;
  }
  else{
    //Handle for smartcontract read request
    alert('read button clicked');
  }
};


  // Code to handle writing patient data
  const handleWritePermission = () => {
    const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Regular expression to validate Ethereum addresses
    const nftAddressRegex = /^0x[0-9a-fA-F]{64}$/; // Regular expression to validate NFT addresses
    if (!addressRegex.test(patientAddress) && !nftAddressRegex.test(patientAddress)) 
    {
      alert('Please enter a valid Ethereum or NFT address!');
       return;
    }
  else{
    //Handle for smartcontract updation
    alert('write button button clicked');
  }
  };

  //FUNCTION TO HANDLE THE UPDATION OF THE PATIENT DATA AND THE DETAILS OF THE UPDATION
  const handleUpdatePatientData = () => {
    if (!patientTitleUpdateInfo || !patientUpdateInfo) 
    {
      alert("Title and description are required!");
      return;
    }
    console.log("The details of the updations are :");
    console.log(`Title: ${patientTitleUpdateInfo}`);
    console.log(`Description: ${patientUpdateInfo}`);
    console.log(`Files: ${selectedFiles.map(file => file.name).join(", ")}`);
    console.log(`Patient Address: ${patientAddress}`);
    alert('data updatation queued on blockchain');
  };

  //LEFT SIDE CONTENT I.E APPROVAL

  return (
    <div className="doctor-body-container">
      <div className="doctor-container">

        {/* Timeline of the doctors approvals */}
        <div className="approval-container">
          <div className="approval-header"> Pending Requests Need Action! </div>
          <div className="approval-timeline">
          <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <p>
              <strong>{doctor.name}</strong>
            </p>
            <p>Registration Number: {doctor.regNumber}</p>
            <p>Registration Year: {doctor.regYear}</p>
            <p>SMC: {doctor.smc}</p>
            <p>Ethereum Address: {doctor.ethAddress}</p>
            {doctor.status ? (
              <p>Status: {doctor.status}</p>
            ) : (
              <div>
                <button onClick={() => handleAccept(index)}>Accept</button>
                <button onClick={() => handleReject(index)}>Reject</button>
              </div>
            )}
          </li>
        ))}
      </ul>
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
