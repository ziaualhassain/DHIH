import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomeComponent from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Authentication from './Components/Authentication/Authentication';
import PatientComponent from './Components/Patient/Patient';
import DoctorComponent from './Components/Doctor/Doctor';

function App() {
  return (
    <Router>
      <Navbar />
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
