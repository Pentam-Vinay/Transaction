import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type:{
    type:String,
    required:true
  },
  amount:{
    type:Number,
    required:true
  },

  category: {
    type:String,
   
    required: true
},
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
description:{
    type:String
}
   
  
},{timestamps:true});
export const Transaction = mongoose.model('Transaction', transactionSchema);