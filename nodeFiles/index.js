const express = require('express');
const app = express();

const cors = require('cors');
//Handles CORS permissions

const bodyParser = require('body-parser');
//sends info to api so it can be parsed by the api

const router = require('./app/routes/router')
//connects to the main database

const port = 3090;
app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});
//display server info on designated port

app.use(cors()); //handles cross-sight communication
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
    res.json({
        'All desserts': 'http://localhost:3090/api/product_list',
        'Specific dessert types': 'http://localhost:3090/api/product_list/types/large',
        'Specific dessert': 'http://localhost:3090/api/product_list/id/3',
    });
});

//sends data to api, and puts it in a request body, 
//then parses the request body 
//and uses that to send info to the database
app.post('/post', (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

//The only api routes exist after the 'api/'
//calls the 'api/' automatically
app.use('/api', router);
