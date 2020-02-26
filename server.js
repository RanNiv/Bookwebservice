const express = require('express');
const bodyParser = require('body-parser');


const book = require('./routes/book.route'); // Imports routes
const app = express();

const mongoose = require('mongoose');

//Ensure special characters in your password are encoded
// replace the literal '#' character with '%23' 
let dev_db_url = 'mongodb+srv://dbuser9898:ywNBX8cLWSgk%23EH@testcluster-gnmu7.mongodb.net/BooksDb?retryWrites=true&w=majority';


let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{
   useUnifiedTopology: true,
   useNewUrlParser: true}); 



   mongoose.connection.on('connected', function(){console.log("connection ok")});

 mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));   


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/books', book)
        





let port = process.env.PORT || 1234;


app.listen(port, () => {
   console.log('Server is up and running on port numner ' + port);
});