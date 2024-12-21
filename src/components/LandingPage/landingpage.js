import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Dungeons & Dragons: Messafrueth</h1>
        <p>Welcome to Messafrueth!</p>
      </header>
      <div className="button-container">
        <button className="nav-button" onClick={() => navigate("/race-lists")}>
          Race Lists
        </button>
        <button className="nav-button" onClick={() => navigate("/magic-items")}>
          Magic Items
        </button>
        <button className="nav-button" onClick={() => navigate("/maps")}>
          Maps
        </button>
        <button className="nav-button" onClick={() => navigate("/lore")}>
          Lore
        </button>
        <button className="nav-button" onClick={() => navigate("/characters")}>
          Characters
        </button>
        <button className="nav-button" onClick={() => navigate("/timeline")}>
          Timeline
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
