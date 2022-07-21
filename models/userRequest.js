const mongoose = require("../config/userRequestDB")

const RequestSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
      },
    title: {
        type: String,
        trim: true,
        required: true
      },
    request: {
        type: String,
        trim: true,
        required: true
      },
    status: {
       type: String,
       trim: true,
       default: 'pending' 
      }
}, { versionKey: false })

const UserRequest = new mongoose.model("request",RequestSchema);
module.exports = UserRequest;
