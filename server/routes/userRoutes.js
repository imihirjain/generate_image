import express from "express";
import {
  registerUser,
  loginUser,
  userCredits,
} from "../controllers/userController.js";
import userAuth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/credits", userAuth, userCredits);

export default router;

// APIs
// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login
// http://localhost:4000/api/user/credits
