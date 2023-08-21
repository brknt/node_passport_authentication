const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');


const app = express();


// CONNECT MONGODB
mongoose.connect('mongodb://localhost/passportdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connection Succesful');
}).catch((err) => {
    console.log(err);
})



// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// ROUTES
app.use('/', pageRoute.routes);
app.use('/users', userRoute.routes);



const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port : ${PORT}`));
