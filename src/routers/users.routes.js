const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');


router.get('/', getUsers);
router.get('/:id',(req, res) => { res.status(200).json({ message: 'Unico usuario'})});

module.exports = router;