try {
	require('dotenv').load();
} catch (err) {
	console.error(err);
}
var express = require('express'), app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));
// app.use(cors());


var crudl = require('./routes/crudl');
//app.use('/route', crudl('<table_name>', ['column1', 'column2', 'column3']));

app.get('/*', function(request, response) {
	response.send('I am here to serve you.');
});

app.listen(process.env.PORT || 8000, function() {
  console.log('The NSA is listening on port', process.env.PORT || 8000);
});

