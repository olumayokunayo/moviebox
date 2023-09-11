import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Card data-testid="movie-card">
      <CardMedia
        component="img"
        alt={movie.title}
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.title}
        data-testid="movie-poster"
      />

      <CardContent>
        <Typography variant="body1" data-testid="movie-title">{movie.title}</Typography>
        <Typography variant="body2" data-testid="movie-release-date">{movie.release_date}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
