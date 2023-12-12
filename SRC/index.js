const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 2030;
const methodOverride = require('method-override');

// Serve static files from the 'Resouses/public' directory
app.use(express.static(path.join(__dirname, 'Resouses/public')));

// Use Morgan for logging
app.use(morgan('combined'));

// Use method-override for HTTP method override
app.use(methodOverride('_method'));


// Set up Handlebars as the view engine
app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'Resouses', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'Resouses', 'views', 'partials')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'Resouses', 'views'));

// Connect to the database
const db = require('./config/db');
db.connect();

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Include routes
const route = require('./routes');
route(app);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
