import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTalkById } from "../api/api";

const TalkDetails = () => {
  const { id } = useParams(); // Henter ID fra URL
  const [talk, setTalk] = useState(null);

  useEffect(() => {
    const fetchTalkDetails = async () => {
      try {
        const data = await getTalkById(id);
        setTalk(data);
      } catch (error) {
        console.error("Error fetching talk details:", error);
      }
    };

    fetchTalkDetails();
  }, [id]);

  if (!talk) {
    return <p>Loading talk details...</p>;
  }

  return (
    <div className="talk-details-page">
      <h1>{talk.title}</h1>
      <p>
        <strong>Time:</strong> {talk.time}
      </p>
      <p>
        <strong>Room:</strong> {talk.room?.name || "No room assigned"}
      </p>
      <h2>Speaker</h2>
      <p>
        <strong>Name:</strong> {talk.speaker?.name}
      </p>
      <p>{talk.speaker?.bio}</p>
    </div>
  );
};

export default TalkDetails;
