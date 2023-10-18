const express = require('express')
const router = express.Router()
const user = require('../models/User')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtSecret = 'MynameisJavascript'

router.post('/createuser' ,[
body('email','Plz Enter Valid Email').isEmail(),
body('name','Plz Enter Valid Name').isLength({ min: 5 }),
body('password','Incorect Password').isLength({ min: 5 })],
async(req,res)=>{
    console.log(
        req.body.name,
        req.body.password,
        req.body.email,
        req.body.location);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(12)
    const securePassword = await bcrypt.hash(req.body.password, salt)



    try {
    await   user.create({
            name:req.body.name,
            password:securePassword,
            // password:req.body.password,
            email:req.body.email,
            location:req.body.location

            // {
            //     name:'Mudassir Hussain',
            //     password:'12345',
            //     email:'mudassir@123',
            //     location:'Pakistan'
            // }
        })
        res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})



// Login
// matching the email and password 
router.post('/loginuser',[
body('email','Plz Enter Valid Email').isEmail(),
body('password','Incorect Password').isLength({ min: 5 })],
async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;
        try {
        const userData = await user.findOne({email})     // ab ham .then bhi laga k kr skty hain
            if(!userData){
                return res.status(400).json({errors:'Try login with correct credentials'})
            }

            const pswrdCompare = await bcrypt.compare(req.body.password, userData.password)
            if(!pswrdCompare){
                return res.status(400).json({errors:'Try login with correct credentials'})                
            }

            // jwt token
            const data = {
                user:{
                    id:userData.id,
                }
            }

            const authToken = jwt.sign(data,jwtSecret)
            return res.json({success:true, authToken:authToken})           
        } catch (error) {
            console.log(error);
            res.json({success:false})
        }
    })
module.exports = router;