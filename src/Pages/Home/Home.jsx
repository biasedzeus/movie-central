import React, { useEffect, useState } from "react";
import "./home.css";
import { Box, Container, Typography } from "@mui/material";
import MovieGallery from "../../components/MovieGallery";
import axios from "axios";
import HomeSkeleton from "../../components/skeleton/HomeSkeleton";
import Header from "../../components/Header";

const BASE_URL = "https://movie-task.vercel.app/api/popular?page=1";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}popular?page=1`);
      console.log(data.data?.results);
      setMovieList(data.data?.results);
      // setIsLoading(false);
      setTimeout(() =>{
        setIsLoading(false)
      },3000)
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Box minHeight={"100vh"}>
      <Header/>
      {isLoading ? <HomeSkeleton/> :  <MovieGallery movies={movieList} /> }
     
    </Box>
  );
}
