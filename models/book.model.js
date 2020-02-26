const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema(
    {
   // id: String,
    Title: String,
  Isbn:String,
  PageCount: String,
    Status: String,
  Authors:String,
    ShortDescription: String,
    LongDescription: String,
    PublishedDate: String 



});



let TestSchema = new Schema(
    {
        id: String,
    test: {type: String, required: true}
   



});


const BooksAction = mongoose.model('Book', BookSchema,'Books');

// Export the model
//module.exports = mongoose.model('Book', BookSchema);


module.exports ={
    BooksAction
   
  
  }