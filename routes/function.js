const express = require('express')

const router=express.Router()

const nodalController=require('./../controllers/nodal')

const bankController=require('./../controllers/bank')

const aadharController=require('./../controllers/aadhar')
//const display_complaint=require('./../controllers/nodal')

router.post('/bank',bankController.bank)

router.post('/aadhar',aadharController.aadhar)

router.post('/nodal',nodalController.nodal)

router.get('/complaint',nodalController.display_complaint)

router.post('/nodalreg',nodalController.nodalreg)

router.post('/nodallogin',nodalController.nodallogin)

router.post('/bankreg',bankController.bankreg)

router.post('/banklogin',bankController.banklogin)


module.exports=router
