import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { format, getMonth, set } from "date-fns";
import React from "react";

const Filter = ({
  filters,
  handleChange,
  newList,
  applyFilters,
  clearFilters,
}) => {
  console.log("new", newList);
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        padding: "1rem",
        color: "white",
      }}
    >
      <FormControl sx={{ m: 2, minWidth: 320, color: "white" }}>
        <InputLabel id="year">Month </InputLabel>
        <Select
          labelId="year"
          id="year"
          value={filters}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {newList.map((item) => {
            return (
              <MenuItem key={new Date(item).toISOString()} value={item}>
                {format(new Date(2000, `${item}`, 1), "MMMM")}
              </MenuItem>
            );
          })}
        </Select>
        <Button sx={{margin:'1rem'}} variant="contained" color="warning" onClick={applyFilters}>Apply Filters</Button>
        <Button sx={{margin:'0rem 1rem'}} variant="outlined" onClick={clearFilters}>Clear Filters</Button>
      </FormControl>
    </Stack>
  );
};

export default Filter;
