const express = require('express');
const userController = require('../controllers/userController');


const router = express.Router();

router.get('/dashboard',userController.getDashboardPage);
router.post('/register',userController.createUser);



module.exports ={
    routes:router
}
