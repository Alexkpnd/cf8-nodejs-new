const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    console.log("About Page");
    res.send('This is about page.');
});

app.get('/help', (req, res) => {
    console.log('Help Page');
    res.send('This is help page.')
});

app.get('/user', (req, res) => {
    let query = req.query;
    console.log(query);
    let name = query.name;
    let surname = query.surname;

    console.log(name, surname)

    res.send(`USER QUERY PARAMETERS : ${name}  ${surname}`)
});

app.get('/user/:name/:surname', (req, res) => {
    let params = req.params;
    console.log(params);

    res.send('USER PATH PARAMETERS: '+ ' ' + params.name + ' ' + params.surname)
});


app.listen(port, () => {
    console.log(` Server is up running at port: ${port}`)
});