import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../../components/MovieCard";
import styled from "@emotion/styled";
import MovieDetailSkeleton from "../../components/skeleton/MovieDetailSkeleton";
import { FcRating, FcLike } from "react-icons/fc";
import { format } from "date-fns/esm";
import { MdMovieCreation } from "react-icons/md";
import axios from "axios";

const BackDropImage = styled("img")({
  width: "100%",
  minHeight: "80% !important",
});
const MovieDetail = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const  getData = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}movie?movieId=${id}`);
    setMovie(data?.data);
    setIsLoading(false);
  };

  // console.log("current", currentMovieDetail);
  if (isLoading) return <MovieDetailSkeleton />;
  return (
    <Stack
      sx={{
        width: "100%",
        height: "",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <BackDropImage
        src={`https://image.tmdb.org/t/p/original${
          currentMovieDetail ? currentMovieDetail.backdrop_path : ""
        }`}
      />
      <Stack
        className="header"
        sx={{
          position: "absolute",
          top: { xs: "0", lg: "1rem" },
          left: { xs: "0", lg: "1rem" },
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            textAlign="center"
            marginLeft="1rem"
            fontWeight={800}
            color="white"
            fontSize={{ lg: "1.4rem" }}
          >
            Movie Central{" "}
          </Typography>
        </Link>
      </Stack>

      <Stack
        sx={{
          position: { sm: "absolute" },
          bottom: { sm: "10%", md: "10%" },
          left: "10%",
          paddingTop: { xs: "4rem", sm: "1.4rem" },
          alignItems: "center",
          display: { xs: "none", sm: "block" },
        }}
      >
        <MovieCard isLoading={isLoading} movie={currentMovieDetail} />
      </Stack>
      <Stack
        sx={{
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Stack
          alignItems={{ xs: "center", sm: "flex-start" }}
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "60%",
              lg: "70%",
            },
            padding: "1rem",
          }}
        >
          <Typography variant="h4" fontWeight="600">
            {currentMovieDetail ? currentMovieDetail.original_title : ""}
          </Typography>
          <Typography variant="p">
            {currentMovieDetail ? currentMovieDetail.tagline : ""}
          </Typography>

          <Stack
            lineHeight={"1rem"}
            flexDirection="row"
            gap=".5rem"
            className="movie__rating"
          >
            <FcRating />
            {currentMovieDetail
              ? currentMovieDetail.vote_average
              : ""}{" "}
            <span className="movie__voteCount">
              <FcLike />
              {currentMovieDetail ? currentMovieDetail.vote_count : ""}
            </span>
          </Stack>
          <Stack
            sx={{
              backgroundColor: "black",
              width: "fit-content",
              padding: ".4rem 1rem",
              margin: ".6rem",
              borderRadius: "10px",
              marginLeft: "0",
            }}
            className="movie__runtime"
          >
            {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
          </Stack>
          <div className="movie__releaseDate">
            {currentMovieDetail
              ? "Release date: " +
                format(new Date(currentMovieDetail.release_date), "PPP")
              : ""}
          </div>
          <Box sx={{ margin: " 1.25rem 0", paddingTop: "1rem" }}>
            {currentMovieDetail && currentMovieDetail.genres
              ? currentMovieDetail.genres.map((genre) => (
                  <>
                    <span className="movie__genre" id={genre.id}>
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </Box>
          <Stack sx={{ width: { lg: "50%", paddingTop: "2rem" } }}>
            <Typography paragraph>
              {currentMovieDetail ? currentMovieDetail.overview : ""}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MovieDetail;
