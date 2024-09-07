import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: String,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

export const Order = mongoose.model('Order', orderSchema);