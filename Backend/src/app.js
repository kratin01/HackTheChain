import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //this is used to parse the json data from the request body in simple words it is used to read the data from the request body

app.use(express.urlencoded()); //this is used to parse the urlencoded data from the request body for example agr maine form se data bheja hai toh wo urlencoded data hota hai ulrencoded matlab ki url mai data ko encode krna

app.use(express.static("public")); //this is used to serve the static files like images,css,js etc

app.use(cookieParser()); //this is used to parse the cookies from the request headers cookies is a small piece of data which is stored in the browser of the user

//Import Routes
import userRoutes from "./routes/user.routes.js";

//Use Routes
app.use("/users", userRoutes); // when anyone hit the url with /users then we gave them the access to the userRoutes file we changed the url from /users to /api/v1/users because we want to make our api versioned so that if we make any changes in the future then it will not affect the previous version of the api

export default app;
