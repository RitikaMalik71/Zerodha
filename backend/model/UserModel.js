const {model}=require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {UserSchema}=require("../schema/UserSchema");

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });
const UserModel=new model("User", UserSchema);


module.exports={ UserModel };