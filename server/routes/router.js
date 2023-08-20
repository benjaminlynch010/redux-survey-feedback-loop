const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('GET gud')
  pool.query('SELECT * FROM "feedback"').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(`Server GET Error ${error}`);
      res.sendStatus(500);  
  });
})

router.post('/', (req, res) => {
  const feedbackData = req.body
    res.status(201).json({ message: "Feedback POST was successful" })
    // .catch((error) => {
    //   res.sendStatus(500)
    //   console.error(`Server POST unsuccessful, Error : ${error}`)
    // })
  })


module.exports = router