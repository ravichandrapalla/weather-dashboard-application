import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Forecast from "./components/Forecast";
import Callback from "./components/Callback";
import MusicPlaylist from "./components/MusicPlaylist";
import { Layout } from "./components/Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import EventPlanner from "./pages/EventPlanner";
import Farmer from "./pages/Farmer";
import Traveler from "./pages/Traveler";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/music-playlist" element={<MusicPlaylist />} />
        <Route path="/event-planner" element={<EventPlanner />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/traveler" element={<Traveler />} />
      </Route>
    </Routes>
  );
}

export default App;
