import { ApiResponse } from "../utils/apiResponse.js";
import Apierror from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// import jwt from "jsonwebtoken";
// import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { user } from "../Models/user.Models.js";
const registerUser = asyncHandler(async (req, res) => {
  const { username, fullName, email, password } = req.body;
  // console.log(username);

  if ([fullName, email, password].some((field) => field?.trim() === "")) {
    throw new Apierror(400, "Please fill all the fields");
  }

  const existedUser = await user.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new Apierror(409, "User already exists");
  }

  const newUser = await user.create({
    username: username.toLowerCase(),
    email,
    password,
  });

  const createdUser = await user
    .findById(newUser._id)
    .select("-password -refreshToken");

  if (!createdUser) {
    throw new Apierror(500, "something went worng user not created");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "User registered successfully", createdUser));
});

export { registerUser };
