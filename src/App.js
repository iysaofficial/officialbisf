import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// component
import Landing from './pages/Landing';

// pages
import Contact from './pages/Contact';
import Faq from './pages/Faq';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Faq' element={<Faq />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
