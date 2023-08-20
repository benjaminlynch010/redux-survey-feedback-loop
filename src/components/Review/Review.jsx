import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

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
      })
      .catch((error) => {
        console.error("POST Request ⛔️", error);
      });
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <div>
        <p>Feeling : {feelingRating}</p>
        <p>Understanding : {understandingRating}</p>
        <p>Support : {supportRating}</p>
        <p>Comments : {commentData}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Review;
