import React from "react";
import { useNavigate } from "react-router-dom";
import "./race_list.css";

const RaceList = () => {
  const navigate = useNavigate();

  // Function to navigate to the respective race page
  const goToRace = (racePage) => {
    navigate(racePage);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Race List</h1>
        <p>Click on any race to learn more about them.</p>
      </header>
      <div className="container">
        {/* Primordial Races */}
        <div className="race-category">
          <h2>Primordial Races</h2>
          <ul>
            <li onClick={() => goToRace("/dragons")}>Dragons</li>
            <li onClick={() => goToRace("/dragonkins")}>Dragonkins</li>
            <li onClick={() => goToRace("/primordial-elves")}>Primordial Elves</li>
            <li onClick={() => goToRace("/nephilims")}>Nephilims</li>
          </ul>
        </div>

        {/* Normal Races */}
        <div className="race-category">
          <h2>Normal Races</h2>
          <ul>
            <li onClick={() => goToRace("/humans")}>Humans</li>
            <li onClick={() => goToRace("/aeternans")}>Aeternans</li>
            <li onClick={() => goToRace("/high-elves")}>High Elves</li>
            <li onClick={() => goToRace("/wood-elves")}>Wood Elves</li>
            <li onClick={() => goToRace("/dark-elves")}>Dark Elves</li>
            <li onClick={() => goToRace("/moon-elves")}>Moon Elves</li>
            <li onClick={() => goToRace("/dwarves")}>Dwarves</li>
            <li onClick={() => goToRace("/tigris")}>Tigris</li>
            <li onClick={() => goToRace("/onis")}>Onis</li>
            <li onClick={() => goToRace("/doppels")}>Doppels</li>
            <li onClick={() => goToRace("/felishans")}>Felishans</li>
            <li onClick={() => goToRace("/inarian")}>Inarians</li>
            <li onClick={() => goToRace("/argallians")}>Argallians</li>
          </ul>
        </div>

        {/* Other Races */}
        <div className="race-category">
          <h2>Other Races</h2>
          <ul>
            <li onClick={() => goToRace("/celestials")}>Celestials</li>
            <li onClick={() => goToRace("/fells")}>Fells</li>
            <li onClick={() => goToRace("/vampires")}>Vampires</li>
            <li onClick={() => goToRace("/demons")}>Demons</li>
            <li onClick={() => goToRace("/devils")}>Devils</li>
            <li onClick={() => goToRace("/fey")}>Fey</li>
            <li onClick={() => goToRace("/fiends")}>Fiends</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RaceList;
