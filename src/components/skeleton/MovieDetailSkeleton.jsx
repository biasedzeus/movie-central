import React from "react";
import { Skeleton, Stack } from "@mui/material";

const MovieDetailSkeleton = () => {
  return (
    <Stack gap="-10rem" alignItems="center">
      <Skeleton width="70%" height="200px" />
      <Skeleton width="70%" height="100vh" />
    </Stack>
  );
};

export default MovieDetailSkeleton;
