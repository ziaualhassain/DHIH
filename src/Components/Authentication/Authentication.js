import React, { useState } from 'react';
import './Authentication.css'; 

function Authentication() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(prevState => !prevState);
    console.log('Toggled');
  };

  const handlePatientFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const aadharId = event.target.elements.aadharId.value;
    console.log('Username:', username);
    console.log('Aadhar ID:', aadharId);
  };

  const handleDoctorFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const registrationNumber = event.target.elements.registrationNumber.value;
    const registrationYear = event.target.elements.registrationYear.value;
    const smc = event.target.elements.smc.value;
    console.log('Name:', name);
    console.log('Registration Number:', registrationNumber);
    console.log('Registration Year:', registrationYear);
    console.log('SMC:', smc);
  };

  return (
    <div className='auth-container'>
      <div className='toggle-btn-container'>
        <button id="toggle-btn" onClick={toggleForm}>
          {showLoginForm ? '! Patient Registration' : '! Doctor Registration'}
        </button>
        {showLoginForm ? (
          <form onSubmit={handlePatientFormSubmit}>
            <label>
              User Name:
              <input type="text" name="username" placeholder='Enter a username' />
            </label>
            <label>
              Enter Unique ID:
              <input type="text" name="aadharId" placeholder='Enter Aadhar Id'/>
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
              <input type="text" name="registrationNumber" placeholder="Enter Your Registration Number" />
            </label>
            <label>
              Registration Year:
              <input type="text" name="registrationYear" placeholder="Enter Registaration Year" />
            </label>
            <label>
              SMC:
              <input type="text" name="smc" placeholder="State Medical Council" />
            </label>
            <button type="submit">Doctor Mint!</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Authentication;
