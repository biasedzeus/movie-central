import React from 'react';
import { Skeleton, Stack } from '@mui/material';

const HomeSkeleton = () => {
  return (
    <Stack alignItems="center" height={"100vh"}>
        <Skeleton width="70%" height="100px"/>
        <Skeleton width="70%" height="200px"/>
        <Skeleton width="70%" height="calc(100vh )"/>
    </Stack>
  )
}

export default HomeSkeleton;