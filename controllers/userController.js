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
        console.log('11');
        
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
            res.send('pass');
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