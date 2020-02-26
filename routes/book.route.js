const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const book_controller = require('../controllers/book.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', book_controller.test);

router.get('/:id', book_controller.book_details);


router.get('/test/specific',book_controller.findspecific);

router.post('/create', book_controller.book_create);



module.exports = router;