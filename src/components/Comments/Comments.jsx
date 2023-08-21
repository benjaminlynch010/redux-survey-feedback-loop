import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ comments, setComments ] = useState('');
  
  const handleInput = (event) => {
    setComments(event.target.value)
  };
  
  const handleClick = () => {
    dispatch({
      type: "ADD_COMMENT",
      payload: comments,
    });
    history.push("/Review");
  };

  return (
    <Box 
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} 
    display="flex" flexDirection="column" alignItems="center" p={4}>
      <Typography variant="h4" >
        Comments
      </Typography>

        <TextField
          type="text"
          placeholder="Any Feedback?"
          value={comments}
          onChange={handleInput}
          />

      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ marginTop: "20px" }}
      >
        Next
      </Button>
    </Box>
  );
}

export default Comments;