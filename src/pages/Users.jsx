import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const users = [
  { id: 1, name: "reema", age: 22 },
  { id: 2, name: "lama", age: 24 },
  { id: 3, name: "tala", age: 25 },
];

const Users = () => (
  <div style={{ padding: 20 }}>
    <Typography variant="h4" gutterBottom>
      Our Users
    </Typography>
    {users.map((user) => (
      <Card key={user.id} style={{ marginBottom: 10, maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2">Age: {user.age}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Users;
