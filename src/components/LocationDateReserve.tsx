"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";

function LocationDateReserve({
  onDateChange,
  onHospitalChange,
}: {
  onDateChange: Function;
  onHospitalChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState("chulalongkorn");

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center space-y-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
            onDateChange(value);
          }}
        />
      </LocalizationProvider>
      <Select
        variant="standard"
        name="location"
        id="location"
        className="h-2[em] flex-1"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          onHospitalChange(e.target.value);
        }}
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
