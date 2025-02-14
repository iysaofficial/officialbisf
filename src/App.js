import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// component
import Landing from './pages/Landing';

// pages
import Contact from './pages/Contact';
import Faq from './pages/Faq';

import HomeRegist from './pages/registration/homeregist';
import HomeIndo from './pages/registration/homeindo';
import HomeInter from './pages/registration/homeinter';
import IndonesiaOffline from './pages/registration/indo-offline';
import IndonesiaOnline from './pages/registration/indo-online';
import InternationalOnline from './pages/registration/inter-online';
import InternationalOffline from './pages/registration/inter-offline';
import Thankyouinter from './pages/registration/thankyouinter';
import Thankyouindo from './pages/registration/thankyouindo';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/Homeregist' element={<HomeRegist />} />
          <Route path='/homeindo' element={<HomeIndo />} />
          <Route path='/homeinter' element={<HomeInter />} />
          <Route path='/indoonline' element={<IndonesiaOnline />} />
          <Route path='/indooffline' element={<IndonesiaOffline />} />
          <Route path='/interonline' element={<InternationalOnline />} />
          <Route path='/interoffline' element={<InternationalOffline />} />
          <Route path='/thankyouinter' element={<Thankyouinter />} />
          <Route path='/thankyouindo' element={<Thankyouindo />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
