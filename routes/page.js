const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index')
})
  
router.get('/nodalui',(req,res)=>{
    res.render('nodalui')
})

router.get('/thalukui',(req,res)=>{
    res.render('thalukui')
})

router.get('/nodalreg',(req,res)=>{
    res.render('nodalreg')
})

router.get('/nodallogin',(req,res)=>{
    res.render('nodallogin')
})

router.get('/bankui',(req,res)=>{
    res.render('bankui')
})

router.get('/bankreg',(req,res)=>{
    res.render('bankreg')
})

router.get('/banklogin',(req,res)=>{
    res.render('banklogin')
})

router.get('/nodal',(req,res)=>{
    res.render('nodal')
})

router.get('/adminlogin',(req,res)=>{
  res.render('adminlogin')
 })
 
router.get('/studentlogin',(req,res)=>{
  res.render('studentlogin')
 })

 router.get('/getinfo',(req,res)=>{
  res.render('getinfo')
 })


 router.get('/aadhar',(req,res)=>{
    res.render('aadhar')
   })
  
module.exports = router;