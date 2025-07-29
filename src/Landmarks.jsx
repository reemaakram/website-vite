import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const landmarks = [
  {
    name: "The Prophet’s Mosque",
    image: "src/assets/OIP.webp",
  },
  {
    name: "Mount Uhud",
    image: "src/assets/جبل-احد-1.webp",
  },
];

const Landmarks = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Landmarks in Madinah
      </Typography>

      {landmarks.map((item, index) => (
        <Card key={index} style={{ maxWidth: 400, marginBottom: 20 }}>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Landmarks;
