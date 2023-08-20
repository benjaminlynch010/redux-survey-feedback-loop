import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ understanding, setUnderstanding ] = useState(0);
  
  const handleInput = (event) => {
    setUnderstanding (event.target.value)
  };
  
  const handleNextStep = () => {
    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: understanding,
    });
    history.push("/Support");
  };

  return (
    <>
      <h1>Understanding</h1>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Rate from 1 to 5"
      ></input>
      <button onClick={() => handleNextStep()}>Next</button>
    </>
  );
}

export default Understanding;
