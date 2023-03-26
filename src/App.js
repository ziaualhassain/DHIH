import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomeComponent from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Authentication from './Components/Authentication/Authentication';
import PatientComponent from './Components/Patient/Patient';
import DoctorComponent from './Components/Doctor/Doctor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
       <ToastContainer /> {/*for showing popup on the doctoe page whether the request is sent or not */}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/doctor" element={<DoctorComponent />} />
        <Route path="/patient" element={<PatientComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
