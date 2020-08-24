require('dotenv').config();
const mongoose = require('mongoose');

//connect to db
const connectDatabase = mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected!');    
}).catch((err) => {
    console.log(err);
});

module.exports = connectDatabase