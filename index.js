const express = require('express');
const app = express();


require("dotenv").config();
let port = process.env.PORT;

app.use('/healthcheck', require('./routes/healthchecker'))

app.use(express.json())

app.get('/', (request,response) => {
    response.json({data: 'ok'});
})

app.get('/test', (request,response) => {
    response.json({data: 'test ok'});
})

app.post('/save/:name' , (request,response) => {
    console.log(request.params, request.body);
    response.json({data: request.params})
})

app.listen(port, () => {
    console.log("Server has started");
})