var express = require('express');
var app=express();
app.use(express.json());
const Joi = require('joi');
Employees=[{eid:1,Name:"Rita",Password:"Intern",birthyear:'2000'},{eid:2,Name:"Sita",Password:"Junior Engineer",birthyear:'2002'},{eid:3,Name:"Ram",Password:"Manager",birthyear:'2003'},{eid:4,Name:"Sohan",Password:"Senior",birthyear:'2011'}];
var server=app.listen(5000,function()
{

    console.log('node server is running');
})

app.get('/',function(req,res)
{
res.send('Welcome');
console.log("get request");
})

app.get('/Employees',function(req,res)
{
res.send(Employees);
console.log("Employee URl invoked");
})
app.get("/Employees/:id",function(req,res)
{
    id=req.params.id;
    //console.log(id);
    var employee=Employees.find(k=>k.eid==id);
res.send(employee);
console.log("required employee : " +  employee.str);
})

app.post("/Employees",function(req,res)
{
    const {error}=validateEmployee(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    }
    const employee={
        eid: Employees.length + 1,
        Name:req.body.Name,
        Password:req.body.Password,
        birthyear:req.body.birthyear}
        Employees.push(employee);
        res.send(Employees);
})

app.put("/Employees/:id",function(req,res)
{
    id=req.params.id;
    var employee=Employees.find(k=>k.eid==id);
    const {error}=validateEmployee(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    }
       
    employee.Name=req.body.Name;
    employee.Password=req.body.Password;
    employee.birthyear=req.body.birthyear;
       
        res.send(employee);
})
app.delete("/Employees/:id",function(req,res)
{
    id=req.params.id;
    var employee=Employees.find(k=>k.eid==id);
   
    if(!employee) res.status(400).send('<h2> not found</h2>');
       
       
    const index=Employees.indexOf(employee);
    Employees.splice(index,1);
       
        res.send(employee);
})

function validateEmployee(employee)
{
    const schema = Joi.object().keys({
        Name: Joi.string().required(),
        Password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        birthyear: Joi.number().integer().min(1900).max(2013)
       });
       return Joi.validate(employee,schema);
}