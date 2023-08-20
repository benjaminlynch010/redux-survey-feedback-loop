import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

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
      return '🚩'
    }
    if (!value) {
      return ''
    }
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feeling</TableCell>
            <TableCell>Understanding</TableCell>
            <TableCell>Support</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Flagged</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {feedback.map((tablerow) => (
            <TableRow key={tablerow.id} className="table-row">
              <TableCell>{tablerow.feeling}</TableCell>
              <TableCell>{tablerow.understanding}</TableCell>
              <TableCell>{tablerow.support}</TableCell>
              <TableCell>{tablerow.comments}</TableCell>
              <TableCell>{checkFlag(tablerow.flagged)}</TableCell>
              <TableCell>{new Date(tablerow.date).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default FeedbackTable;
