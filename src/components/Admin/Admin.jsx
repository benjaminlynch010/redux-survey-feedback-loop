import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Admin() {

  const [feedback, setFeedback] = useState([])
  
  useEffect(() => {
    fetchFeedback()
  }, [])

const fetchFeedback = () => {
    axios.get('/feedback')
    .then((response) => {
      console.log('GET Request ✅')
      setFeedback(response.data)
    })
    .catch((error) => {
      console.error('GET Request ⛔️', error)
    })
  }

  // return(
  //   <div>
  //     {feedback.map((tableRow) => (
  //       <p key={tableRow.id} tableRow={tableRow}></p>
  //       ))}
  //   </div>
  // )  
}

export default Admin