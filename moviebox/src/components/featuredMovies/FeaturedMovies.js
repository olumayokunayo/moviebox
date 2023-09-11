import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MovieCard from "../card/Card";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDk4NzM2MzU4ODc4ZjA5YmE2OTUxNjg2ZGFjOWM3ZSIsInN1YiI6IjY0ZmU1NTA2ZmE0MDQ2MDBlMTdlOGNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_yPWlTY3_q9wwMtR_hlpqFKlL7XJ-o9wmSWozcRljs",
          },
        };

        fetch("https://api.themoviedb.org/3/discover/movie", options)
          .then((response) => response.json())
          .then((data) => setMovies(data.results))
          .catch((err) => console.error(err));
      } catch (error) {
        console.log(error);
      }
      console.log(movies);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#fff", height: "100vh" }}>
        <Box
          sx={{
            paddingTop: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "2rem" }}>
            Featured Movies
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink style={{ textDecoration: "none", color: "#be123c" }}>
              See more{" "}
            </NavLink>
            <NavigateNextIcon sx={{ color: "#be123c" }} />
          </div>
        </Box>
        <Box sx={{ paddingTop: "2rem" }}>
          <Grid container spacing={2}>g
            {movies.slice(0, 12).map((movie) => (
              <Grid item xs={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default FeaturedMovies;
