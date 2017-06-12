const express = require('express');

const router = express.Router();

const queries = require('../db/queries')

router.get('/scotch', (req, res) => {
  queries
    .scotch
    .getAll()
    .then(scotches => {
      res.json(scotches);
    })
})

router.get('/scotch/:id', (req, res) => {
  queries
    .scotch
    .getOne(req.params.id)
    .then(scotch => {
      res.json(scotch)
    })
})

router.post('/scotch', (req, res) => {
  queries
    .scotch
    .create(req.body)
    .then(results =>{
      res.send(results[0]);
    })
})

router.put('/scotch/:id', (req, res) => {
  queries
    .scotch
    .update(req.params.id, req.body)
    .then(scotch =>{
      res.json(scotch[0])
    })
})

router.delete('/scotch/:id', (req, res) => {
  queries
    .scotch
    .delete(req.params.id)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

module.exports = router;
