import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import MovieGallery from "../../components/MovieGallery";
import axios from "axios";
import HomeSkeleton from "../../components/skeleton/HomeSkeleton";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [displayList, setDisplayData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(0);
  const [resultsFound, setResultsFound] = useState(true);

  useEffect(() => {
    getData();
  }, [filters]);

 


  const yearReleasedList = [
    ...new Set(displayList.map((movie) => movie.release_date)),
  ];
  const newList = [
    ...new Set(yearReleasedList.map((item) => new Date(item).getUTCMonth())),
  ].sort((a, b) => a - b);

  console.log("yr", yearReleasedList);
  console.log("filter", filters);

  function handleChange(e) {
    setFilters(e.target.value);
  }

  function applyFilter() {
    let updatedList = movieList;

    if (filters) {
      updatedList = updatedList.filter((data) => {
        return filters === new Date(data.release_date).getMonth();
      });
    }
    setMovieList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  }

  function clearFilters() {
    setMovieList(displayList);
    setFilters(0);
  }

  async function getData() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}popular?page=1`
      );
      console.log(data.data?.results);
      setMovieList(data.data?.results);
      setDisplayData(data?.data?.results);
      setIsLoading(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log("error", error);
    }
  }
  if (error?.code)
    return (
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Typography variant="h5">
          Something Went Wrong. Please Try again Later
        </Typography>
      </Stack>
    );

  return (
    <Box minHeight={"100vh"}>
      <Header />
      <SearchBar />
      <Filter
        filters={filters}
        newList={newList}
        applyFilters={applyFilter}
        yearList={yearReleasedList}
        handleChange={handleChange}
        clearFilters={clearFilters}
      />
      {isLoading ? (
        <HomeSkeleton />
      ) : resultsFound ? (
        <MovieGallery movies={movieList} />
      ) : (
        <Typography>No results</Typography>
      )}
    </Box>
  );
}
