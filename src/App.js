import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component
import Landing from "./pages/Landing";

// pages
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

import HomeRegist from "./pages/registration/homeregist";
import HomeIndo from "./pages/registration/homeindo";
import HomeInter from "./pages/registration/homeinter";
import IndonesiaOffline from "./pages/registration/indo-offline";
import IndonesiaOnline from "./pages/registration/indo-online";
import InternationalOnline from "./pages/registration/inter-online";
import InternationalOffline from "./pages/registration/inter-offline";
import Thankyouinter from "./pages/registration/thankyouinter";
import Thankyouindo from "./pages/registration/thankyouindo";
import CertSupervisor2026 from "./pages/registration/certsupervisor2026";


import Listofwinner from "./pages/Listofwinner";
import Listwinner from "./pages/low/Listwinner";
import Lowkategori2025 from "./pages/low/2025/Lowkategori2025";
import Lowoff2025 from "./pages/low/2025/Lowoff2025";
import Lowonl2025 from "./pages/low/2025/Lowonl2025";
import Lowkategori2026 from "./pages/low/2026/Lowkategori2026";
import Lowoff2026 from "./pages/low/2026/Lowoff2026";
import Lowonl2026 from "./pages/low/2026/Lowonl2026";

import Curation from "./pages/curation/Curation";

import NewsAlllist from "./pages/news/NewsAlllist";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Homeregist" element={<HomeRegist />} />
          <Route path="/homeindo" element={<HomeIndo />} />
          <Route path="/homeinter" element={<HomeInter />} />
          <Route path="/indoonline" element={<IndonesiaOnline />} />
          <Route path="/indooffline" element={<IndonesiaOffline />} />
          <Route path="/interonline" element={<InternationalOnline />} />
          <Route path="/interoffline" element={<InternationalOffline />} />
          <Route path="/thankyouinter" element={<Thankyouinter />} />
          <Route path="/thankyouindo" element={<Thankyouindo />} />
          <Route path="/certsupervisor2026" element={<CertSupervisor2026 />} />

          <Route path="/listofwinner" element={<Listofwinner />} />
          <Route path="/listwinner" element={<Listwinner />} />
          <Route path="/lowkategori2025" element={<Lowkategori2025 />} />
          <Route path="/lowoff2025" element={<Lowoff2025 />} />
          <Route path="/lowonl2025" element={<Lowonl2025 />} />
          <Route path="/lowkategori2026" element={<Lowkategori2026 />} />
          <Route path="/lowoff2026" element={<Lowoff2026 />} />
          <Route path="/lowonl2026" element={<Lowonl2026 />} />

          <Route path="/Curation" element={<Curation />} />
          
          <Route path="/NewsAlllist" element={<NewsAlllist />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
