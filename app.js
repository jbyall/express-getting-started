// Gives reference to express
var express = require('express');
// Create instance of express
var app = express();

// Static File Middleware
app.use(express.static('public'));
// Set view templates directory
app.set('views', './src/views');
// Set view engine to Handlebars
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

// generic data to be used for learning
var navLinkArray = [
    {text: 'Fruit', link: '/Fruit'},
    {text: 'Vegetable', link: '/Vegetable'},
];


// Handle root get request
app.get('/', function(req, res){
    // Return view with data
    res.render('index', {title: 'Hello Bond', navLinks: navLinkArray});
});

// Router setup
var fruitRouter = require('./src/routes/fruitRoutes')(navLinkArray);
app.use('/Fruit', fruitRouter);


// Tells app to listen on a port
var port = process.env.PORT || 5000;
app.listen(port, function(err){
    console.log('listening on port ' + port);
});