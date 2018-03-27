import express from 'express';
import config from '../../config'
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../../models/User';
import cors from 'cors';

const route = () =>{
    const router = new express.Router();

    const configurationOption = {  // Acces hatasını gideriyor
        origin : 'http://localhost:3000',
        maxAge : 3600,
        optionsSuccessStatus: 200
    }
    router.route('/users').post((req,res)=>{
       User.find().then((user)=>{
           res.send(user);
       })
    });

// SIGIN ROUTER
    router.route('/login').post((req,res)=>{
        const { email,password } = req.body;
        const hashpass = crypto.createHmac('sha256', config.passSecret).update(password).digest('hex');
        User.findOne({ email: email,password:hashpass}).then((user)=>{
            if(user){
                const token = jwt.sign({userId: user._id},config.jwtSecret);
                User.update({email:email},{
                    $set : {
                        lastLogin : new Date()
                    }
                }).then(()=>{});
                res.send({
                    status : true,
                    token : token,
                });
            }else{
                res.send({
                    status : false,
                });
            }
        });
    });

// SIGNUP ROUTER
    router.route('/sign-up',cors(configurationOption)).post((req,res)=>{
        const {email,password,fullName} = req.body;
        const passwordHashed = crypto.createHmac('sha256', config.passSecret).update(password).digest('hex');
        const newUser = new User({
            fullName: fullName,
            email : email,
            password : passwordHashed
        });

        newUser.save().then(()=>{
            res.send({ status : true})
        },(x)=>{
            res.send({ status : false, error : x})
        });
    });

    return router;
}


export default {
    route,
    routePrefix : '/'+config.version+'/auth'
}