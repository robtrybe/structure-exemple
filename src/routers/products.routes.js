const express = require('express');
const router = express.Router();


router.get('/',(req, res) => res.status(200).json({ message: 'Rota Productos'}));
router.get('/:id',(req, res)=>{ res.status(200).json({ message: 'Unico Produto'})});

module.exports = router;