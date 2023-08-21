import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Typography, Button, Paper, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Review() {
  const feelingRating = useSelector((store) => store.newFeeling);
  const understandingRating = useSelector((store) => store.newUnderstanding);
  const supportRating = useSelector((store) => store.newSupport);
  const commentData = useSelector((store) => store.newComment);


  const feedbackToSend = {
      feeling: feelingRating,
      understanding: understandingRating,
      support: supportRating,
      comments: commentData,
    };  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post("/feedback", feedbackToSend)
        .then((response) => {
          console.log("POST Request ✅");
          toast.success("Thank you for your feedback!");
        })
        .catch((error) => {
          console.error("POST Request ⛔️", error);
        });
    };

  return (
    <Box mt={4} mx="auto" width="70%">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" mb={2}>
          Review Your Feedback
        </Typography>
        <div>
          <Typography variant="body1" gutterBottom>
            Feeling: {feelingRating}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Understanding: {understandingRating}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Support: {supportRating}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Comments: {commentData}
          </Typography>
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <ToastContainer />
      </Paper>
    </Box>
  );
}

export default Review;
