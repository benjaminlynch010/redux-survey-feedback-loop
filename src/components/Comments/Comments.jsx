import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ comments, setComments ] = useState('');
  
  const handleInput = (event) => {
    setComments(event.target.value)
  };
  
  const handleNextStep = () => {
    dispatch({
      type: "ADD_COMMENT",
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
        placeholder="Comments?"
      ></input>
      <button onClick={() => handleNextStep()}>Next</button>
    </>
  );
}

export default Comments;