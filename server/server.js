import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import router from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.use("/api/user", router);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => {
  res.send("API Working ");
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
