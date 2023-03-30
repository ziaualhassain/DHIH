import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./Doctor.css";
import PatientComponent from "../Patient/Patient";

const doctorsList = [
  {  name: "Dr. Varun", regNumber: "1234", regYear: "2020", smc: "Andhra Pradesh", ethAddress: "0x1234567890", isAccepted: null },
  {  name: "Dr. Bali", regNumber: "5678", regYear: "2019", smc: "Telangana", ethAddress: "0x0987654321", isAccepted: null },
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
  
  const navigate = useNavigate();

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

const showPopup = (type, address, callback) => {
  // Show popup with request to patient with address
  const message = `Doctor wants to ${type} your data. Do you accept?`;
  if (window.confirm(message)) {
    toast.success(`Request accepted by ${address}`);
    callback();
  } else {
    toast.error(`Request denied by ${address}`);
  }
};

// Code to handle reading patient data
const handleReadPermission = () => {
  const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Regular expression to validate Ethereum addresses
  const nftAddressRegex = /^0x[0-9a-fA-F]{64}$/; // Regular expression to validate NFT addresses
  if (!addressRegex.test(patientAddress) && !nftAddressRegex.test(patientAddress)) 
  {
    toast.error("Invalid address format");
    return;
  }
  else{
    //Handle for smartcontract read request
    console.log('read button clicked');
    // Make read request to patient with patientAddress
    // Show popup and wait for response from patient
    // If response is accepted, navigate to patient page
    showPopup("read", patientAddress, navigateToPatientPage);
  }
};


//code to navigate to the patient address mentioned in the inbox
const navigateToPatientPage = () => {
    //navigate(`/Patient/${patientAddress}`);
    console.log("Navigation Function");
    navigate("/patient"); //for local verification i'm using this normal redirect through navigation
  };

const navigateToDataUpdationPage = () => {
   console.log("Data updation called so it should be in the doctor page only");
   navigate("/doctor");
}


  // Code to handle writing patient data
  const handleWritePermission = () => {
    const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Regular expression to validate Ethereum addresses
    const nftAddressRegex = /^0x[0-9a-fA-F]{64}$/; // Regular expression to validate NFT addresses
    if (!addressRegex.test(patientAddress) && !nftAddressRegex.test(patientAddress)) 
    {
      toast.error("Invalid address format");
       return;
    }
  else{
    //Handle for smartcontract updation
    console.log('write button button clicked');
    showPopup("write", patientAddress, navigateToDataUpdationPage);
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
                {/* <button onClick={handleReadPermission} className="read-button"> Read Request </button> */}
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

