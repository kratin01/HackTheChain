import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Pre is a middleware which is used to do something before the event occurs
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); //we have use this becuase we dont want to hash the password again and again so we are checking if the password is modified then only we will hash it
  this.password = await bcrypt.hash(this.password, 10); //This is jusy doing the hashing means encrypting the password
});
//.method is used to create a custom method like we use prototype in javascript
userSchema.methods.isPasswordMatch = async function (pass) {
  if (typeof pass !== "string") {
    return false; // or handle the error appropriately
  }

  return await bcrypt.compare(pass, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
export const user = mongoose.model("user", userSchema);
