const express = require('express');
const app = express();
const indexRouter = require('./routes/index')
const bodyparser =require('body-parser');

app.listen(3000,()=>{
    console.log("server is running on 3000");
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/api',indexRouter);
