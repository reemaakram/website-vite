import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: "112 rs",
    image: "src/assets/OIP (2).webp", 
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "150 rs",
    image: "src/assets/OIP (1).webp", 
  },
];

const Library = () => (
  <>
    {books.map((book) => (
      <Card key={book.id} style={{ marginBottom: 10, maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="200"
          image={book.image}
          alt={book.title}
          style={{ borderRadius: "4px 4px 0 0" }}
        />
        <CardContent style={{ padding: 10 }}>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="body2">Author: {book.author}</Typography>
        </CardContent>
      </Card>
    ))}
  </>
);

export default Library;
