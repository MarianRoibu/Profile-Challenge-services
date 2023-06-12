const { Schema, model, Types } = require("mongoose")

const UserSchema = new Schema({
    name: {
      type: String,
      required: [true, 'The name is required']
    },
    email: {
      type: String,
      required: [true, 'The email is required'],
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      maxLength: 20
    },
    password: {
      type: String,
      required: true
    },
    img: {
      public_id: {
        type: String,
        default: ""
      },
      secure_url: {
        type: String,
        required: true
      }
    },
    sub: {
      required: [true],
      type: String,
      unique: true
    },
    role: {
      type: Number,
      default: 1
    },
    status: {
      type: Number,
      default: 1
    }
  });

const UserModel = model("User", UserSchema)

module.exports = UserModel