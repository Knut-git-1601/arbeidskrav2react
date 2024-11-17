// api.js inneholder alle CRUD-funksjoner for foredragsholdere, foredrag og rom

const BASE_URL = "https://crudapi.co.uk/api"; // URL til API-et

// Foredragsholdere (speakers) API
export const getSpeakers = async () => { // Henter alle foredragsholdere
  const response = await fetch(`${BASE_URL}/speakers`);
  if (!response.ok) throw new Error("Failed to fetch speakers");
  return response.json();
};

export const getSpeakerById = async (id) => { // Henter foredragsholder med ID
  const response = await fetch(`${BASE_URL}/speakers/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch speaker with ID: ${id}`);
  return response.json();
};

export const createSpeaker = async (data) => { // Oppretter ny foredragsholder
  const response = await fetch(`${BASE_URL}/speakers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create speaker");
  return response.json();
};

export const updateSpeaker = async (id, data) => { // Oppdaterer foredragsholder med ID
  const response = await fetch(`${BASE_URL}/speakers/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`Failed to update speaker with ID: ${id}`);
  return response.json();
};

export const deleteSpeaker = async (id) => { // Sletter foredragsholder med ID
  const response = await fetch(`${BASE_URL}/speakers/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Failed to delete speaker with ID: ${id}`);
  return response.json();
};

// Foredrag (talks) API
export const getTalks = async () => { // Henter alle foredrag
  const response = await fetch(`${BASE_URL}/talks`);
  if (!response.ok) throw new Error("Failed to fetch talks");
  return response.json();
};

export const getTalkById = async (id) => { // Henter foredrag med ID
  const response = await fetch(`${BASE_URL}/talks/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch talk with ID: ${id}`);
  return response.json();
};

export const createTalk = async (data) => { // Oppretter nytt foredrag
  const response = await fetch(`${BASE_URL}/talks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create talk");
  return response.json();
};

export const updateTalk = async (id, data) => { // Oppdaterer foredrag med ID
  const response = await fetch(`${BASE_URL}/talks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`Failed to update talk with ID: ${id}`);
  return response.json();
};

export const deleteTalk = async (id) => { // Sletter foredrag med ID
  const response = await fetch(`${BASE_URL}/talks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Failed to delete talk with ID: ${id}`);
  return response.json();
};

// Foredragsrom (rooms) API
export const getRooms = async () => {
  const response = await fetch(`${BASE_URL}/rooms`);
  if (!response.ok) throw new Error("Failed to fetch rooms");
  return response.json();
};

export const getRoomById = async (id) => { // Henter rom med ID
  const response = await fetch(`${BASE_URL}/rooms/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch room with ID: ${id}`);
  return response.json();
};

export const createRoom = async (data) => {// Oppretter nytt rom
  const response = await fetch(`${BASE_URL}/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create room");
  return response.json();
};

export const updateRoom = async (id, data) => { // Oppdaterer rom med ID
  const response = await fetch(`${BASE_URL}/rooms/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`Failed to update room with ID: ${id}`);
  return response.json();
};

export const deleteRoom = async (id) => { // Sletter rom med ID
  const response = await fetch(`${BASE_URL}/rooms/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Failed to delete room with ID: ${id}`);
  return response.json();
};
