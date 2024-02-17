import Apierror from "../utils/apiError.js";


import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { user } from "../Models/user.Models.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    // const token = req.cookies?.accessToken || req.headers.authorization?.replace("Bearer ", "");

    // console.log(token);
    if (!token) {
      throw new Apierror(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("Decoded Token:", decodedToken);

    const User = await user
      .findById(decodedToken?._id)
      .select("-password -refreshToken");
    console.log("User:", User);

    if (!User) {
      throw new Apierror(401, "Invalid Access Token");
    }

    req.User = User;
    next();
  } catch (error) {
    throw new Apierror(401, error?.message || "Invalid access token");
  }
});
