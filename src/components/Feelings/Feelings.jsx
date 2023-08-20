import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ feeling, setFeeling ] = useState({
    feeling: "",
  });

  const handleInput = (event) => {
    setFeeling({
      feeling: event.target.value,
    });
  };

  // Next button click will add feeling obj to store
  const handleNextStep = () => {
      dispatch({
        type: 'ADD_FEELING',
        payload: feeling
      })
      history.push('/Understanding')
  };

  return (
    <>
      <h1>Feelings</h1>
        <input
          onChange={handleInput}
          type="text"
          placeholder="How are you feeling?">
        </input>
        <button onClick={() => handleNextStep()}>Next</button>
    </>
  );
}

export default Feelings;
