import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({

},{timestamps:true})

export const medicalRecords = mongoose.model('medicalRecords', medicalRecordSchema)