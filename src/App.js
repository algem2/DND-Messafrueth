import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingpage";
import RaceList from "./components/RaceLists/race_list"; // Replace with your RaceList component
import Nephilims from "./components/RaceLists/PrimordialRaces/Nephilims/nephilims";
import PrimordialElves from "./components/RaceLists/PrimordialRaces/Primordial Elves/primordialelves";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/race-lists" element={<RaceList />} />
        <Route path="/nephilims" element={<Nephilims />} />
        <Route path="/primordial-elves" element={<PrimordialElves />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
