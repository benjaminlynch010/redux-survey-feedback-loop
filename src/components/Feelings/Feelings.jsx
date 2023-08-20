import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();
  

  const [feelings, setFeelings] = useState({
    feeling: "",
  });

  // Next button click will add feeling obj to store
  const handleNext = () => {
    const newFeelings = {
      feeling: feelings.feeling,
    };
    console.log(`newFeelings : ${newFeelings.feeling}`)
    history.push('/Understanding')
  };

  const handleFeelingsInput = (event) => {
    setFeelings({
      ...Feelings,
      feeling: event.target.value,
    });
  };

  return (
    <>
      <h1>Feelings</h1>
      <form onSubmit={(event) => handleNext(event)}>
        <input
          onChange={handleFeelingsInput}
          type="text"
          placeholder="How are you feeling?"
        ></input>
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Feelings;
