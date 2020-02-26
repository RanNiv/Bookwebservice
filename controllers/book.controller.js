const Book = require('../models/book.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};




exports.book_details = function (req, res,next) {
    Book.BooksAction.findById(req.params.id, function (err, tx) {
        console.log(tx);
        if (err) return next(err);
        res.send(tx);
    })
};



exports.findspecific = function(req, res,next) {
    /*     medicalDB.Order.findOne({nurseOrderText:"test nurseOrderText"},function (err,order){
            if (err) 
            console.log(err);
            res.send(order); 
        }); */
    
        Book.BooksAction.findOne({},function (err, tx) {
            if (err) {
                return next(err);
            }
            console.log(tx);
            res.send(tx);
          
    
    }).then((json)=>console.log("json.Comment"));
    
    
    };
    





/* exports.order_details = function (req, res,next) {
    medicalDB.Order.findById(req.params.id, function (err, order) {
        if (err) return next(err);
        res.send(order);
    })
}; */




exports.book_create = function (req, res) {
    let book = new Book(
        {
            Title: req.body.title,
            Status: req.body.status
        }
    );

    Book.BooksAction.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Book record Created successfully')
    })
};