import { Stack, Typography } from "@mui/material";
import React from "react";
import { MdMovieCreation } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <Stack
      sx={{ padding: "1rem", backgroundColor: "#303030" }}
      flexDirection="row"
      alignItems="center"
      gap="1rem"
    >
      <Link to="/">
        <MdMovieCreation size={"2rem"} color="white" />
      </Link>
      <Link to="/">
        <Typography color="white" fontFamily="Lobster">The Movie Central</Typography>
      </Link>
    </Stack>
  );
};

export default Header;
