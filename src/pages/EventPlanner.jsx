import React from "react";
import { Typography, Card, CardContent, Grid, Paper } from "@mui/material";

const EventPlanner = ({ weatherData }) => {
  const { current, forecast } = weatherData;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Event Planner
      </Typography>
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Today's Weather for Your Event
        </Typography>
        <Typography variant="body1">
          {current.weather[0].description}
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        {forecast.slice(0, 5).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {new Date(item.dt * 1000).toLocaleTimeString()}
                </Typography>
                <Typography variant="body2">
                  {item.weather[0].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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
