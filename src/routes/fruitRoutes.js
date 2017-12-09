var express = require('express');
var fruitRouter = express.Router();

// function to create the router and be able to pass data to the router
var router = function (nav) {
    // Sample data
    var fruitArray = [
        { id: 0, name: "Apple", price: 1.50 },
        { id: 1, name: "Banana", price: 0.50 },
        { id: 2, name: "Grape", price: 0.10 },
        { id: 3, name: "Kiwi", price: 2.00 },
    ];

    // get /Fruit
    fruitRouter.route('/')
        .get(function (req, res) {
            res.render('fruit', { title: 'Fruit List', navLinks: nav, fruit: fruitArray });
        });
    // get /Fruit/id
    fruitRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('fruitDetail', { title: 'Fruit Detail', navLinks: nav, item: fruitArray[id] })
        });
        return fruitRouter;
}

// Export to make available to other files
module.exports = router;