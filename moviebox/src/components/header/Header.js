import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import banner from "../../images/jwick.jpeg";
import imbdImage from "../../images/imdb.png";
import berryImage from "../../images/strawberry.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const inputStyle = {
  backgroundColor: "transparent",
  padding: "0.4rem",
  width: "400px",
  paddingRight: "2rem",
  border: "1px solid #D1D5DB",
  borderRadius: "4px",
  color: "#fff",
  "::placeholder": {
    color: "#fff",
  },
};
const Header = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0.6rem",
        bgcolor: "black",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavLink
              to={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  backgroundColor: "#c81640",
                  height: "2.5rem",
                  width: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "red",
                    height: "2rem",
                    width: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                  }}
                >
                  <LiveTvIcon style={{ color: "#fff", fontSize: "1rem" }} />
                </div>
              </div>
              <Typography sx={{ color: "#fff" }}>MovieBox</Typography>
            </NavLink>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                style={inputStyle}
                placeholder="What do you want to watch?"
              />
              <SearchIcon
                style={{
                  position: "absolute",
                  right: "10px",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onClick={() => {
                  // Handle the search action here
                }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Typography>
                <NavLink
                  to={"/sign-in"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Sign in
                </NavLink>
              </Typography>
              <div
                style={{
                  backgroundColor: "#c81640",
                  padding: "0.2rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MenuIcon sx={{ color: "#fff", fontSize: "1rem" }} />
              </div>
            </div>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                marginTop: "5rem",
                fontSize: "3rem",
                fontWeight: 500,
                width: "40%",
              }}
            >
              John Wick 3 : Parabellum
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <img src={imbdImage} alt="imdb" style={{ height: "2rem" }} />
                <Typography sx={{ color: "#fff" }} variant="body2">
                  86.0 / 100
                </Typography>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <img
                  src={berryImage}
                  alt="rating"
                  style={{ height: "1.5rem" }}
                />
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  97%
                </Typography>
              </div>
            </div>
            <Typography
              sx={{
                lineHeight: "18px",
                width: "30%",
                color: "#fff",
                fontWeight: 500,
                marginTop: "1rem",
              }}
            >
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </Typography>
            <Button
              sx={{
                bgcolor: "#be123c",
                display: "flex",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                }}
              >
                <PlayArrowIcon sx={{ color: "#222" }} />
              </div>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                WATCH TRAILER
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Header;
