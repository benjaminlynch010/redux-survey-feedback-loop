import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState('');

  const handleInput = (event) => {
    setFeeling(event.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: 'ADD_FEELING',
      payload: feeling
    });
    history.push('/Understanding');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <Typography variant="h4" gutterBottom>
        Feelings
      </Typography>
      <TextField
        type="number"
        label="Rate from 1 to 5"
        placeholder="Rate from 1 to 5"
        value={feeling}
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
        disabled={feeling === '' || feeling < 1 || feeling > 5}
        style={{ marginTop: "20px" }}
      >
        Next
      </Button>
    </Box>
  );
}

export default Feelings;
