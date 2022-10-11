import {
  IconButton,
  Paper,
  Box,
  Stack,
  Input,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SearchModal from "./SearchModal";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchWord) {
        console.log("word",searchWord)
      navigate(`/search/${searchWord}`);
      setSearchWord("");
    }
  };

  return (
    <Stack
      maxWidth={{ xs: "100%", xl: "100%" }}
      alignItems="center"
      sx={{
        backgroundColor: "#303030",
        padding: "2rem",
      }}
    >
      <Stack
        flexDirection="row"
        component="form"
        onSubmit={handleSubmit}
        width={{ xs: "100%", sm: "50%" }}
      >
        <Input
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit" onClick={(e) => handleSubmit(e)}>
                <BsSearch />
              </IconButton>
            </InputAdornment>
          }
          sx={{ backgroundColor: "white", padding: ".4rem" ,width:'100%'}}
          placeholder="search movies...."
        />
      </Stack>
    </Stack>
  );
};

export default SearchBar;
