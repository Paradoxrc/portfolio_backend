const mongoose = require('mongoose');

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
//create a code to print hello world