import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Review() {
  
  const feeling = useSelector((store) => store.newFeeling)
  const understanding = useSelector((store) => store.newUnderstanding)
  const support = useSelector((store) => store.newSupport)
  const comments = useSelector((store) => store.newComments)
  
  // Package the feedback in an object
  const feedbackToSend = {
  feeling: feeling,
  understanding: understanding,
  support: support,
  comments: comments,
  }

  // Send new feedback to the DB
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Feedback Object : ${feedbackToSend}`)
    axios.post('/feedback', feedbackToSend)
    .then((response) => {
      console.log('POST Request ✅')
    }).catch((error) => {
      console.error('POST Request ⛔️', error)
    })
  }
    
  return (
    <div>
      <h1>Review</h1>
      {/* <h3>Feeling Rating : {feedbackToSend.feeling}</h3>
      <h3>Understanding Rating : {feedbackToSend.understanding}</h3>
      <h3>Support Rating : {feedbackToSend.support}</h3>
      <h3>Comments : {feedbackToSend.comments}</h3> */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Review
