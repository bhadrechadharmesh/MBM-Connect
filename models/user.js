const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        username : String,
        email : String,
        chats:[
            {
                date:String,
                time:String,
                partner:{
                    type: Schema.Types.ObjectId,
                    ref : "User",
                },
                msg:[
                    {
                        sender:String,
                        reciever:String,
                    }
                ]
            }
        ],
    }
)

const User = mongoose.model("user",userSchema);

module.exports = User;