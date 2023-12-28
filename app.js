import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

config({
  path: "./config/config.env",
});
const app = express();

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cookieParser());

// import Routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import other from "./routes/otherRoutes.js";
app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", other);
export default app;

app.use(ErrorMiddleware);