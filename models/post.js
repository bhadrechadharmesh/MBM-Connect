const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
    {
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
        },

        data:{
            url:{
                type:String,
                required:true
            },
            description :{
                type:String,
            },
            likes:{
                type:Number,
                default:0,
            },
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