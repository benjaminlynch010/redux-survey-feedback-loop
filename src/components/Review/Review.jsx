import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Review() {
  
  const handleSubmit = () => {
    axios.post('/feedback', feedback)
    .then((response) => {
      console.log('POST Request ✅')
    }).catch((error) => {
      console.error('POST Request ⛔️', error)
    })
  }
    
  return (
    <h1>Review</h1>
  )
}

export default Review
