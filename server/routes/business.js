let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let businessController = require('../controllers/business');

router.get('/', businessController.displayBusinessList);


/*Get route for displaying add page - Create Operation*/
router.get('/add', requireAuth, businessController.displayAddPage);



/*Get route for processing add page - Create Operation*/
router.post('/add', requireAuth, businessController.processAddPage);



/*Get route for displaying Edit page - UpdateOperation*/
router.get('/edit/:id', requireAuth, businessController.displayEditPage);


/*Get route for processing Edit page - Update Operation*/
router.post('/edit/:id', requireAuth, businessController.processEditPage);


/*Get route to perform book deletion page - Delete Operation*/
router.get('/delete/:id', requireAuth ,businessController.performDelete);



module.exports= router;