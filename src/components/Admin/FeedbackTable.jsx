import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Paper, Button } from '@mui/material';

function FeedbackTable() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log("GET Request ✅");
        setFeedback(response.data);
      })
      .catch((error) => {
        console.error("GET Request ⛔️", error);
      });
  };

  const checkFlag = (value) => {
    return value ? '🚩' : '';
  };

  // TODO PUT request & toggler function
  // const toggleFlag = () => {
  //
  //   }

  //   axios.put('/:id', value)
  //     .then((response) => {
  //       console.log("PUT Request ✅")
  //     })
  //     .catch((error) => {
  //       console.error("PUT Request ⛔️", error);        
  //     })
  // }

  // TODO DELETE request

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {feedback.map((tablerow) => (
        <Grid item key={tablerow.id} xs={12}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">
              Feedback
            </Typography>
            <Typography variant="body1">
              Feeling: {tablerow.feeling}
            </Typography>
            <Typography variant="body1">
              Understanding: {tablerow.understanding}
            </Typography>
            <Typography variant="body1">
              Support: {tablerow.support}
            </Typography>
            <Typography variant="body1">
              Comments: {tablerow.comments}
            </Typography>
            <Typography variant="body1">
              Flagged: { checkFlag(tablerow.flagged) }
            </Typography>
            <Typography variant="body1">
              Date: {new Date(tablerow.date).toLocaleDateString()}
            </Typography>
            {/* TODO add toggle function later */}
            {/* <Button onClick={toggleFlag(tablerow.flagged)}>
              Flag
            </Button> */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default FeedbackTable;
