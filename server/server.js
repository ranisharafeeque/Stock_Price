const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

// bodyParser = require('body-parser');
// const fetch = require('node-fetch');
// const api_url = 'https://finnhub.io/api/v1/quote?symbol=AAPL&token=bsfme6vrh5ran23jnul0';



const PORT = 3000;


/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

//  const request = require('request');

// Setting ejs
// app.set('views', path.join(__dirname, './views/index'));

// app.set('view engine', 'ejs');
// app.get('/', function (req, res) {
//   res.render(path.join(__dirname, '../views/index.ejs'));
// });


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});









// app.use(express.json());
// app.use(express.static('public));

// catch-all route handler for any requests to an unknown route
app.get('*', function (req, res) {
    return res.status(404).send('Not Found');
});


// global error handler

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    console.log('ERROR: ', err);
    const errorStatus = err.status || 500;
    return res.status(errorStatus).send(res.locals.message); // instead of send change it to json
});
  
/**
 * define route handlers
 */
app.use('/api', apiRouter);

/**
 * start server
 */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;