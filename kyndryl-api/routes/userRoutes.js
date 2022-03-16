const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', userController.insertNewUser);
router.post('/update', userController.updateUser);
router.delete('/delete', userController.deleteUser);
module.exports = router;