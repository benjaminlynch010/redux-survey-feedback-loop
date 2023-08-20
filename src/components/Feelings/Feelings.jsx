import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ feeling, setFeeling ] = useState('');


  const handleInput = (event) => {
    setFeeling(event.target.value);
  };

  const handleClick = () => {      
    dispatch({
        type: 'ADD_FEELING',
        payload: feeling
      })
      history.push('/Understanding')
    }
  
  return (
    <>
      <h1>Feelings</h1>
        <input
          type="number"
          placeholder="Rate from 1 to 5"
          onChange={handleInput}>
        </input>
      <button 
        onClick={handleClick}
        disabled={ feeling === '' || feeling < 1 || feeling > 5 }>
        Submit
      </button>
    </>
  );
}

export default Feelings;
