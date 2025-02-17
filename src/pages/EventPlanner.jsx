import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Card, CardContent, Grid, Paper } from "@mui/material";
import CurrentWeather from "./../components/CurrentWeather";
import Forecast from "../components/Forecast";

const EventPlanner = () => {
  const location = useLocation();
  const { currentWeather, forecast, weatherLoading, foreCastLoading } =
    location.state || {};

  if (weatherLoading || foreCastLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CurrentWeather
        currentWeather={currentWeather}
        loading={weatherLoading}
      />
      <Forecast forecast={forecast} loading={foreCastLoading} />
      <Typography variant="h4" gutterBottom style={{ marginLeft: 16 }}>
        Event Planner
      </Typography>
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Today's Weather for Your Event
        </Typography>
        <Typography variant="body1">
          {currentWeather.weather[0].description}
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
        <Typography variant="h5" gutterBottom>
          Personal Stories
        </Typography>
        <Typography variant="body1">
          "The weather forecast saved our outdoor wedding from a potential
          disaster!"
        </Typography>
      </Paper>
    </div>
  );
};

export default EventPlanner;
