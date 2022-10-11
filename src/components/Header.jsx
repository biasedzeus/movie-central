import { Stack, Typography } from "@mui/material";
import React from "react";
import { MdMovieCreation } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Stack
      sx={{
        padding: "1rem",
        backgroundColor: "#404040",
        width: "100%",
      }}
      flexDirection="row"
      alignItems=""
      justifyContent="flex-start"
      gap="1rem"
    >
      <Link to="/">
        <MdMovieCreation size={"2rem"} color="white" />
      </Link>
      <Link to="/">
        <Typography sx={{"&:hover":{
          filter:'drop-shadow(0 0 1rem white)'
        }}} color="white" fontSize="1.4rem" fontWeight={"900"} fontFamily="Poppins">
         Movie Central
        </Typography>
      </Link>
    </Stack>
  );
};

export default Header;
