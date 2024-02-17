import { ApiResponse } from "../utils/apiResponse.js";
import Apierror from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
// import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { user } from "../Models/user.Models.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const Users = await user.findById(userId);
    const accessToken = Users.generateAccessToken();
    const refreshToke = Users.generateRefreshToken();

    Users.refreshToke = refreshToke;
    await Users.save({ validateBeforeSave: false });

    return { accessToken, refreshToke };
  } catch (error) {
    throw new Apierror(
      500,
      "Something went wrong during refresh and access token..!!"
    );
  }
};
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

const loginUser = asyncHandler(async (req, res) => {
  //get data from req.body
  //username or email
  //find the user
  //password check
  //access and refersh token
  //send cookie

  const { username, password, email } = req.body;

  if (!username && !email) {
    throw new Apierror(400, "username or password is req");
  }

  const User = await user.findOne({
    $or: [{ username }, { email }],
  });

  if (!User) {
    throw new Apierror(404, "User Does Not Exist");
  }

  const isPasswordValid = await User.isPasswordMatch(password);

  if (!isPasswordValid) {
    throw new Apierror(401, "Password Is Incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    User._id
  );

  const loggedInUser = await user
    .findById(User._id)
    .select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User Logged In Successfully"
      )
    );
});

const logOutUser = asyncHandler(async (req, res) => {
  await user.findByIdAndUpdate(
    req.User._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(201, "User Logged Out Successfully"));
});

export { registerUser, loginUser,logOutUser};
