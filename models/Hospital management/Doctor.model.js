import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    specializedIn:{
        type:String,
        required:true
    },
    workHospital:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Hospitals'
        }
    ]
},{timestamps:true})

export const doctors = mongoose.model('doctors', doctorSchema)