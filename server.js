const express = require('express');

const PORT = process.env.PORT || 9000;

const app = express();

app.get('/',(req, res)=>{
    res.send('<h1>App is working with nodemon</h1>')
});

app.listen(PORT,()=>{
    console.log('server listening at ', PORT);
});
