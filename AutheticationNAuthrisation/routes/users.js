var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/login",(req,res,next)=>{
let userdata={
username:req.body.username,
password:req.body.password
};
if(userdata.username=="admin" && userdata.password=="admin")
{
  let token=jwt.sign(userdata,global.config.secretkey,{
    algorithm:global.config.algorithm,
    expiresIn:'15m'
  });
  res.status(200).json({
    message:'Login successful',
    jwtoken:token
  });
}
else{
  res.status(401).json({
    message:'Login failed'
  });
}
})

module.exports = router;
