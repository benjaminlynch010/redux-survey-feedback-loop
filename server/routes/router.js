const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM "feedback" ORDER BY date DESC').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.error(`Server GET Error ${error}`);
      res.sendStatus(500);  
  });
})

router.post('/', (req, res) => {
  const feedbackData = req.body
  const queryText = `
  INSERT INTO feedback (feeling, understanding, support, comments)
  VALUES (
    '${feedbackData.feeling}', 
    '${feedbackData.understanding}', 
    '${feedbackData.support}', 
    '${feedbackData.comments}'
  )`
  
  pool.query(queryText)
    .then((result) => {
      res.status(201).json({ message: "Feedback POST was successful" })
    })
    .catch((error) => {
      res.sendStatus(500)
      console.error(`Server POST unsuccessful, Error : ${error}`)
    })
  })

  router.put('/:id', (req, res) => {
    const id = [ req.params ]
    const flagStatus = req.body
    const queryText = `
    UPDATE feedback (flagged)
    SET flagged != $1
    WHERE id = $2
    `

    pool.query(flagStatus, queryText)
    .then((result) => {
      res.status(200).json({ message: "Feedback PUT was successful" })
    })
    .catch((error) => {
      res.sendStatus(500)
      console.error(`Server PUT unsuccessful, Error : ${error}`)
    })

  })


module.exports = router


