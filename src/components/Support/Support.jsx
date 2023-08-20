import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ support, setSupport ] = useState({
    support: "",
  });
  
  const handleInput = (event) => {
    setSupport({
      support: event.target.value,
    });
  };
  
  const handleNextStep = () => {
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
        onChange={handleInput}
        type="text"
        placeholder="Rate from 1 to 5"
      ></input>
      <button onClick={() => handleNextStep()}>Next</button>
    </>
  );
}

export default Support;