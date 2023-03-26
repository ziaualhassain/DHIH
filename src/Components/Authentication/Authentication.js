import React, { useState } from 'react';
import './Authentication.css';
import { useNavigate } from 'react-router-dom';
import DoctorComponent from '../Doctor/Doctor';
import PatientComponent from '../Patient/Patient';

function validateAadharId(aadharId) {
  const aadharRegex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;

  return aadharRegex.test(aadharId);
}

function Authentication() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [isDoctor, setIsDoctor] = useState(false);
  const [mintingStatus, setMintingStatus] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setShowLoginForm((prevState) => !prevState);
    console.log('Toggled');
  };

  // PATIENT FORM SUBMISSION & STORED THE INPUT DATA IN VARIABLES
  const handlePatientFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const aadharId = event.target.elements.aadharId.value;
    if (username && aadharId && validateAadharId(aadharId)) {
      console.log('Username:', username);
      console.log('Aadhar ID:', aadharId);
      navigate('/patient');
      setMintingStatus('Minting Successful!');
    } else {
      setMintingStatus('Please enter a valid Aadhar ID or Fill all the fields');
      alert('All fields needs to be perferct')
    }
  };

  // DOCTOR FORM SUBMISSION & STORED THE INPUT DATA IN VARIABLES
  const handleDoctorFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const registrationNumber = event.target.elements.registrationNumber.value;
    const registrationYear = event.target.elements.registrationYear.value;
    const smc = event.target.elements.smc.value;
    if (name && registrationNumber && registrationYear && smc) {
      console.log('Name:', name);
      console.log('Registration Number:', registrationNumber);
      console.log('Registration Year:', registrationYear);
      console.log('SMC:', smc);
      setMintingStatus('Minting Successful! Wait for approval.');
      setIsDoctor(true);
      alert('Minitng Succesful Wait for Approval');
    } else {
      setMintingStatus('Fill all the fields');
      alert('All fields are mandatory');
    }
  };

  // Display minting status on console when it is updated
  console.log('Minting Status:', mintingStatus);

  return (
    <>
      {isDoctor ? (
        <DoctorComponent />
      ) : (
        <div className="auth-container">
          <div className="toggle-btn-container">
            <button id="toggle-btn" onClick={toggleForm}>
              {showLoginForm ? '! User Registration Form' : '! Doctor Registration Form'}
            </button>
            {showLoginForm ? (
              <form onSubmit={handlePatientFormSubmit}>
                <label>
                  User Name:
                  <input type="text" name="username" placeholder="Enter a username" />
                </label>
                <label>
                  Enter Unique ID:
                  <input type="text" name="aadharId" placeholder="37XX 94XX 12XX" />
                </label>
                <button type="submit">User Mint!</button>
              </form>
            ) : (
              <form onSubmit={handleDoctorFormSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" placeholder="Enter Your Name" />
                </label>
                <label>
                  Registration Number:
                  <input type="number" name="registrationNumber" placeholder="Enter Your Reg Number" />
                </label>
                <label>
                  Registration Year:
                  <input type="date" name="registrationYear" placeholder="Enter Registaration Year"  max={new Date().toISOString().split('T')[0]} />
                </label>
                <label>
                  State Medical Council:
                  <select name="smc" id="smc-select">
                    <option id="smc-dropdown">-- Select Your State Medical Council From Here--</option>
                        <option>Andhra Pradesh Medical Council</option>
                        <option>Arunachal Pradesh Medical Council</option>
                        <option>Assam Medical Council</option>
                    {/* <!--<option value="27">Bareilly Medical Council</option>--> */}
                          <option>Bhopal Medical Council</option>
                          <option>Bihar Medical Council</option>
                          <option>Bombay Medical Council</option>
                          <option>Chandigarh Medical Council</option>
                          <option>Chattisgarh Medical Council</option>
                          <option>Delhi Medical Council</option>
                    {/* <!--<option value="31">Dental Council of India</option>
                            <option value="39">General Medical Council</option>--> */}
                          <option>Goa Medical Council</option>
                          <option>Gujarat Medical Council</option>
                          <option>Haryana Medical Councils</option>
                          <option>Himachal Pradesh Medical Council</option>
                          <option>Hyderabad Medical Council</option>
                          <option>Jammu & Kashmir Medical Council</option>
                          <option>Jharkhand Medical Council</option>
                          <option>Karnataka Medical Council</option>
                    {/* <!--<option value="14">Kerala Medical Council</option>-->> */}
                          <option>Madhya Pradesh Medical Council</option>
                          <option>Madras Medical Council</option>
                          <option>Mahakoshal Medical Council</option>
                          <option>Maharashtra Medical Council</option>
                          <option>Manipur Medical Council</option>
                          <option>Medical Council of India</option>
                          <option>Medical Council of Tanganyika</option>
                          <option>Mizoram Medical Council</option>
                          <option>Mysore Medical Council</option>
                          <option>Nagaland Medical Council</option>
                          <option>Orissa Council of Medical Registration</option>
                          <option>Pondicherry Medical Council</option>
                          <option>Punjab Medical Council</option>
                          <option>Rajasthan Medical Council</option>
                          <option>Sikkim Medical Council</option>
                          <option>Tamil Nadu Medical Council</option>
                          <option>Telangana State Medical Council</option>
                      {/* <option value="33">Travancore Cochin Medical Council</option> */}
                          <option>Travancore Cochin Medical Council, Trivandrum</option>
                          <option>Tripura State Medical Council </option>
                          <option>Uttar Pradesh Medical Council</option>
                          <option>Uttarakhand Medical Council</option>
                          <option>Vidharba Medical Council</option>
                          <option>West Bengal Medical Council</option>
                    </select>
                </label>
                <button type="submit">Doctor Mint!</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Authentication;
