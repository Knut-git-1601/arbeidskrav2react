// Talks.jsx er en funksjonell komponent som henter foredrag fra en API og viser en liste over disse.

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTalks } from "../api/api";

const Talks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    getTalks()
      .then(setTalks)
      .catch((error) => console.error("Error fetching talks:", error));
  }, []);

  return (
    <div>
      <h1>Talks</h1>
      <ul>
        {talks.map((talk) => (
          <li key={talk.id}>
            <Link to={`/talks/${talk.id}`}>{talk.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Talks;
