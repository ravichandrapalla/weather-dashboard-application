import axios from "axios";

const CLIENT_ID = "62a6ebbab5e04210ad0c51e8dce20637";
const CLIENT_SECRET = "3c7a03b79e644a498817e290624fe7af";
const REDIRECT_URI = "http://localhost:3000/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SCOPES = ["playlist-read-private", "playlist-read-collaborative"];

export const getAuthUrl = () => {
  const scopes = SCOPES.join(" ");
  return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(scopes)}`;
};

export const getAccessToken = async (code) => {
  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", REDIRECT_URI);
  params.append("client_id", CLIENT_ID);
  params.append("client_secret", CLIENT_SECRET);

  const response = await axios.post(TOKEN_ENDPOINT, params);
  return response.data.access_token;
};
