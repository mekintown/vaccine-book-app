"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";

function LocationDateReserve() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center space-y-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" />
      </LocalizationProvider>
      <Select
        variant="standard"
        name="location"
        id="location"
        className="h-2[em] flex-1"
      >
        <MenuItem value="chulalongkorn">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="rajavithi">Rajavithi Hospital</MenuItem>
        <MenuItem value="thammasatUniversity">
          Thammasat University Hospital
        </MenuItem>
      </Select>
    </div>
  );
}

export default LocationDateReserve;
