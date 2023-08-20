import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ support, setSupport ] = useState('');
  
  const handleInput = (event) => {
    setSupport(event.target.value)
  };
  
  const handleClick = () => {
    dispatch({
      type: "ADD_SUPPORT",
      payload: support,
    });
    history.push("/Comments");
  };

  return (
    <>
      <h1>Support</h1>
      <input
          type="number"
          placeholder="Rate from 1 to 5"
          onChange={handleInput}>
        </input>
      <button 
        onClick={handleClick}
        disabled={ support === '' || support < 1 || support > 5 }>
        Submit
      </button>
    </>
  );
}

export default Support;