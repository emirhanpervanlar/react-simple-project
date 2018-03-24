import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes/web';
import mongoose from 'mongoose';
import User from './models/User';
mongoose.connect('mongodb://db_admin:a1234@ds151908.mlab.com:51908/react_test');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
AuthRouter(app);


app.get('/',function(req,res){

    res.send("GET APIII")
});

app.listen(3300,function(){
    console.log("Server listening ...")
})

