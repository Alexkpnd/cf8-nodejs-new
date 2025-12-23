const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({exteded:true}))

app.use('/', express.static('static_files'));

const logger = (req, res, next) => {
    let url = req.url;
    console.log("Logger: ", req.body);
    let time = new Date();
    console.log(`Received request for ${url} at ${time}`);

    next();
    // return res.send('Not authenticated.');
}


app.get('/user', (req, res) => {
    let userData = req.query;
    console.log("UserData: ", userData);

    let firstname = userData.firstname;
    let lastname = userData.lastname;

    res.send(`Firstname: ${firstname}, Lastname: ${lastname}`);
});

app.post('/user', logger, (req, res) => {
    let userData = req.body;
    console.log("UserData Post Request: ", userData)

    let firstname = userData.firstname;
    let lastname = userData.lastname;
    // res.send sends  back a text
    // res.send("Data Received.");
    // res.send(`POST Call >> Firstname: ${firstname}, Lastname: ${lastname}`);
    // res.json() sends back a json object.
    res.json(userData);
});


app.post('/userForm', logger, (req, res)=> { 
    console.log("Form data: ", req.body);
    res.send(`${req.body.firstname} and ${req.body.lastname} and ${req.body.email} and ${req.body.sex}`);
})

app.listen(port, () => {
    console.log("Server is up ", port);
});