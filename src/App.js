
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'


import About from './pages/About';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Advanceactivities from "./components/Advance Activities/Advanceactivities";
import SchoolCamps  from "./components/SchoolCamps/SchoolCamps";
import Outdoorcamp from './components/Outdoorcamp/outdoor'
import SafetySection from "./components/Safetypage/SafetySection";
import Registerform from "./pages/Registerform";
import CheckFrom from './pages/CheckForm'
import Nanitalpage from "./components/Nanital/Nanitalpage";
import Manalipage from "./components/Manali/Manalipage";
import Activities from "./components/Activities/Activities";
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
            <Route path="/activities/rising" element={<Advanceactivities />} />
          <Route path="/safety" element={<SafetySection />} />
          <Route path="/register" element={<Registerform />} />
          <Route path="/checkform" element={<CheckFrom />} />
          <Route path="/nanital" element={<Nanitalpage />} />
          <Route path="/manali" element={<Manalipage />} />
          <Route path="/activities/adventureactivities" element={<Activities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
