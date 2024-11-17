// Rooms.jsx er en funksjonell komponent som henter rom fra en API og viser en liste over disse.

import React, { useEffect, useState } from "react";
import { getRooms } from "../api/api";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="rooms-page">
      <h1>Rooms</h1>
      {rooms.length === 0 ? (
        <p>Loading rooms...</p>
      ) : (
        rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h2>{room.name}</h2>
            <p>Capacity: {room.capacity}</p>
            <h3>Talks:</h3>
            <ul>
              {room.talks?.length > 0 ? (
                room.talks.map((talk) => (
                  <li key={talk.id}>
                    {talk.title} - {talk.time}
                  </li>
                ))
              ) : (
                <li>No talks scheduled</li>
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Rooms;
