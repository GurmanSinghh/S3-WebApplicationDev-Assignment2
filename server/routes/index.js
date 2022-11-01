/* Gurman Singh 301183986 COMP229*/
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET About me page. */
router.get('/about', indexController.displayAboutPage);


/* GET Projects page. */
router.get('/projects',indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/*Get route for displaying Login page - Create Operation*/
router.get('/login', indexController.displayLoginPage);

/*Get route for processing Login page - Create Operation*/
router.post('/login', indexController.processLoginPage);

/*Get route for displaying Register page - Create Operation*/
router.get('/register',indexController.displayRegisterPage);

/*Get route for processing Register page - Create Operation*/
router.post('/register',indexController.processRegisterPage);

/*Get route to perform UserLogout page - Delete Operation*/
router.get('/logout',indexController.performLogout);

module.exports = router;
