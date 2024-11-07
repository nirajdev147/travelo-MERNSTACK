import express from "express";
import { 
	createUser,
	updateUser,
	deleteUser,
	getSingleUser,
	getAllUser,
} from "../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//create user
router.post("/", createUser);

//update user
router.put("/:id", verifyUser, updateUser);

//delete user
router.delete("/:id", verifyUser, deleteUser);

//get single user
router.get("/:id", verifyUser, getSingleUser);

//get all users
router.get("/", verifyAdmin, getAllUser);


export default router;