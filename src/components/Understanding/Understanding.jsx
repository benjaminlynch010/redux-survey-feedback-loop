import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ understanding, setUnderstanding ] = useState('');
  
  const handleInput = (event) => {
    setUnderstanding (event.target.value)
  };
  
  const handleClick = () => {
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
          type="number"
          placeholder="Rate from 1 to 5"
          onChange={handleInput}>
        </input>
      <button 
        onClick={handleClick}
        disabled={ understanding === '' || understanding < 1 || understanding > 5 }>
        Next
      </button>
    </>
  );
}

export default Understanding;
