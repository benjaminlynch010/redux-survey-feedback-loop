const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/feedback', (req, res) => {
  // 
  pool.query('SELECT * FROM "feedback";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(`Server GET Error ${error}`);
      res.sendStatus(500);  
  });
})