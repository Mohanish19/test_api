const express = require('express');
const app = express();

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

app.listen(3000, () => {
    console.log("Server has started");
})