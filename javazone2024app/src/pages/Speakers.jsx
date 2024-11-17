// Speakers.jsx er en funksjonell komponent som henter foredragsholdere fra en API og viser en liste over disse.

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSpeakers } from "../api/api";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    getSpeakers()
      .then(setSpeakers)
      .catch((error) => {
        console.error("Error fetching speakers:", error);
      });
  }, []);

  return (
    <div className="speakers-page">
      <h1>Speakers</h1>
      <ul>
        {speakers.map((speaker) => (
          <li key={speaker.id}>
            <Link to={`/speakers/${speaker.id}`}>{speaker.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Speakers;
