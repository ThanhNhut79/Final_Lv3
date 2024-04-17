import express from "express";
import { register, login } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You have access to this protected route" });
});

export default router;
