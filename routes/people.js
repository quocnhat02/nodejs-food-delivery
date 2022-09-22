const express = require('express');

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

const router = express.Router();

router.get('/', getPeople);

router.post('/', createPerson);

router.post('/postman', createPerson);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

module.exports = router;
