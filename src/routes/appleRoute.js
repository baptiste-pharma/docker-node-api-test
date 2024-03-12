const express = require('express');
const { getAppleByColor, getAppleById, createApple } = require('../controllers/appleController');

const router = express.Router();

router.get('/getAppleById/:id', getAppleById);
router.get('/getAppleByColor/:color',  getAppleByColor);
router.post('/createApple', createApple);

module.exports = router;