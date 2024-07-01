import React, { useState } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import { getAuthUrl } from "../auth";
import MusicPlaylist from "../components/MusicPlaylist";
import { Box } from "@mui/material";
export default function Home() {
  const token = localStorage.getItem("spotify_token");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  return !token ? (
    <div>
      <h1>Weather Dashboard</h1>
      <button onClick={() => (window.location.href = getAuthUrl())}>
        Login to Spotify
      </button>
    </div>
  ) : (
    <Box sx={{ padding: "0" }}>
      <CurrentWeather setCurrent={(data) => setCurrent(data)} />
      <Forecast setForecast={(data) => setForecast(data)} />
      {/* <MusicPlaylist weatherCondition={"clear"} /> */}
    </Box>
  );
}
