import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./index.scss";
import { TextField } from "@mui/material";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}
const Search = () => {
  const [values, setValues] = useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (event: any) => {
    setValues({ ...values, weight: event.target.value });
    console.log(values.weight);
  };
  return (
    <div className="Search-container">
      <TextField
        placeholder="Mã đơn hàng, tên khách hàng "
        variant="outlined"
        className="search-style"
        inputProps={{ className: "input" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="icon" />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      />
    </div>
  );
};
export default Search;
