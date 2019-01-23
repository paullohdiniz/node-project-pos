const express = require('express');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/', (req, resp) => {
    resp.send('OK');
});

require('./controllers/authController')(app);

app.listen(3000);