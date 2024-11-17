// App.jsx beskriver hvordan applikasjonen skal se ut og hvilke komponenter som skal vises.

import React, { useState } from "react"; // Importerer React og useState fra react
import { // Importerer BrowserRouter, Routes, Route og Navigate fra react-router-dom
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar"; // Importerer Navbar fra components-mappen
import Login from "./pages/Login"; // Importerer Login fra pages-mappen
import Speakers from "./pages/Speakers";
import SpeakerDetails from "./pages/SpeakerDetails";
import Talks from "./pages/Talks";
import TalkDetails from "./pages/TalkDetails";
import Rooms from "./pages/Rooms";
import CreateSpeaker from "./pages/CreateSpeaker";
import CreateTalk from "./pages/CreateTalk";

const App = () => { // Definerer funksjonen App
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Oppretter en state-variabel isAuthenticated og en funksjon setIsAuthenticated

  return ( // Returnerer JSX-kode
    <Router> // Returnerer en Router-komponent
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Login setAuth={setIsAuthenticated} />} />
        <Route
          path="/speakers"
          element={isAuthenticated ? <Speakers /> : <Navigate to="/" />}
        />
        <Route
          path="/speakers/:id"
          element={isAuthenticated ? <SpeakerDetails /> : <Navigate to="/" />}
        />
        <Route
          path="/talks"
          element={isAuthenticated ? <Talks /> : <Navigate to="/" />}
        />
        <Route
          path="/talks/:id"
          element={isAuthenticated ? <TalkDetails /> : <Navigate to="/" />}
        />
        <Route
          path="/rooms"
          element={isAuthenticated ? <Rooms /> : <Navigate to="/" />}
        />
        <Route
          path="/create-speaker"
          element={isAuthenticated ? <CreateSpeaker /> : <Navigate to="/" />}
        />
        <Route
          path="/create-talk"
          element={isAuthenticated ? <CreateTalk /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App; // Eksporterer funksjonen App
