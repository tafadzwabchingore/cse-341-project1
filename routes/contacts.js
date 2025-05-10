const router = require('express').Router();

const contactsController = require('../controllers');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;