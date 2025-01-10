const {Schema}=require("mongoose");
const UserSchema = new Schema(
    {
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true, // Automatically convert emails to lowercase
          message: "Please enter a valid email address",
        },
      
        username: {
          type: String,
          required: [true, "Your username is required"],
        },
        password: {
          type: String,
          required: [true, "Your password is required"],
        },
       
});
module.exports = {UserSchema};