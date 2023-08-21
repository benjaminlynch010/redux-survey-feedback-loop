import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ understanding, setUnderstanding ] = useState('');
  
  const handleInput = (event) => {
    setUnderstanding (event.target.value)
  };
  
  const handleClick = () => {
      dispatch({
        type: "ADD_UNDERSTANDING",
        payload: understanding,
      });
      history.push("/Support");
  };

  return (
<Box 
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} 
    display="flex" flexDirection="column" alignItems="center" p={4}>
      <Typography variant="h4" >
        Understanding
      </Typography>

        <TextField
          type="number"
          placeholder="Rate from 1 to 5"
          value={understanding}
          onChange={handleInput}
          inputProps={{
            min: 1,
            max: 5,
          }}
          />

      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={understanding === '' || understanding < 1 || understanding > 5}
        style={{ marginTop: "20px" }}
      >
        Next
      </Button>
    </Box>
  );
}

export default Understanding;
