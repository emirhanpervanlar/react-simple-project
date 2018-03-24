import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName : String,
    email : {
        type : String,
        unique : [true, "Bu mail adresi kullanılıyor"],
        required : [true, 'Lütfen bir email adresi giriniz']
    },
    password : String,
    dateCreated : { type: Date, default: Date.now },
    dateUpdated : { type: Date, default: Date.now },
    lastLogin : { type: Date, default: Date.now },

});

export default mongoose.model('User',userSchema);
