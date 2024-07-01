import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAccessToken } from "../auth";

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const code = new URLSearchParams(location.search).get("code");
      if (code) {
        const token = await getAccessToken(code);
        localStorage.setItem("spotify_token", token);
        navigate("/music-playlist");
      }
    };
    fetchToken();
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default Callback;
