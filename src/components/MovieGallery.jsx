import React from "react";
import { Stack } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieGallery = ({ movies }) => {
  return (
    <Stack
      sx={{
        padding: "3rem 3rem 3rem 3rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        gap="3rem"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap={"wrap"}
        sx={{
          maxWidth: {
            lg: "100%",
            xl: "900px",
          },
        }}
      >
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </Stack>
    </Stack>
  );
};

export default MovieGallery;
