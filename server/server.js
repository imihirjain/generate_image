import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import router from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

// CORS Configuration
const corsOptions = {
  origin: "https://picscribe.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cors(corsOptions));

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.use("/api/user", router);
    app.use("/api/image", imageRouter);

    app.get("/", (req, res) => {
      res.send("API Working");
    });

    app.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });
