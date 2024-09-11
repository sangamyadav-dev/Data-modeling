import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    diagonesdWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['male', 'female', 'transgender'],
        required:true
    },
    addmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Hospitals'
    }

},{timestamps:true})

export const patients = mongoose.model('patients', patientSchema)