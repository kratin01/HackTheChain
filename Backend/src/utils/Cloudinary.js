import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,//dyy5pcdhh
  api_key: process.env.CLOUDINARY_API_KEY,//389777632939296
  api_secret: process.env.CLOUDINARY_API_SECRET,//xLuJfn9csuaXyh_M_MeQRmr0AA8
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Uploads files to cloudinary cloud
    const response=await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    })
    // File has been uploaded
    console.log("File uploaded",response.url);
    fs.unlinkSync(localFilePath);//it's basically remove the file from local storage which is uploaded on cloudinary
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);//it's basically remove the file from local storage which is not uploaded on cloudinary
    return null;
  } 
};

export { uploadOnCloudinary}