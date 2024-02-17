import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"./public/temp");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

//In the above code, we are using multer.diskStorage to create a storage space for storing the files.
//The destination is the path where the files are stored.
//The filename is the name of the file that is stored in the destination.
//The cb is the callback function that is called after the file is stored.

//The upload function is used to upload the file to the destination.
//The upload function takes the storage as the parameter.

//The upload function is used as a middleware in the route that handles the file upload.

export const upload =multer({storage:storage});