import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout';
import NoSidebarLayout from './layouts/NoSidebarLayout';
import Home from './components/Home';
import Resume from './components/Resume';
import './styles/App.css';
import Navbar from './components/Navbar';
import Birla from './components/Birla';
import Dwave from './components/Dwave';
import Research from './components/Research'
import Music from './components/Studio/Music'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route with Sidebar */}
        <Route path="/" element={<NoSidebarLayout><Home /></NoSidebarLayout>} />
        <Route path="/resume" element={<SidebarLayout><Resume /></SidebarLayout>} />
        <Route path="/birla" element={<NoSidebarLayout><Birla /></NoSidebarLayout>} />
        <Route path="/dwave" element={<NoSidebarLayout><Dwave /></NoSidebarLayout>} />
        <Route path="/research" element={<NoSidebarLayout><Research /></NoSidebarLayout>} />
        <Route path="/music" element={<NoSidebarLayout><Music /></NoSidebarLayout>} />
        {/* Routes without Sidebar
        <Route path="/about" element={<NoSidebarLayout><About /></NoSidebarLayout>} />
        <Route path="/contact" element={<NoSidebarLayout><Contact /></NoSidebarLayout>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
