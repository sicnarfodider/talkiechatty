const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRouter = require('./routes/auth_routes');
const cors =  require('cors');

const PORT = process.env.PORT || 9000;

const app = express();

mongoose.connect(keys.db_connect).then(()=>{
    console.log('connect to mongoDB');
}).catch( err=>{
    console.log('error connecting to mongodb', err.message);
});

app.use(cors());
app.use(express.json());

authRouter(app);

app.get('/',(req, res)=>{
    res.send('<h1>App is working with nodemon</h1>')
});

app.listen(PORT,()=>{
    console.log('server listening at ', PORT);
});
