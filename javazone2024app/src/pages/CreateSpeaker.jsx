// CreateSpeaker.jsx er en funksjonell komponent som lar brukeren opprette en ny foredragsholder ved å fylle ut et skjema.

import React, { useState } from "react";
import { createSpeaker } from "../api/api";

const CreateSpeaker = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSpeaker = await createSpeaker({ name, bio });
      console.log("Speaker created:", newSpeaker);
      setName("");
      setBio("");
    } catch (error) {
      console.error("Error creating speaker:", error);
    }
  };

  return (
    <div>
      <h1>Create New Speaker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type="submit">Create Speaker</button>
      </form>
    </div>
  );
};

export default CreateSpeaker;
