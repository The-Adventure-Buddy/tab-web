
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'


import About from './pages/About';
import Home from './pages/Home'
// import Login from './pages/login'
import Contact from './pages/Contact'
import Advanceactivities from "./components/Advance Activities/Advanceactivities";
import SchoolCamps  from "./components/SchoolCamps/SchoolCamps";
import Outdoorcamp from './components/Outdoorcamp/outdoor'
import SafetySection from "./components/Safetypage/SafetySection";
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/activities/schoolcamp" element={<SchoolCamps />} />
          <Route path="/activities/outdoorcamp" element={<Outdoorcamp />} />
            <Route path="/activities/adventureactivities" element={<Advanceactivities />} />
          <Route path="/safety" element={<SafetySection />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
