import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    quantity:{
        type:Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: String,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type:String,
        enum:['ORDER PENDING', 'ORDER PLACED', 'ORDER CANCELLED', 'ORDER DELIVERED'],
        default:'ORDER PENDING'

    }
},{timestamps:true});

export const Order = mongoose.model('Order', orderSchema);