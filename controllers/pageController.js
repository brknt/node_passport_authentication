


const getHomePage = async (req, res) =>{
    try {
      
        res.status(200).render('homepage');
        
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error

        })
    }
}

const getLoginPage = async (req, res) =>{
    try {
        res.status(200).render('login');
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error

        })
    }
}

const getRegisterPage = async (req, res) =>{
    try {
        res.status(200).render('register');
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error

        })
    }
}

const getDashboardPage = async (req, res) =>{
    try {
        res.status(200).render('dashboard');
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error

        })
    }
}



module.exports = {
    getHomePage,
    getLoginPage,
    getRegisterPage,
    getDashboardPage
    
}