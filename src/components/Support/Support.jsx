import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Support() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [support, setSupport] = useState({
    description: "",
  });

  const supportInput = (event) => {
    event.preventDefault();
    const newSupport = {
      description: support.description,
    };
    console.log(`newSupport : ${newSupport.description}`)
    history.push('/Comments')
  };

  const handleChange = (event) => {
    setSupport({
      ...Support,
      description: event.target.value,
    });
  };

  return (
    <>
      <h1>Support</h1>
      <form onSubmit={(event) => supportInput(event)}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="How supported do you feel?"
        ></input>
        <button type="submit">Next</button>
      </form>
    </>
  );

}

export default Support