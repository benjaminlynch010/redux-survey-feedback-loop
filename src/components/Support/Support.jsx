import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ support, setSupport ] = useState('');
  
  const handleInput = (event) => {
    setSupport(event.target.value)
  };
  
  const handleClick = () => {
    dispatch({
      type: "ADD_SUPPORT",
      payload: support,
    });
    history.push("/Comments");
  };

  return (
<Box 
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} 
    display="flex" flexDirection="column" alignItems="center" p={4}>
      <Typography variant="h4" >
        Support
      </Typography>

        <TextField
          type="number"
          placeholder="Rate from 1 to 5"
          value={support}
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
        disabled={support === '' || support < 1 || support > 5}
        style={{ marginTop: "20px" }}
      >
        Next
      </Button>
    </Box>
  )
}

export default Support;