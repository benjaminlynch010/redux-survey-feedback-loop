import React, { useState, useEffect } from "react";
import axios from "axios";

function FeedbackTable() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log("GET Request ✅");
        setFeedback(response.data);
      })
      .catch((error) => {
        console.error("GET Request ⛔️", error);
      });
  };

  const checkFlag = (value) => {
    if (value) {
      return '⛳️'
    }
    if (!value) {
      return ''
    }
  }
  return (
    <div>
      {feedback.map((tablerow) => (
        <div key={tablerow.id} className="table-row">
          <table>
            <thead>
              <tr>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Comments</th>
                <th>Flagged</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{tablerow.feeling}</td>
                <td>{tablerow.understanding}</td>
                <td>{tablerow.support}</td>
                <td>{tablerow.comments}</td>
                <td>{checkFlag(tablerow.flagged)}</td>
                <td>{tablerow.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default FeedbackTable;
