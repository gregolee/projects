const express = require('express');
const router = express.Router();

const controller = require('./user.controller');

//user list
router.get('/', controller.index);

//user info
router.get('/:id', controller.show);

//delete user
router.delete('/:id', controller.destroy);

//create user
router.post('/:id', controller.create);

module.exports = router;
