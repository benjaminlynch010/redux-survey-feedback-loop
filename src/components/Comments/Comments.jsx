import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [comments, setComments] = useState({
    description: "",
  });

  const commentsInput = (event) => {
    event.preventDefault();
    const newComments = {
      description: comments.description,
    };
    console.log(`newComments : ${newComments.description}`)
    history.push('/Review')
  };

  const handleChange = (event) => {
    setComments({
      ...Comments,
      description: event.target.value,
    });
  };

  return (
    <>
      <h1>Comments</h1>
      <form onSubmit={(event) => commentsInput(event)}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Any additional comments?"
        ></input>
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Comments