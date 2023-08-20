import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feelings, setFeelings] = useState({
    description: "",
  });

  const feelingsInput = (event) => {
    event.preventDefault();
    const newFeelings = {
      description: feelings.description,
    };
    console.log(`newFeelings : ${newFeelings.description}`)
    history.push('/2')
  };

  const handleChange = (event) => {
    setFeelings({
      ...Feelings,
      description: event.target.value,
    });
  };

  return (
    <>
      <h1>Feelings</h1>
      <form onSubmit={(event) => feelingsInput(event)}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="How are you feeling?"
        ></input>
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Feelings;
