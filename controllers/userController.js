const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getDashboardPage = async (req, res) => {
    try {
        res.status(200).render('dashboard');
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

const createUser = async (req, res) => {
    try {
        
        const { name, email, password, password2 } = req.body;
        let errors = [];

        // Check required fields
        if (!name || !email || !password || !password2) {
            errors.push({ msg: 'Please fill in all fields' });
        }

        // Check password match
        if (password != password2) {
            errors.push({ msg: 'Passwords do not match' });
        }

        // Check pass length
        if (password.length < 6) {
            errors.push({ msg: 'Password should be at least 6 characters' });
        }



        if (errors.length > 0) {
            res.render('register', {
                errors,
                name,
                email,
                password,
                password2
            });
        } else {
            const user = await User.findOne({email : email});
            if(user){
                // User exists
                errors.push({msg : 'Email already is exists.'})
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });
                console.log(newUser);
                

                // hash password
                bcrypt.genSalt(10, (err, salt)=> 
                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err){
                        return res.status(400).redirect('/redirect');
                    }

                    newUser.password = hash;
                    newUser.save()
                    .then(user =>{
                        res.redirect('/login');
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).redirect('/register');
                    });
                    

                }));
                

            }
        }


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}


module.exports = {
    getDashboardPage,
    createUser
}