import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('<h3>Hello World!</h3>');
});

app.listen(port, () => {
    return console.log('Server is up runnning at port: ', port)
})