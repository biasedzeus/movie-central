import React from "react";
import { useState, useEffect } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";
import MovieGallery from "./MovieGallery";
import Header from "./Header";

const SearchhFeed = () => {
  const [searchedItems, setSearchedItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { searchWord } = useParams();

  async function getData() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}search?page=1&query=${searchWord}`
      );
      setSearchedItems(data?.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [searchWord]);

  console.log("feed", searchedItems);

  return (
    <>
      <Header />
      <Stack
        sx={{
          flexDirection: {
            sx: "column",
            md: "row",
          },
        }}
      >
        {searchedItems === null && (
          <div>
            <CircularProgress />
          </div>
        )}
        <Box p={2}>
          <Typography sx={{backgroundColor:'#202020',width:'fit-content',padding:'1rem',borderRadius:'1rem'}} variant="h5" fontWeight="500" mb="2">
            Search Results for :{" "}
            <span style={{ color: "red" }}>{searchWord}</span>
          </Typography>
          {searchedItems && <MovieGallery movies={searchedItems} />}
        </Box>
      </Stack>
    </>
  );
};

export default SearchhFeed;
