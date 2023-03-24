import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomeComponent from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Authentication from './Components/Authentication/Authentication';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
