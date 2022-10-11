import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Skeleton } from "@mui/material";
export default function MovieCard({ movie,isLoading }) {
  return (
    <>
      {isLoading ? (
        <Skeleton
          sx={{
            width: 200,
            height: "300px",
            aspectRatio: "10/14",
            borderRadius: "10px",
            paddingBottom: "0",
          }}
          variant="rounded"
          animation="wave"
        />
      ) : (
        <Card
          sx={{
            maxWidth: 200,
            aspectRatio: "10/14",
            borderRadius: "10px",
            paddingBottom: "0",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "200ms ease-in-out",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            },
          }}
        >
          <Link
            to={`/movie/${movie?.id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <CardMedia
              component="img"
              sx={{ borderRadius: "10px", height: "100%" }}
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              alt={movie? movie.title : ""}
            />
          </Link>
        </Card>
      )}
    </>
  );
}
