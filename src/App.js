
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'


import About from './pages/About';
import Home from './pages/Home'
// import Login from './pages/login'
import Contact from './pages/Contact'
// import Advanceactivities from "./components/Advance Activities/Advanceactivities";


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            {/*<Route path="/activities/adventureactivities" element={<Advanceactivities />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
