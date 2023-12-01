import  express  from "express";
import { userRegistration } from "../Controllers/userController.js";
import { userLogin } from "../Controllers/userController.js";

const router = express.Router();

router.post("/signUp", userRegistration)
router.post("/login", userLogin)

export default router