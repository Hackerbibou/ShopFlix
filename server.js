const express = require('express');
const path = require('path');

const logger = require('morgan');
const cors = require('cors')
// Always require and configure near the top
require('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();


app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join('https://shopflix-api.onrender.com',__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
  origin:['https://localhost3000','https://shopflix.onrender.com']
  // ,'https://shopflix.onrender.com'

}))

app.use(require('./config/checkToken'));



const port = process.env.PORT || 3000;

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/movies', require('./routes/api/movies'));
app.use('/api/list', require('./routes/api/list'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
