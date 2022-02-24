const mongoose=require('mongoose')
const transactionSchema=new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Add some text']
    },
    amount:{
        type:Number,
        required:[true,"Enter some number"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Transaction',transactionSchema)