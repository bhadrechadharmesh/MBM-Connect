const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = Schema(
    {
        owner:{
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        data:{
            category : {
                type:String,
                required:true
            },
            image : {
                type:String,
                required:true
            },
            description: {
                type:String,
                required:true,
            },
            price : {
                type:Number,
                required:true
            },
            createdAt:{
                type:Date,
                default:Date.now,
            }
        },
        timestamps:true,
    }
)

const Market = mongoose.model("market",marketSchema);

module.exports = Market;