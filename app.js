require('./config');
const path = require('path');
const routerCars = require('./routes/cars');
const routerHomePage = require('./routes/home');
const routerRegister = require('./routes/register');
const express = require('express');
const app = express();

//view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//router
app.use('/', routerHomePage);
app.use('/register', routerRegister);
app.use('/cars', routerCars);



//PORT SETTINGS
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`PORT ${PORT} is litening ...`);
});

