const express = require('express');
const sql = require('mssql');
const PORT = 3001;
var querstring=require('querystring');
url = require('url');
const app = express();
app.use(express.json());
const cors = require('cors');
const Doctor = require('./models/Doctor');
app.use(cors());

const connectionString ={
 user: 'sa',
 password: 'Manali13',
server: 'PC0408',
database: 'HospitalManagement',

// options: {
//     trustedConnection: true,
//     integratedsecurity :'true'
//   },

};

// app.get('/', function (req, res){

//     let connection = sql.connect(connectionString, (err)=> {
//         if(err){
//             console.log(err);
//         }
//         else 
//         {
//             res.send('Db connected')
//         }
//     })
// })
var server=app.listen(5000,function()
{

    console.log('node server is running');
})


app.get('/', (req, res) => {
    let connection=sql.connect(connectionString,(err)=>{
        if(err)
        {
         console.log(err);
        }
        else
        {
         // res.send("DB Connected");
         //console.log("DB Connected");
         var request = new sql.Request();
         sqlquery='Select * from Patients';
         request.query(sqlquery, function (err, result) {
           if (err) {
             console.log(err);
           //  res.send(err);
           }
           else {
             // var data = JSON.stringify(result.recordset)
             // recordSet = JSON.parse(data)
             recordSet = JSON.parse(JSON.stringify(result.recordset))
             sql.close();
             // res.render('users', { recordSet: recordSet });
             console.log(recordSet);
             res.json(recordSet)
           }
         });
        // console.log("DB Connected");
        }
    })
  // res.send("welcome");
   console.log("Call get method");
});

app.post('/Departments',function(req,res)
{   
    

         if (req.body.DepartmentName != "") {
            var query = "INSERT INTO [Departments] (DepartmentName) VALUES ( " + "'" + req.body.DepartmentName + "'" + " )";
            console.log(query);
            sql.close();
            sql.connect(connectionString, function (err) {
                var request = new sql.Request();
                request.query(query, function (err, result) {
                   console.log(result);
                   //console.log(result.recordset);
                });
         });
        }
});
app.post('/Doctor',function(req,res,next)
{   
      //read doctor information from request
      let doctor = new Doctor(req.body.Name, req.body.DepartmentId, req.body.Designation);
      sql.connect(connectionString, function (err) {
        var request = new sql.Request();
        console.log(doctor.getAddDoctorSQL());
        request.query(doctor.getAddDoctorSQL(), (err, data)=> { 
          console.log(data);
               sql.close();
          });
          //console.log("doc id " + doctorId);
      });
});

app.put('/Departments/:id',function(req,res)
{   

         if (req.body.DepartmentName != "") {
            var query = "UPDATE [Departments] SET [DepartmentName] = " + "'" + req.body.DepartmentName + "'" + " WHERE DepartmentId =" + "'" + req.params.id + "'";
            console.log(query);
            sql.close();
            sql.connect(connectionString, function (err) {
                var request = new sql.Request();
                request.query(query, function (err, result) {
                   console.log(result);
                   //console.log(result.recordset);
                });
         });
        }
});


