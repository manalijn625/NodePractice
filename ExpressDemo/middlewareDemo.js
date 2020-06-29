var express = require('express');
const LoggerMiddleware=(req,res,next)=>{
    console.log(`Logged ${req.url} ${req.method} ${new Date()}`)
    next();
}

var app=express();
app.use(LoggerMiddleware);
app.use(express.static('Public'));
var server=app.listen(5000,function()
{

    console.log('node server is running');
})

app.get('/users',function(req,res)
{
res.json({'status':true});

})
