const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = Schema(
    {
        owner:{
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        data:{
            type : String,
            date : String,
            time : String,
            image : String,
            description: String,
            price : Number
        }
    }
)

const Market = mongoose.model("market",marketSchema);

module.exports = Market;