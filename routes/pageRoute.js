const express = require('express');
const pageController = require('../controllers/pageController');


const router = express.Router();


router.get('/',pageController.getHomePage);
router.get('/login',pageController.getLoginPage);
router.get('/register',pageController.getRegisterPage);


module.exports = {
    routes:router
}