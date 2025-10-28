const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
    {
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
        },

        data:{
            url:String,
            description : String,
            likes:Number,
            comment : {
                owner:{
                    type:Schema.Types.ObjectId,
                    ref : "User"
                },
                data:String,
            }
        }
    }
)

const Post = mongoose.model("post",postSchema);

module.exports = Post;