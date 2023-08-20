import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ comments, setComments ] = useState({
    comments: "",
  });
  
  const handleInput = (event) => {
    setComments({
      comments: event.target.value,
    });
  };
  
  const handleNextStep = () => {
    dispatch({
      type: "ADD_COMMENTS",
      payload: comments,
    });
    history.push("/Review");
  };

  return (
    <>
      <h1>Comments</h1>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Rate from 1 to 5"
      ></input>
      <button onClick={() => handleNextStep()}>Next</button>
    </>
  );
}

export default Comments;