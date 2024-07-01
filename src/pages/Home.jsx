import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import { getAuthUrl } from "../auth";

export default function Home() {
  const token = localStorage.getItem("spotify_token");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [foreCastLoading, setForeCastLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Tanuku,in&APPID=586f02715bbd15fc8dac2aa749d82516`
      )
      .then((response) => {
        setCurrentWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the weather data!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setForeCastLoading(true);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Tanuku&appid=586f02715bbd15fc8dac2aa749d82516"
      )
      .then((resp) => {
        console.log(resp.data);
        const { city, list } = resp.data;
        const data = { ...city, list };
        setForecast(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the forecast data!", error);
      })
      .finally(() => {
        setForeCastLoading(false);
      });
  }, []);

  const options = [
    {
      path: "/event-planner",
      label: "Event Planner",
      description: "Plan your events with the latest weather updates.",
    },
    {
      path: "/farmer",
      label: "Farmer",
      description: "Get weather insights for better farming decisions.",
    },
    {
      path: "/traveler",
      label: "Traveler",
      description: "Plan your travels with real-time weather information.",
    },
  ];

  const cardStyle = {
    padding: "20px",
    margin: "20px",
    background: "#f7f7f7",
    cursor: "pointer",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
  };

  const navigate = useNavigate();

  const handleNavigation = (path, weatherLoading, foreCastLoading) => {
    console.log(currentWeather, forecast);
    navigate(path, {
      state: { currentWeather, forecast, weatherLoading, foreCastLoading },
    });
  };

  // Define animation properties once
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  return !token ? (
    <div>
      <h1>Weather Dashboard</h1>
      <button onClick={() => (window.location.href = getAuthUrl())}>
        Login to Spotify
      </button>
    </div>
  ) : (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Weather Dashboard
      </Typography>
      <Grid container spacing={3}>
        {options.map((option, index) => (
          <Grid item xs={12} md={4} key={index}>
            <animated.div
              style={{ ...animationProps, delay: `${index * 200}ms` }}
            >
              <Card
                style={cardStyle}
                onClick={() =>
                  handleNavigation(option.path, loading, foreCastLoading)
                }
                sx={{ "&:hover": { ...cardHoverStyle } }}
              >
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {option.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {option.description}
                  </Typography>
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
