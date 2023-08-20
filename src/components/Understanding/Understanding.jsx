import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Understanding() {

      const dispatch = useDispatch();
      const history = useHistory();
    
      const [understanding, setUnderstanding] = useState({
        description: "",
      });
    
      const understandingInput = (event) => {
        event.preventDefault();
        const newUnderstanding = {
          description: understanding.description,
        };
        console.log(`newFeelings : ${newUnderstanding.description}`)
        history.push('/3')
      };
    
      const handleChange = (event) => {
        setUnderstanding({
          ...Understanding,
          description: event.target.value,
        });
      };
    
      return (
        <>
          <h1>Understanding</h1>
          <form onSubmit={(event) => understandingInput(event)}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Do you understand the material?"
            ></input>
            <button type="submit">Next</button>
          </form>
        </>
      );

}

export default Understanding