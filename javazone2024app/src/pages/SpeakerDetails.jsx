// SpeakerDetails viser detaljer om en foredragsholder basert på ID-en som er gitt i URL-en. Den henter foredragsholderen fra en API og viser navn, bio og en liste over foredragene foredragsholderen har holdt.

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpeakerById } from "../api/api";

const SpeakerDetails = () => {
  const { id } = useParams();
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    getSpeakerById(id)
      .then(setSpeaker)
      .catch((error) =>
        console.error("Error fetching speaker details:", error)
      );
  }, [id]);

  if (!speaker) return <p>Loading...</p>;

  return (
    <div>
      <h1>{speaker.name}</h1>
      <p>{speaker.bio}</p>
      <h2>Talks</h2>
      <ul>
        {speaker.talks.map((talk) => (
          <li key={talk.id}>{talk.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpeakerDetails;
