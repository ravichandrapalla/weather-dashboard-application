import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuthUrl } from "../auth";

const MusicPlaylist = ({ weatherCondition }) => {
  const [playlist, setPlaylist] = useState([]);
  const token = localStorage.getItem("spotify_token");

  const getMusicFromWeather = (condition) => {
    // Simple mapping based on weather condition
    if (condition.includes("rain"))
      return "1FcINFECHoGYZgEtubwHEs?si=f3db596fdd474871";
    if (condition.includes("clear"))
      return "37i9dQZF1DX9fZ7amiNVu6?si=0b2f8e9aef584b56";
    return "4USaH9u1uDnZSi4ohlbHB4?si=8261ffbdaeb44978";
  };

  useEffect(() => {
    if (!token) {
      window.location.href = getAuthUrl();
      return;
    }
    const music = getMusicFromWeather(weatherCondition);
    axios
      .get(`https://api.spotify.com/v1/playlists/${music}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPlaylist(response.data.tracks.items);
      })
      .catch((error) => {
        console.error("There was an error fetching the playlist!", error);
      });
  }, [weatherCondition, token]);

  return (
    <div>
      <h2>Mood Playlist</h2>
      <ul>
        {playlist.map((track, index) => (
          <li key={index}>
            {track.track.name} by {track.track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPlaylist;
