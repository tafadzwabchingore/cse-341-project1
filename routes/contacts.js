const router = require('express').Router();

const contactsController = require('../controllers/contacts.js');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact); //used to create something

router.put('/:id', contactsController.updateContact); //Put/Patch used to update. Can be used interchangebly

router.delete('/:id', contactsController.deleteContact); //removing something

module.exports = router;